import React, { useState, useEffect } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const BookingSpecialModal = () => {
  const [open, setOpen] = useState(false);

  // Show modal on first load unless the modal was closed
  useEffect(() => {
    const modalClosed = localStorage.getItem("januaryModalClosed");
    if (!modalClosed) {
      setOpen(true);
    }
  }, []);

  // Listen for page refresh or close and clear localStorage
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("januaryModalClosed");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("januaryModalClosed", "true"); // Set the flag when the modal is closed
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    textAlign: "center",
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="january-grooming-modal-title"
        aria-describedby="january-grooming-modal-description"
      >
        <Box sx={style}>
          <Typography id="january-grooming-modal-title" variant="h5" component="h2">
            January Grooming Special!
          </Typography>
          <Typography sx={{ mt: 2, mb: 2 }}>
            Ensure your furry friend starts the new year looking their best. Don't miss out on this limited-time offer!
          </Typography>
          <Typography id="january-grooming-modal-description" sx={{ mt: 2, mb: 2 }}>
            🐾 Book by the end of November for a full groom in January and receive a 10% discount!
          </Typography>
          <Button
            href="https://booking.moego.pet/ol/book?name=jamesonandcompanydoggrooming"
            target="_blank"
            sx={{
              width: "100%",
              backgroundColor: "#ef4444",
              color: "white",
              fontWeight: "bold",
              py: 2,
              px: 4,
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#dc2626",
              },
            }}
          >
            Book Now!
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default BookingSpecialModal;
