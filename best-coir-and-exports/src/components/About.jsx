import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';

const theme = createTheme();

export default function About({ data }) {
  const mainFeaturedPosts = data.mainFeaturedPost;
  const mainFeaturedPostCard = mainFeaturedPosts.map((mainFeaturedPost) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
});
return <div className="post_list">{mainFeaturedPostCard}</div>;
}