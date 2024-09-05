import React, { useState, useEffect } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const BackToSchoolModal = () => {
  const [open, setOpen] = useState(false);

  // Show modal on first load unless the modal was closed
  useEffect(() => {
    const modalClosed = localStorage.getItem("modalClosed");
    if (!modalClosed) {
      setOpen(true);
    }
  }, []);

  // Listen for page refresh or close and clear localStorage
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("modalClosed");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("modalClosed", "true"); // Set the flag when the modal is closed
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
        aria-labelledby="walk-in-modal-title"
        aria-describedby="walk-in-modal-description"
      >
        <Box sx={style}>
          <Typography id="walk-in-modal-title" variant="h5" component="h2">
            Back-to-School Grooming Special!
          </Typography>
          <Typography id="walk-in-modal-description" sx={{ mt: 2 }}>
            🐶 Is your pup ready to look their best for the new school year? <br />
            Our walk-in grooming service has you covered! Whether it's a quick trim
            or a full pampering session, we'll have your furry friend looking A+ in no time. 
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Pop in today for our "Face, Feet, and Fanny" trims—because your dog deserves to
            strut into the season like the cool pup they are!
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

export default BackToSchoolModal;
