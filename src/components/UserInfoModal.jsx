import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
  Alert,
  useMediaQuery
} from "@mui/material";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.23)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.23)',
            borderWidth: '1px',
          },
        },
        notchedOutline: {
          borderColor: 'rgba(0, 0, 0, 0.23)',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: 'rgba(0, 0, 0, 0.6)',
          },
        },
      },
    },
  },
});

const textFieldSx = {
    '& .MuiOutlinedInput-root': {
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(0, 0, 0, 0.23)',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(0, 0, 0, 0.23)',
        borderWidth: '1px',
      },
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: 'rgba(0, 0, 0, 0.6)',
    },
  };

const schema = z.object({
  name: z.string().min(4, "Please enter your name").regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
});

const UserInfoModal = ({ onClose }) => {
  const [open, setOpen] = useState(true);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
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

  const onSubmit = async (data) => {
    try {
      console.log("Sending data:", data);

      const response = await fetch("https://jamesoncoatxbackend-f141db66d6c7.herokuapp.com/api/user-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
              width: isMobile ? '80vw' : '40vw',
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
              Attention all paw-rents! 🐾 Ready for a tail-wagging deal? Enter your info below to enter our raffle for a chance to fetch a whopping <Typography component="span" sx={{ fontWeight: 'bold', fontSize: 'calc(1em + 2px)' }}>50% off your next full grooming service!</Typography> It's like winning the doggy lottery! Don't let this op-paw-tunity slip through your paws - fill out the form and let's get your furry friend looking fabulous for half the price! Woof-tastic savings await!
            </Typography>
              <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              autoComplete="name"
              autoFocus
              error={!!errors.name}
              helperText={errors.name?.message}
              sx={textFieldSx}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone"
              autoComplete="tel"
              error={!!errors.phone}
              helperText={errors.phone?.message}
              sx={textFieldSx}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={textFieldSx}
            />
          )}
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