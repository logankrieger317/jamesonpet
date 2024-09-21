import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Snackbar,
  Alert
} from "@mui/material";

const theme = createTheme();

const UserInfoModal = ({ onClose }) => {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
      setOpen(true);
  }, []);

  

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { name, phone, email };

    try {
      console.log("Sending data:", userData);

      const response = await fetch("https://jamesoncoatxbackend-f141db66d6c7.herokuapp.com/api/user-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const responseData = await response.json();
      console.log("Response:", responseData);

      if (response.ok) {
        setSnackbar({
          open: true,
          message: "Information submitted successfully!",
          severity: "success",
        });
        handleClose();
      } else {
        setSnackbar({
          open: true,
          message: `Failed to submit information: ${responseData.message}`,
          severity: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting information:", error);
      setSnackbar({
        open: true,
        message: "Network error: try again shortly",
        severity: "error",
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="user-info-modal-title"
          aria-describedby="user-info-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography id="user-info-modal-title" variant="h5" component="h2" gutterBottom>
              Paw-some Raffle Alert!
            </Typography>
            <Typography variant="body1" gutterBottom>
              Attention all paw-rents! 🐾 Ready for a tail-wagging deal? Enter your info below to enter our raffle for a chance to fetch a whopping <Typography component="span" sx={{ fontWeight: 'bold',  fontSize: 'calc(1em + 2px)' }}>50% off your next full grooming service!</Typography> It's like winning the doggy lottery! Don't let this op-paw-tunity slip through your paws - fill out the form and let's get your furry friend looking fabulous for half the price! Woof-tastic savings await!
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: "#ef4444",
                  "&:hover": {
                    bgcolor: "#dc2626",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Modal>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
};

export default UserInfoModal;