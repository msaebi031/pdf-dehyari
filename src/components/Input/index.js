import { useRef } from "react";
import PDFS from "../pdf";
import InputTable from "./InputTable";
import Different from "./Different";
import Similar from "./Similar";

import { Divider, Box, Typography, Grid } from "@mui/material";
// Create rtl cache
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const Inputs = () => {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
  });

  const myForm = useRef(null);

  return (
    <Box my={2}>
      <Divider className="divider" />
      <PDFS refProps={myForm} />
      <Typography variant="boldTitle" component="h3" pt={2} className="title">
        پر کردن فرم
      </Typography>
      <Typography variant="p" component="p" pb={3} className="title">
        برای جا به جایی راحت تر از دکمه Tab استفاده کنید
      </Typography>
      <CacheProvider value={cacheRtl}>
        <Grid container spacing={{ xs: 0, sm: 2, md: 3 }} component="form" ref={myForm}>
          <Different />
          <Similar />
        </Grid>

        <Typography variant="boldTitle" component="h3" py={3} className="title">
          پر کردن جدول
        </Typography>
        <InputTable />
      </CacheProvider>
    </Box>
  );
};

export default Inputs;
