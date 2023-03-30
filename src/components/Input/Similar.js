import { useDispatch } from "react-redux";
import { ckeckNumber, fors, joined, number, numberSheets, payTo, price, priceWords, years } from "../redux/data";

import { FormControl, Grid, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import {
  AddCard,
  AttachFile,
  ConfirmationNumberOutlined,
  Filter1,
  Flip,
  PointOfSale,
  RepeatOneOutlined,
  ShoppingBag,
} from "@mui/icons-material";
// number-to-persian
import numberToPersian from "number-to-persian";

const Similar = () => {
  const dispatch = useDispatch();

  const itemsInput = [
    { text: "شماره", icon: <AttachFile />, type: "number", uid: "number" },
    { text: "پیوست", icon: <ConfirmationNumberOutlined />, uid: "joined" },
    { text: "مبلغ", icon: <AddCard />, type: "number", uid: "price" },
    { text: "بابت", icon: <ShoppingBag />, uid: "fors" },
    { text: "دروجه", icon: <PointOfSale />, uid: "payTo" },
    { text: "تعداد", icon: <Filter1 />, type: "number", uid: "numberSheets" },
    { text: "شماره چک", icon: <RepeatOneOutlined />, type: "number", uid: "ckeckNumber" },
    { text: "بودجه سال", icon: <Flip />, uid: "years" },
  ];

  const handleOnChange = ({ value, uid }) => {
    switch (uid) {
      case "number":
        dispatch(number(value));
        break;
      case "joined":
        dispatch(joined(value));
        break;
      case "price":
        dispatch(price(value));
        dispatch(priceWords(numberToPersian(value)));
        break;
      case "fors":
        dispatch(fors(value));
        break;
      case "payTo":
        dispatch(payTo(value));
        break;
      case "numberSheets":
        dispatch(numberSheets(value));
        break;
      case "ckeckNumber":
        dispatch(ckeckNumber(value));
        break;
      case "years":
        dispatch(years(value));
        break;
    }
  };

  return (
    <>
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
              label={item.text}
              endAdornment={<InputAdornment position="start">{item.icon}</InputAdornment>}
              type={item.type ?? "text"}
              onChange={(e) => handleOnChange({ value: e.target.value, uid: item.uid })}
              aria-describedby="base-name-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
        </Grid>
      ))}
    </>
  );
};

export default Similar;
