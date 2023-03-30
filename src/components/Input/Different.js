// react
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import moment from "moment-jalaali";
import { account, admin, date, nameDehyari, typeAccount } from "../redux/data";

import axios from "../utils/ConfigAxios";
import { errorTost } from "../utils/reactTostify";

import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Grid, TextField, MenuItem } from "@mui/material";

const Different = () => {
  const [currencies, setCurrencies] = useState([]);
  const [valueDehyari, setValueDehyari] = useState("");
  const [valueType, setValueType] = useState("");
  const dispatch = useDispatch();

  const itemsType = [{ name: "جاری" }, { name: "عمرانی" }];

  const handleOnChange = ({ value, uid }) => {
    switch (uid) {
      case "dehyari":
        setValueDehyari(value);
        const find = currencies.find((e) => e.id === value);
        dispatch(nameDehyari(find.name));
        dispatch(account(find.account));
        dispatch(admin(find.admin));
        break;
      case "type":
        dispatch(typeAccount(value));
        setValueType(value);
        break;
      case "date":
        dispatch(date(value));
        break;
    }
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
  }, []);

  return (
    <>
      <Grid item xs={12} sm={6} md={4} mt={{ xs: 2, sm: 0 }}>
        <TextField
          onChange={(e) => handleOnChange({ value: e.target.value, uid: "dehyari" })}
          label="انتخاب دهیاری"
          multiline
          fullWidth
          select
          className="input text-field"
          aria-describedby="base-name-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
          value={valueDehyari}
        >
          {currencies?.map((option, index) => (
            <MenuItem key={index} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item xs={12} sm={6} md={4} mt={{ xs: 2, sm: 0 }}>
        <TextField
          onChange={(e) => handleOnChange({ value: e.target.value, uid: "type" })}
          label="نوع حساب"
          multiline
          fullWidth
          select
          className="input text-field"
          aria-describedby="base-name-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
          value={valueType}
        >
          {itemsType?.map((option, index) => (
            <MenuItem key={index} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item xs={12} sm={6} md={4} mt={{ xs: 2, sm: 0 }}>
        <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
          <DatePicker
            className="input text-field w-100"
            label="انتخاب تاریخ"
            onChange={(newValue) => handleOnChange({ value: moment(newValue._d).format("jYYYY/jMM/jDD"), uid: "date" })}
          />
        </LocalizationProvider>
      </Grid>
    </>
  );
};

export default Different;
