import { useEffect, useState } from 'react';
import { Modal, TextInput, PasswordInput, Button, Group, Stack } from '@mantine/core';
import { clearSettings, loadSettings, saveSettings } from '../utils/settings';

interface SettingsModalProps {
  opened: boolean;
  onClose: () => void;
}

export function SettingsModal({ opened, onClose }: SettingsModalProps) {
  const [baseUrl, setBaseUrl] = useState('');
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
    <Modal opened={opened} onClose={onClose} title="Credenciais InvenTree" centered>
      <Stack>
        <TextInput
          label="URL Base"
          description="Endpoint para sua instância InvenTree"
          placeholder="https://inventree.seudominio.com/"
          value={baseUrl}
          onChange={(e) => setBaseUrl(e.currentTarget.value)}
          disabled={isLoading}
        />
        
        <PasswordInput
          label="Token API"
          description="Sua chave secreta de API"
          placeholder="inv-..."
          value={token}
          onChange={(e) => setToken(e.currentTarget.value)}
          disabled={isLoading}
        />

        <Group justify="flex-end" mt="md">
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