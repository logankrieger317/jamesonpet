import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemIcon, ListItemText, Box, TextField, Button, Modal, Container } from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';

interface Comment {
  id: string;
  text: string;
  firstName: string;
  dogName: string;
  email: string;
  requestFeedback: boolean;
  date: Date;
}

const DecBlog: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newComment, setNewComment] = useState({
    firstName: '',
    dogName: '',
    email: '',
    text: '',
    requestFeedback: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setNewComment(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCommentSubmit = () => {
    if (newComment.text.trim() && newComment.firstName.trim() && newComment.dogName.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        ...newComment,
        date: new Date()
      };
      setComments(prevComments => [...prevComments, comment]);
      setIsModalOpen(false);
      setNewComment({ firstName: '', dogName: '', email: '', text: '', requestFeedback: false });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ p: { xs: 2, sm: 4 } }}>
      <Box sx={{ maxWidth: '900px', margin: '0 auto' }}>
        <Typography variant="h4" component="h1" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold' }}>
          How to Keep Your Dog Looking and Feeling Great This November: Thanksgiving Grooming Tips and Winter Coat Care
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          As the holiday season approaches, November is a busy time for families—and that includes your furry family members too! Between Thanksgiving gatherings, cooler weather, and the upcoming holidays, it's important to make sure your dog is well-groomed and comfortable. Whether you're hosting Thanksgiving or simply want your pup to look and feel their best, here are some essential grooming tips for November.
        </Typography>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'semibold' }}>
            1. Get Your Dog Ready for Thanksgiving Guests
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Thanksgiving is a time for family, friends, and, of course, delicious food. If you're hosting or attending gatherings, you'll want your dog to look their best for the occasion. Here's how grooming can help:
          </Typography>
          <List sx={{ ml: 2 }}>
            <ListItem>
              <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Freshen Up Their Coat: A good bath and grooming session will remove dirt, loose hair, and any lingering smells." />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Nail Trimming: Make sure to get your dog's nails trimmed before Thanksgiving to avoid accidental scratches." />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Tidy Up the Face and Ears: Cleaning your dog's ears and trimming around the face will give them a polished look." />
            </ListItem>
          </List>
          <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
            Pro Tip: Book a grooming appointment a few days before Thanksgiving to ensure your dog is guest-ready!
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'semibold' }}>
            2. Keep Your Dog Safe During Thanksgiving Dinner
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            While it's tempting to share Thanksgiving treats with your pup, it's important to know which foods are dangerous for dogs. Avoid giving your dog any of the following:
          </Typography>
          <List sx={{ ml: 2 }}>
            <ListItem>
              <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Turkey Bones: Cooked bones can splinter and cause internal damage or choking." />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Stuffing with Garlic or Onions: Both garlic and onions are toxic to dogs, even in small amounts." />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Desserts with Chocolate or Raisins: These common dessert ingredients are harmful to dogs, so be sure to keep pies and cakes out of reach." />
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Instead, consider making some dog-friendly Thanksgiving treats! There are plenty of easy recipes out there, like pumpkin dog biscuits or plain cooked sweet potatoes.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'semibold' }}>
            3. Prepare Your Dog's Coat for Cooler Weather
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            As the weather cools down, it's time to switch up your dog's grooming routine to prepare for winter. Depending on your dog's breed, they may be growing a thicker coat to keep warm, which requires extra care.
          </Typography>
          <List sx={{ ml: 2 }}>
            <ListItem>
              <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Regular Brushing: Even though it's cooler, dogs can still shed during fall and winter. Regular brushing will help reduce shedding and keep your dog's coat healthy and tangle-free." />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Protect Their Paws: Cold weather can cause dry, cracked paws, especially if your dog spends a lot of time outdoors. Apply a dog-safe paw balm to protect their paw pads from the elements and prevent irritation." />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Check for Seasonal Allergies: Even though spring is typically associated with allergies, fall can also trigger allergic reactions in dogs. If your pup seems itchy or uncomfortable, consult your vet and consider hypoallergenic shampoos." />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'semibold' }}>
            4. Schedule Pre-Holiday Grooming Sessions
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            The holiday season is one of the busiest times for dog grooming appointments. If you're planning to host Christmas or other celebrations in December, it's a good idea to book your dog's grooming session early. Not only will this guarantee your dog looks fantastic for the holidays, but it will also allow them to feel more comfortable if they'll be meeting new people or spending time around guests.
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
            Pro Tip: Ask your groomer if they offer holiday-themed grooming, like special bows, bandanas, or seasonal scents!
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'semibold' }}>
            5. Show Gratitude for Your Groomer This November
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            November is a month of gratitude, and that includes being thankful for the professionals who help keep your dog looking and feeling their best. November 12th is National Dog Groomer Appreciation Day, so take a moment to thank your groomer! Whether it's leaving a positive review online, sharing your experience on social media, or just saying thank you during your next appointment, your appreciation can go a long way.
          </Typography>
        </Box>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'semibold' }}>
            Final Thoughts: November Grooming Made Easy
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            By following these grooming tips, you can ensure that your dog is happy, healthy, and ready to join in the Thanksgiving festivities. Don't forget, regular grooming is key to keeping your pup comfortable during the colder months, and it also prevents issues like matting, shedding, and dry skin.
          </Typography>

          <Typography variant="body1" sx={{ mb: 4 }}>
            At Jameson & Company Dog Grooming, we're here to help you every step of the way. Whether you need a pre-Thanksgiving clean-up or are preparing your dog for the winter season, we've got the skills and experience to make sure your pup looks and feels amazing.
          </Typography>

          <Typography variant="h6" component="h3" sx={{ mt: 4, mb: 2, fontWeight: 'semibold' }}>
            Call to Action:
          </Typography>
          <Typography variant="body1">
            Ready to give your dog the pampering they deserve this season? Contact us to book a grooming session or visit our website for more information. We can't wait to make your pup look fabulous this November!
          </Typography>
        </Box>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h6" sx={{ mb: 4, color: 'black' }}>Comments</Typography>
          <List sx={{ width: '100%' }}>
            {comments.map((comment) => (
              <ListItem key={comment.id} sx={{ padding: 0, marginBottom: 2 }}>
                <Box 
                  sx={{ 
                    width: '100%', 
                    padding: 2,
                    backgroundColor: '#f8fafc',
                    borderRadius: 2,
                    boxShadow: 1,
                  }}
                >
                  <Typography sx={{ color: 'black', fontWeight: 'bold', mb: 1 }}>
                    {`${comment.firstName} and ${comment.dogName}`}
                  </Typography>
                  <Typography sx={{ color: 'black', mb: 1 }}>
                    {comment.text}
                  </Typography>
                  <Typography sx={{ color: 'gray', fontSize: '0.8rem' }}>
                    {comment.date.toLocaleString()}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: '#dc2626', 
              color: 'white', 
              mt: 2,
              '&:hover': {
                backgroundColor: '#b91c1c',
              },
            }}
            onClick={() => setIsModalOpen(true)}
          >
            Add Comment
          </Button>
        </Box>

        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          aria-labelledby="comment-modal-title"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}>
            <Typography id="comment-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
              Add a Comment
            </Typography>
            <TextField
              fullWidth
              margin="normal"
              label="First Name"
              name="firstName"
              value={newComment.firstName}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Dog's Name"
              name="dogName"
              value={newComment.dogName}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              type="email"
              value={newComment.email}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Comment"
              name="text"
              multiline
              rows={4}
              value={newComment.text}
              onChange={handleInputChange}
            />
            <Button 
              variant="contained" 
              sx={{ backgroundColor: '#dc2626', color: 'white', mt: 2 }}
              onClick={handleCommentSubmit}
            >
              Submit Comment
            </Button>
          </Box>
        </Modal>
      </Box>
    </Container>
  );
};

export default DecBlog;
