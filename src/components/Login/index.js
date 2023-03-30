import Router from "next/router";
import { errorTost, successTost, warningTost } from "../utils/reactTostify";
import axios from "../utils/ConfigAxios";

import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Input, Typography } from "@mui/material";

export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("email") && data.get("password")) {
      const res = await axios.post("/api/login/checkLogin", {
        email: data.get("email"),
        password: data.get("password"),
      });
      if (res.data.result) {
        successTost(res.data.message);
        Router.push("/");
      } else {
        errorTost(res.data.message);
      }
    } else {
      warningTost("لطفا همه موارد را پر کنید");
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        py={3}
        px={{ xs: 2, sm: 5 }}
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.12)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        className="screen"
        width={{ xs: "80%", sm: "60%", md: "40%" }}
      >
        <Avatar sx={{ m: 1, bgcolor: "purple.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5" className="font-bold" pb={2}>
          ورود
        </Typography>
        <Box component="form" onSubmit={handleSubmit} mt={1} noValidate width={"100%"}>
          <Input
            required
            fullWidth
            id="email"
            placeholder="نام کاربری"
            name="email"
            autoComplete="email"
            autoFocus
            className="margin-input"
          />
          <Input
            required
            fullWidth
            name="password"
            placeholder="پسورد"
            type="password"
            id="password"
            autoComplete="current-password"
            className="margin-input"
          />

          <Button
            size="large"
            type="submit"
            fullWidth
            color="purple"
            variant="contained"
            sx={{ mt: 3, mb: 2, color: "#fff" }}
          >
            ورود
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
