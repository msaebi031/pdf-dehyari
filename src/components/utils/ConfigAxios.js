import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "https://pdf-dehyari.vercel.app",
  headers: {
    Authorization: "6LfvH-YZAAAAAMSSiVglqs0tE0mXr1sIdFgScwM-",
    "Content-Type": "application/json",
  },
});

axios.interceptors.response.use(null, (error) => {
  const expectedErrors = error.response && error.response.status >= 400 && error.response.status < 500;
  if (!expectedErrors) {
    console.log("مشکل در ارتباط با سرور ، لطفا مجددا صفحه رو بارگزاری کنید");
  }

  return Promise.reject(error);
});

export default instance;
