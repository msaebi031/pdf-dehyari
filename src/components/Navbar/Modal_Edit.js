import { useEffect, useState } from "react";
import { Clear } from "@mui/icons-material";
import { Box, Button, IconButton, MenuItem, Modal, TextField, Typography } from "@mui/material";
import axios from "../utils/ConfigAxios";
import { errorTost, successTost } from "../utils/reactTostify";
import { useRouter } from "next/router";

// Create rtl cache
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const Modal_Edit = () => {
  const router = useRouter();

  const [currencies, setCurrencies] = useState([]);
  const [valueDehyari, setValueDehyari] = useState("");
  const [selectdehyari, setSelectdehyari] = useState("");
  const [namedehyari, setNamedehyari] = useState("");
  const [admindehyart, setDdmindehyart] = useState("");
  const [accountdehyari, setAccountdehyari] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setSelectdehyari(false);
    setOpen(!open);
  };

  const handleChange = (event) => {
    setValueDehyari(event.target.value);
    const find = currencies.find((e) => e.id === event.target.value);
    setSelectdehyari(event.target.value);
    setNamedehyari(find.name);
    setDdmindehyart(find.admin);
    setAccountdehyari(find.account);
  };

  const handleChangeData = (key, value) => {
    switch (key) {
      case "name":
        setNamedehyari(value);
        break;
      case "admin":
        setDdmindehyart(value);
        break;
      case "account":
        setAccountdehyari(value);
        break;
    }
  };

  const handleSubmit = () => {
    axios
      .post("/api/infDehyari/update", {
        id: selectdehyari,
        name: namedehyari,
        admin: admindehyart,
        account: accountdehyari,
      })
      .then((res) => {
        successTost("با موفقیت ویرایش شد");
        router.reload(window.location.pathname);
      })
      .catch(() => {
        errorTost("خطایی پیش امده است ...");
      });
  };

  useEffect(() => {
    axios
      .get("/api/infDehyari/selectAll")
      .then((res) => {
        setCurrencies(res.data.data);
      })
      .catch(() => {
        errorTost("خطایی پیش امده است ...");
      });
  }, [selectdehyari]);

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <Button onClick={handleOpen} variant="contained" color="purple" sx={{ color: "light.light" }}>
        ویرایش دهیاری ها
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleOpen}
      >
        <Box width={{ xs: "210px", sm: "300px", md: "400px" }} className="style-modal">
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography className="font-bold" id="modal-modal-title" variant="body1" component="h2">
              ویرایش دهیاری ها
            </Typography>
            <IconButton
              onClick={handleOpen}
              className="btn-clearmodal"
              aria-label="delete"
              size="small"
              // sx={{ left: { xs: "93%", sm: "95%", md: "96.5%" } }}
            >
              <Clear color="red" />
            </IconButton>
          </Box>
          <TextField
            sx={{ mt: 2 }}
            onChange={handleChange}
            id="outlined-multiline-flexible"
            label="انتخاب کنید"
            value={valueDehyari}
            multiline
            fullWidth
            select
          >
            {currencies?.map((option, index) => (
              <MenuItem key={index} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>

          {selectdehyari ? (
            <Box my={1.5}>
              <TextField
                sx={{ mt: 3.5 }}
                fullWidth
                // required
                id="standard-required"
                label="دهیاری روستای"
                value={namedehyari}
                onChange={(e) => handleChangeData("name", e.target.value)}
                variant="standard"
                size="small"
              />

              <TextField
                sx={{ mt: 3.5 }}
                fullWidth
                // required
                id="standard-required"
                label="نام دهیار"
                value={admindehyart}
                onChange={(e) => handleChangeData("admin", e.target.value)}
                variant="standard"
                size="small"
              />

              <TextField
                sx={{ mt: 3.5 }}
                fullWidth
                // required
                id="standard-required"
                label="شماره حساب"
                value={accountdehyari}
                onChange={(e) => handleChangeData("account", e.target.value)}
                variant="standard"
                size="small"
              />

              <Box mt={3} display="flex" alignItems="center" justifyContent="space-between">
                <Button color="green" sx={{ color: "light.light" }} variant="contained" onClick={() => handleSubmit()}>
                  ویرایش کردن
                </Button>
                <Button onClick={handleOpen} color="red" sx={{ color: "light.light" }} variant="contained">
                  بازگشت
                </Button>
              </Box>
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Modal>
    </CacheProvider>
  );
};

export default Modal_Edit;
