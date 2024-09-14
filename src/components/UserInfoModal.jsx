import React, { useState, useEffect } from "react";
import { Modal, Box, Typography, Button, TextField, Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

const UserInfoModal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const modalClosed = localStorage.getItem("userInfoModalClosed");
    if (!modalClosed) {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("userInfoModalClosed");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("userInfoModalClosed", "true");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { name, phone, email };

    try {
      const response = await fetch("http://localhost:2500/api/user-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("Information submitted successfully!");
        handleClose();
      } else {
        alert("Failed to submit information.");
      }
    } catch (error) {
      console.error("Error submitting information:", error);
      alert("An error occurred. Please try again.");
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
              Hey fur-parent! Want a chance to pamper your pooch? Enter our raffle for a chance to win a prize!! Just submit your info below and we'll email the lucky winners. It's time to get those tails wagging!
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
      </Container>
    </ThemeProvider>
  );
};

export default UserInfoModal;