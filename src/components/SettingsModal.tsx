import { useEffect, useState } from 'react';
import { Modal, TextInput, PasswordInput, Button, Group, Stack, Text, Code } from '@mantine/core';
import { clearSettings, loadSettings, saveSettings } from '../utils/settings';
import { getVersion } from '@tauri-apps/api/app';

interface SettingsModalProps {
  opened: boolean;
  onClose: () => void;
}

export function SettingsModal({ opened, onClose }: SettingsModalProps) {
  const [baseUrl, setBaseUrl] = useState('');
  const [token, setToken] = useState('');
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
        })
        .catch((error) => console.error("Failed to load settings:", error))
        .finally(() => setIsLoading(false));
    }
  }, [opened]);

  useEffect(() => {
    getVersion().then(v => setVersion(v));
  }, [])

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await saveSettings({ baseUrl, token });
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