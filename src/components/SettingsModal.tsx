import { useEffect, useState } from 'react';
import { Modal, TextInput, PasswordInput, Button, Group, Stack, Text, Code, Switch, Paper, Tooltip } from '@mantine/core';
import { clearSettings, loadSettings, saveSettings } from '../utils/settings';
import { getVersion } from '@tauri-apps/api/app';
import { open } from '@tauri-apps/plugin-dialog';
import { IconFolder, IconFolderOpen } from '@tabler/icons-react';
import { downloadDir } from '@tauri-apps/api/path';

interface SettingsModalProps {
  opened: boolean;
  onClose: () => void;
}

export function SettingsModal({ opened, onClose }: SettingsModalProps) {
  const [baseUrl, setBaseUrl] = useState('');
  const [token, setToken] = useState('');
  const [autoDownload, setAutoDownload] = useState(false);
  const [downloadPath, setDownloadPath] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [version, setVersion] = useState("");

  // Fetch current settings from Tauri store whenever the modal opens
  useEffect(() => {
    if (opened) {
      setIsLoading(true);
      loadSettings()
        .then((settings) => {
          setBaseUrl(settings.baseUrl);
          setToken(settings.token);
          setAutoDownload(settings.autoDownload);
          if (settings.downloadPath != null)
            setDownloadPath(settings.downloadPath);
          else
            downloadDir().then(d => setDownloadPath(d));
        })
        .catch((error) => console.error("Failed to load settings:", error))
        .finally(() => setIsLoading(false));
    }
  }, [opened]);

  useEffect(() => {
    getVersion().then(v => setVersion(v));
  }, [])

  const handleChangeDirectory = async () => {
    try {
      let path: string;
      if (downloadPath == null) {
        path = await downloadDir();
      } else {
        path = downloadPath;
      }
      const selected = await open({
        directory: true,
        multiple: false,
        defaultPath: path,
        title: 'Selecionar Pasta para Downloads',
      });

      if (typeof selected === 'string') {
        setDownloadPath(selected);
      }
    } catch (error) {
      console.error('Erro ao selecionar diretório:', error);
    }
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await saveSettings({ baseUrl, token, autoDownload, downloadPath });
      onClose();
    } catch (error) {
      console.error("Failed to save settings:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = async () => {
    setIsLoading(true);
    try {
      await clearSettings();
      setBaseUrl('');
      setToken('');
      setAutoDownload(false);
      setDownloadPath(null);
    } catch (error) {
      console.error("Failed to clear settings:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Configurações" centered>
      <Stack>
        <TextInput
          label="URL Base (InvenTree)"
          description="Endpoint para sua instância InvenTree"
          placeholder="https://inventree.seudominio.com/"
          value={baseUrl}
          onChange={(e) => setBaseUrl(e.currentTarget.value)}
          disabled={isLoading}
        />
        
        <PasswordInput
          label="Token API (InvenTree)"
          description="Sua chave secreta de API"
          placeholder="inv-..."
          value={token}
          onChange={(e) => setToken(e.currentTarget.value)}
          disabled={isLoading}
        />

        <Switch
          label="Download Automático de PDFs"
          checked={autoDownload}
          onChange={(e) => setAutoDownload(e.currentTarget.checked)}
        />

        {autoDownload && (
          <Paper withBorder p="xs" radius="md" bg="var(--mantine-color-body)">
            <Group justify="space-between" wrap="nowrap">
              <Group gap="xs" style={{ overflow: 'hidden', flex: 1 }}>
                <IconFolder size={18} style={{ flexShrink: 0 }} />
                <Text>Local para salvar PDFs</Text>
                <Tooltip label={downloadPath} openDelay={500}>
                  <Text size="sm" c="dimmed" truncate>
                    {downloadPath}
                  </Text>
                </Tooltip>
              </Group>

              <Button
                variant="light"
                size="xs"
                leftSection={<IconFolderOpen size={14} />}
                onClick={handleChangeDirectory}
              >
                Alterar
              </Button>
            </Group>
          </Paper>
        )}

        <Group justify="flex-end" mt="md">
          <Text className="text-gray-500" size="md">
            Versão: <Code className="text-green-400" bg="#efefef">{version}</Code>
          </Text>
          <div className="flex-1" />
          <Button 
            variant="light" 
            color="red" 
            onClick={handleClear} 
            loading={isLoading}
          >
            Clear
          </Button>
          <Button 
            onClick={handleSave} 
            loading={isLoading}
          >
            Save
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}