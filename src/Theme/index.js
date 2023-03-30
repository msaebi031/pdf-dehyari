import { createTheme } from "@mui/material";
import { faIR as dataGridDeDE } from "@mui/x-data-grid";
import { faIR as coreDeDE } from "@mui/material/locale";
import { faIR } from "@mui/x-date-pickers";

const theme = createTheme(
  {
    direction: "rtl",
    typography: {
      allVariants: {
        fontFamily: "MikhakMedium",
        // textTransform: "none",
      },
      title: {
        fontFamily: "MikhakBold",
        fontSize: "0.9rem",
        fontWeight: 500,
      },
      p: {
        fontFamily: "MikhakLight",
        fontSize: "0.89rem",
      },
      caption: {
        fontFamily: "MikhakLight",
        letterSpacing: "0 !important",
      },
      boldTitle: {
        fontFamily: "MikhakBold",
        fontSize: "1rem",
        fontWeight: 600,
      },
    },
    palette: {
      dark: {
        main: "#000000",
      },
      // text Input
      teal: {
        main: "rgba(0, 0, 0, 0.5)",
      },
      light: {
        light: "#FFFFFF",
        // border
        main: "rgba(0, 0, 0, 0.05)",
      },
      info: {
        main: "#fff",
      },
      green: {
        main: "#189C02",
      },
      red: {
        main: "#f44336",
      },
      purple: {
        main: "#02004D",
      },
      divider: "rgb(137 137 137 / 50%)",
    },
  },
  faIR,
  dataGridDeDE, // x-data-grid translations
  coreDeDE // core translations
);

export default theme;
