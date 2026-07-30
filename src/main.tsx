import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@mantine/core/styles.css"
import "./main.css";
import { 
  Button, 
  createTheme, 
  MantineProvider, 
  DEFAULT_THEME, 
  mergeMantineTheme,
  VariantColorsResolver,
  defaultVariantColorsResolver,
} from "@mantine/core";

const variantColorResolverOverride: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);

  if (input.variant === "filled" && input.color === "streamlit") {
    return {
      ...defaultResolvedColors,
      background: "#ff4b4b",
      hover: "#ff0000",
      color: "#ffffff",
    };
  }

  return defaultResolvedColors;
};

const themeOverride = createTheme({
  fontFamily: '"Source Sans 3", sans-serif',
  primaryColor: "streamlit",
  colors: {
    streamlit: [
      "#fff5f5",
      "#ffe3e3",
      "#ffc9c9",
      "#ffa8a8",
      "#ff8787",
      "#ff6b6b",
      "#ff4b4b",
      "#fa5252",
      "#f03e3e",
      "#e03131",
    ],
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        color: "streamlit"
      }
    }),
  },
  variantColorResolver: variantColorResolverOverride,
  cursorType: "pointer",
})



const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={theme}
      defaultColorScheme="light"
    >
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
