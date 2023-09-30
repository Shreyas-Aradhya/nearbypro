import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Stack
      sx={{ width: "100vw", height: "100vh" }}
      spacing={3}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant="h2">404</Typography>
      <Typography variant="h3">Page Not Found</Typography>
      <Link to="/">
        <Button variant="contained">Return to home page</Button>
      </Link>
    </Stack>
  );
};
export default NotFound;
