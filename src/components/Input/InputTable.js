import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fakeTable, table as tables } from "../redux/data";
import { successTost, warningTost } from "../utils/reactTostify";
import { Healing, MergeType, Numbers } from "@mui/icons-material";
import { Box, Button, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";

const InputTable = () => {
  const [type, setType] = useState("");
  const [number, setNumber] = useState("");
  const [heal, setHeal] = useState("");

  const dispatch = useDispatch();
  const { table } = useSelector((state) => state.data);

  const itemsInput = [
    { text: "نوع و مشخصات اقلام درخواستی", icon: <MergeType />, name: "type", value: type },
    { text: "تعداد یا مقدار", icon: <Numbers />, type: "number", name: "number", value: number },
    { text: "خرید از محل ردیف زیر بلا مانع است", icon: <Healing />, name: "heal", value: heal },
  ];

  const handleOnChange = ({ value, uid }) => {
    switch (uid) {
      case "number":
        setNumber(value);
        break;
      case "type":
        setType(value);
        break;
      case "heal":
        setHeal(value);
        break;
    }
  };

  const handleSubmit = async () => {
    event.preventDefault();
    if (type && number && heal) {
      dispatch(tables({ id: table.length + 1, type, number, heal }));
      dispatch(fakeTable());
      setNumber("");
      setType("");
      setHeal("");
      successTost("با موفقیت اضافه شد");
    } else {
      warningTost("لطفا همه موارد مروبط به جدول را پر کنید");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Grid container spacing={{ xs: 0, sm: 2, md: 3 }}>
        {itemsInput.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} mt={{ xs: 2, sm: 0 }}>
            <FormControl fullWidth>
              <InputLabel htmlFor={`${item.uid}`} className="label">
                {item.text}
              </InputLabel>
              <OutlinedInput
                id={`${item.uid}`}
                className="input"
                fullWidth
                name={item.name}
                value={item.value}
                label={item.text}
                onChange={(e) => handleOnChange({ value: e.target.value, uid: item.name })}
                endAdornment={<InputAdornment position="start">{item.icon}</InputAdornment>}
                type={item.type ?? "text"}
                aria-describedby="base-name-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </Grid>
        ))}
      </Grid>
      <Box textAlign="center" mt={3}>
        <Button type="submit" variant="contained" color="green" sx={{ color: "light.light" }}>
          اضافه کردن
        </Button>
      </Box>
    </Box>
  );
};

export default InputTable;
