import { Avatar, Box, Container } from "@mui/material";
import Modal_Edit from "./Modal_Edit";

const NavBar = () => {
  return (
    <Box borderBottom="2px solid rgba(0, 0, 0, 0.05)" py={2} position="static" bgcolor="light.light">
      <Container maxWidth="xl">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Avatar variant="rounded" className="navBar-avatar" alt="Remy Sharp" src="/imgs/logo.png" />
          <Modal_Edit />
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
