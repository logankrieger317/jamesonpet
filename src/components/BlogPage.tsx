import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, CardActionArea, Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NovBlog from './NovBlog';
import DecBlog from './DecBlog';
import Header from './Header';  // Import the Header component
import Footer from './Footer';  // Import the Footer component

// This interface will be used for each blog post
interface BlogPost {
  id: string;
  component: React.ReactNode;
  title: string;
  preview: string;
}

const BlogPage: React.FC = () => {
  // This array will hold all blog posts
  const blogPosts: BlogPost[] = [
    {
      id: 'nov-2023',
      component: <NovBlog />,
      title: 'Pawsome Thanksgiving: Grooming Tips for a Festive Furry Friend',
      preview: 'How to Keep Your Dog Looking and Feeling Great This November: Thanksgiving Grooming Tips and Winter Coat Care'
    },
    // {
    //   id: 'dec-2023',
    //   component: <DecBlog />,
    //   title: 'Grooming Tips for a Festive Furry Friend',
    //   preview: 'How to Keep Your Dog Looking and Feeling Great This December: Grooming Tips for a Festive Furry Friend'
    // },
    // Add more blog posts here as they are created
  ];

  const [openBlog, setOpenBlog] = useState<string | null>(null);

  const handleOpenBlog = (id: string) => {
    setOpenBlog(id);
  };

  const handleCloseBlog = () => {
    setOpenBlog(null);
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h2" component="h1" sx={{ mb: 8, textAlign: 'center', fontWeight: 'bold', color: 'black' }}>
          Dog Grooming Blog
        </Typography>

        {blogPosts.map((post) => (
          <React.Fragment key={post.id}>
            <Card sx={{ mb: 4, boxShadow: 3 }}>
              <CardActionArea onClick={() => handleOpenBlog(post.id)}>
                <CardContent>
                  <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.preview}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Modal
              open={openBlog === post.id}
              onClose={handleCloseBlog}
              aria-labelledby={`blog-modal-${post.id}`}
              aria-describedby={`blog-modal-description-${post.id}`}
            >
              <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: 800,
                maxHeight: '90vh',
                bgcolor: 'background.paper',
                boxShadow: 24,
                overflow: 'auto',
                borderRadius: 2,
              }}>
                <IconButton
                  aria-label="close"
                  onClick={handleCloseBlog}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                {post.component}
              </Box>
            </Modal>
          </React.Fragment>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default BlogPage;
