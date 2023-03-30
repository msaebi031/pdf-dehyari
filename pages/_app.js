import theme from "../src/Theme";
import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { wrapper } from "../src/components/redux/store/configureStore";
import { Provider } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import "../public/css/main.css";
import axios from "axios";

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  axios.defaults.headers.common["Authorization"] = process.env.AUTH_TOKEN;

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...props.pageProps} />
        <ToastContainer rtl theme="light" toastClassName="font-light" autoClose={3000} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
