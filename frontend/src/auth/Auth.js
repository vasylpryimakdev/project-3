import React from "react";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";

const Auth = () => {
  return (
    <Box
      width="40%"
      borderRadius={10}
      boxShadow={"5px 5px 10px #ccc"}
      margin="auto"
      marginTop={10}
    >
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          width="60%"
          padding={5}
          margin="auto"
        >
          <Typography padding={1} variant="h4" textAlign="center">
            Signup
          </Typography>

          <FormLabel>Name</FormLabel>
          <TextField name="name" required margin="normal" />

          <FormLabel>Email</FormLabel>
          <TextField name="email" type="email" required margin="normal" />
          <FormLabel>Password</FormLabel>
          <TextField name="password" type="password" required margin="normal" />
          <Button
            sx={{ mt: 2, borderRadius: 10 }}
            type="submit"
            variant="contained"
          >
            Signup
          </Button>
          <Button sx={{ mt: 2, borderRadius: 10 }} variant="outlined">
            Change to Signup
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Auth;
