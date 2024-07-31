"use client";

import * as React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h6" align="center" gutterBottom>
          My Footer Title
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Here is some information about this website or application. You can
          include contact information, disclaimers, or any other details you
          want to share.
        </Typography>
        <Divider />
        <Typography variant="body2" color="text.secondary" align="center">
          {"© "}
          {new Date().getFullYear()}
          {" My Company. All rights reserved."}
        </Typography>
      </Container>
    </Box>
  );
}
