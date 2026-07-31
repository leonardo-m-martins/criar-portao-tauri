import {
  Button,
  Checkbox,
  Container,
  Flex,
  Group,
  NumberInput,
  Paper,
  Radio,
  Stack,
  Table,
  Tabs,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useEffect, useMemo, useState } from "react";
import { Company, CompanyService, OpenAPI, PaginatedCompanyList, Part } from "./api";
import { loadSettings } from "./utils/settings";
import { useDisclosure } from "@mantine/hooks";
import { SettingsModal } from "./components/SettingsModal";
import { buildMaterialsMap, calculateMaterials, Material, PartsMap, ProductDetails } from "./utils/calculation";
import { getPartsMapByIpns } from "./utils/parts";
import { generatePdf } from "./utils/genPdf";
import { openPdfWindow } from "./utils/pdfWindow";

export default function App() {

  const [configured, setConfigured] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  // ------------------------------------------------------------
  // Client state
  // ------------------------------------------------------------
  
  const [clientName, setClientName] = useState("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [taxId, setTaxId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [selectedClient, setSelectedClient] = useState("");

  const [clients, setClients] = useState<PaginatedCompanyList | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [currentClientPage, setCurrentClientPage] = useState<Company[]>([]);
  const PAGE_STEP = 20;

  useEffect(() => {
    async function init() {
      const settings = await loadSettings();

      if (settings.baseUrl && settings.token) {
        OpenAPI.BASE = settings.baseUrl;
        OpenAPI.TOKEN = undefined;
        OpenAPI.HEADERS = {
          ...OpenAPI.HEADERS,
          "Authorization": `Token ${settings.token}`,
        }
        close();
        setConfigured(true);
      } else {
        open();
      }
    }

    init();
  }, []);

  useEffect(() => {
    async function getClients() {
      const companies = await CompanyService.companyList(PAGE_STEP, undefined, true, undefined, undefined,
        undefined, offset
      );
      setClients(companies);
      setCurrentClientPage(companies.results)
    }

    if (configured) {
      getClients()
    }
  }, [configured, offset])

  function loadNextClientPage() {
    setOffset(offset + PAGE_STEP);
  }

  function loadPreviousClientPage() {
    setOffset(offset - PAGE_STEP);
  }

  async function reloadClientPage() {
    const companies = await CompanyService.companyList(PAGE_STEP, undefined, true, undefined, undefined,
      undefined, offset
    );
    setClients(companies);
    setCurrentClientPage(companies.results);
  }
  
  async function handleAddClient() {
    setLoading(true);

    const formatValue = (val: string) => (val && val.trim() !== "" ? val.trim() : undefined);

    const client: Partial<Company> = {
      name: clientName.trim(),
      is_customer: true,
      is_supplier: false,
      is_manufacturer: false,
      phone: formatValue(phone),
      email: formatValue(email),
      tax_id: formatValue(taxId),
    };

    try {
      await CompanyService.companyCreate(client as Company);
      setSelectedClient(clientName);
      reloadClientPage();
    } catch (error: any) {
      // This will print the exact backend validation error JSON from InvenTree
      console.error("Server validation error:", error.body);
    } finally {
      setLoading(false);
    }
  }

  // ------------------------------------------------------------
  // Product state
  // ------------------------------------------------------------

  const [color, setColor] = useState("");
  const [code, setCode] = useState("");

  const [width, setWidth] = useState(3000);
  const [height, setHeight] = useState(2000);

  const [type1, setType1] = useState<"Traz" | "Dentro">("Traz");
  const [type2, setType2] = useState<"Traz" | "Dentro">("Traz");

  const [closed, setClosed] = useState<"Fechada" | "Transvision">("Fechada");

  const [flag, setFlag] = useState(false);
  const [trapdoor, setTrapdoor] = useState(false);
  const [door, setDoor] = useState(false);


  // ------------------------------------------------------------
  // Material state
  // ------------------------------------------------------------

  const [partsMap, setPartsMap] = useState<PartsMap>();
  const [materials, setMaterials] = useState<Material[]>([]);

  useEffect(() => {
      let productDetails: ProductDetails = {
        folga: 45,
        width: width,
        height: height,
        type1: type1,
        type2: type2,
        fechadaOuTransvision: closed,
        flag: flag,
        door: door,
        trapdoor: trapdoor
      }
      setMaterials([]);
      setMaterials(calculateMaterials(productDetails, partsMap));
    }, [width, height, type1, type2, closed, flag, door, trapdoor, partsMap]
  );

  async function handlePdf() {
    let productDetails: ProductDetails = {
      folga: 45,
      width: width,
      height: height,
      type1: type1,
      type2: type2,
      fechadaOuTransvision: closed,
      flag: flag,
      door: door,
      trapdoor: trapdoor
    }
    const blob = await generatePdf({
      client: selectedClient,
      code: code,
      color: color,
      date: new Date().toLocaleDateString("pt-BR")
    }, productDetails, materials);

    const url = URL.createObjectURL(blob);

    openPdfWindow(url, `${clientName}-${code}`);

    // URL.revokeObjectURL(url);
  }

  useEffect(() => {
    async function getPartsMapEffect() {
      console.log("Fetching parts...");
      const map = await getPartsMapByIpns();
      setPartsMap(map);
    }

    if (configured) {
      getPartsMapEffect();
    }
  }, [configured])

  return (
    <Paper
      maw={900}
      mx="auto"
      p="xl"
    >
      <SettingsModal opened={opened} onClose={close} />

      <Tabs defaultValue="client">

        <Tabs.List>
          <Tabs.Tab value="client">
            Clientes
          </Tabs.Tab>

          <Tabs.Tab value="product">
            Produto
          </Tabs.Tab>

          <Tabs.Tab value="material">
            Material
          </Tabs.Tab>
          <div className="flex-1"/>
          <Button variant="transparent" onClick={open}>Configurações</Button>
        </Tabs.List>


        {/* ======================================================
            CLIENT
        ====================================================== */}

        <Tabs.Panel value="client" pt="xl">
          <Stack>
            <Title order={2}>
              Clientes
            </Title>

            <TextInput
              label="Cliente"
              placeholder="Nome do cliente"
              value={clientName}
              onChange={(e) => setClientName(e.currentTarget.value)}
            />

            <TextInput
              label="Telefone"
              placeholder="(77) 91234-5678"
              value={phone}
              onChange={(e) => setPhone(e.currentTarget.value)}
            />

            <TextInput
              label="Email"
              placeholder="email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />

            <TextInput
              label="CPF ou CNPJ"
              placeholder="000.000.000-00"
              value={taxId}
              onChange={(e) => setTaxId(e.currentTarget.value)}
            />

            <Button onClick={handleAddClient} disabled={loading}>
              Adicionar Cliente
            </Button>

            <div className="border border-gray-200 rounded-md">
              <Table highlightOnHover>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th style={{ width: 40 }}></Table.Th> {/* Selection column header */}
                    <Table.Th>Nome</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                
                <Table.Tbody>
                  {currentClientPage.map((client) => {
                    const isSelected = selectedClient === client.name;
                    
                    return (
                      <Table.Tr 
                        key={client.name}
                        onClick={() => setSelectedClient(client.name)}
                        style={{ cursor: 'pointer' }}
                        bg={isSelected ? 'var(--mantine-color-default-hover)' : undefined}
                      >
                        <Table.Td>
                          <Radio 
                            checked={isSelected} 
                            onChange={() => setSelectedClient(client.name)}
                            aria-label={client.name}
                          />
                        </Table.Td>
                        <Table.Td>{client.name}</Table.Td>
                      </Table.Tr>
                    );
                  })}
                </Table.Tbody>
              </Table>
            </div>

            <Container className="flex justify-between w-full">
              <Button
                variant="default"
                onClick={loadPreviousClientPage}
                disabled={offset < PAGE_STEP}
              >
                Página Anterior
              </Button>
              <Button
                variant="default"
                onClick={loadNextClientPage}
                disabled={clients == null || (offset + PAGE_STEP) > clients.count}
              >
                Próxima Página
              </Button>
            </Container>
          </Stack>
        </Tabs.Panel>



        {/* ======================================================
            PRODUCT
        ====================================================== */}


        <Tabs.Panel value="product" pt="xl">
          <Stack>
            <Title order={2}>
              Produto
            </Title>

            <TextInput
              label="Cliente"
              value={selectedClient}
              disabled
            />

            <TextInput
              label="Cor"
              value={color}
              onChange={(e)=>setColor(e.currentTarget.value)}
            />

            <TextInput
              label="Código"
              value={code}
              onChange={(e)=>setCode(e.currentTarget.value)}
            />

            <Group justify="center" gap="xl" align="flex-start">
              <Radio.Group
                value={type1}
                onChange={setType1}
              >
                <Stack gap="xs">
                  <Radio value="Traz" label="Traz"/>
                  <Radio value="Dentro" label="Dentro"/>
                </Stack>
              </Radio.Group>

              <Stack>
                <div
                  className="w-40 h-40 bg-gray-200 border-2 border-gray-600"
                />

                <NumberInput
                  label="Largura (milímetros)"
                  value={width}
                  onChange={(v)=>setWidth(Number(v))}
                />
              </Stack>

              <Stack>
                <Radio.Group
                  value={type2}
                  onChange={setType2}
                >
                  <Stack gap="xs">
                    <Radio value="Traz" label="Traz"/>
                    <Radio value="Dentro" label="Dentro"/>
                  </Stack>
                </Radio.Group>

                <NumberInput
                  label="Altura (milímetros)"
                  value={height}
                  onChange={(v)=>setHeight(Number(v))}
                />
              </Stack>
            </Group>


            <Radio.Group
              label="Fechada/Transvision"
              value={closed}
              onChange={setClosed}
              className="gap-1"
            >
              <Stack gap="xs">
                <Radio value="Fechada" label="Fechada"/>
                <Radio value="Transvision" label="Transvision"/>
              </Stack>
            </Radio.Group>

            <Checkbox
              label="Bandeira"
              checked={flag}
              onChange={(e)=>setFlag(e.currentTarget.checked)}
            />

            <Checkbox
              label="Portinhola"
              checked={door}
              onChange={(e)=> {
                setDoor(e.currentTarget.checked);
                if (e.currentTarget.checked)
                  setTrapdoor(false);
              }}
            />

            <Checkbox
              label="Alçapão"
              checked={trapdoor}
              onChange={(e)=> {
                setTrapdoor(e.currentTarget.checked);
                if (e.currentTarget.checked)
                  setDoor(false);
              }}
            />

          </Stack>
        </Tabs.Panel>



        {/* ======================================================
            MATERIAL
        ====================================================== */}


        <Tabs.Panel value="material" pt="xl">
          <Stack>
            <Title order={2}>
              Material
            </Title>

            <Text>
              Materiais calculados:
            </Text>

            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th/>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Quantidade</Table.Th>
                  <Table.Th>Medida</Table.Th>
                  <Table.Th>Unidade</Table.Th>
                </Table.Tr>
              </Table.Thead>

              <Table.Tbody>
                {materials.map((m, i)=>(
                  <Table.Tr key={i}>

                    <Table.Td>
                        <Checkbox
                          checked={m.selected}
                          onChange={(event) => {
                            const checked = event.currentTarget.checked;
                            setMaterials((prev) =>
                              prev.map((item) =>
                                item.part.IPN === m.part.IPN && item.part.name === m.part.name
                                  ? { ...item, selected: checked }
                                  : item
                              )
                            );
                          }}
                        />
                    </Table.Td>

                    <Table.Td>
                      {m.part.name}
                    </Table.Td>

                    <Table.Td>
                      {m.quantity}
                    </Table.Td>

                    <Table.Td>
                      {m.measure}
                    </Table.Td>

                    <Table.Td>
                      {m.unit}
                    </Table.Td>

                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>


            <Button onClick={handlePdf}>
              Gerar Ficha PDF
            </Button>

          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
}