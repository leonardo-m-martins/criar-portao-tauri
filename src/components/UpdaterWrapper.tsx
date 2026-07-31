import { useState, useEffect } from 'react';
import { check } from '@tauri-apps/plugin-updater';
import { relaunch } from '@tauri-apps/plugin-process';
import { Overlay, Paper, Text, Progress, Stack, Title, Loader } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';

export function UpdaterWrapper({ children }: { children: React.ReactNode }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [statusText, setStatusText] = useState('Procurando atualizações...');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    async function checkForUpdate() {
      try {
        const update = await check();

        if (update) {
          setIsUpdating(true);
          setStatusText(`Baixando versão v${update.version}...`);

          let downloaded = 0;
          let contentLength = 0;

          // Download and install with progress listener
          await update.downloadAndInstall((event) => {
            switch (event.event) {
              case 'Started':
                contentLength = event.data.contentLength || 0;
                break;
              case 'Progress':
                downloaded += event.data.chunkLength;
                if (contentLength > 0) {
                  const percentage = Math.round((downloaded / contentLength) * 100);
                  setProgress(percentage);
                }
                break;
              case 'Finished':
                setStatusText('Instalando atualização e reiniciando...');
                break;
            }
          });

          // Relaunch app once installation finishes
          await relaunch();
        }
      } catch (error) {
        console.error(`Falha ao procurar por atualizações: ${error}`);
        // Ensure UI unlocks if the update check or download fails
        setIsUpdating(false);
      }
    }

    checkForUpdate();
  }, []); // CRITICAL: empty dependency array ensures this runs only ONCE on mount

  // If updating, intercept the screen with a clean full-screen overlay
  if (isUpdating) {
    return (
      <Overlay
        color="#000"
        backgroundOpacity={0.85}
        blur={8}
        fixed
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}
      >
        <Paper
          p="xl"
          radius="md"
          withBorder
          shadow="xl"
          style={{ width: 380, textAlign: 'center' }}
        >
          <Stack align="center" gap="md">
            <IconDownload size={40} color="var(--mantine-color-blue-6)" />

            <div>
              <Title order={3}>Atualizando o Aplicativo</Title>
              <Text size="sm" c="dimmed" mt={4}>
                {statusText}
              </Text>
            </div>

            <Progress
              value={progress}
              animated={progress < 100}
              size="lg"
              radius="xl"
              w="100%"
            />

            <Text size="xs" c="dimmed">
              {progress > 0 ? `${progress}% concluído` : <Loader size="xs" color="blue" />}
            </Text>
          </Stack>
        </Paper>
      </Overlay>
    );
  }

  // Render main app normally when no updates are being applied
  return <>{children}</>;
}