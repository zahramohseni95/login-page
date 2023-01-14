// components
import { LoginPage } from "./components/LoginPage";

import { MantineProvider } from "@mantine/core";

export function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <LoginPage />
    </MantineProvider>
  );
}
