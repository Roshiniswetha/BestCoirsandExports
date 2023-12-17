import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Carousel from '../components/design/Carousel'
import Typography from '@mui/material/Typography';

const theme = createTheme();

export default function Home() {
  return (
    <>
      <CssBaseline />
      {/* <Container maxWidth="lg" className="main_container"> */}
        <div className="main_content">
          <Carousel />
          <Grid container spacing={4}>
          <div className="main_botton_content">
            <p>
          <Typography variant="body1" gutterBottom  sx={{ textIndent: '2em', marginTop: '2em',marginBottom: '2em' }}>
          Imagine a product that plays a key role in enhancing food production and gardening success and is environmentally friendly and long-lasting…

          It is a material found in nature, a hearty byproduct of the coconuts produced in abundance by coconut palms.

          That product is the naturally occurring fibrous material found on the outside of coconut husks that is naturally processed for use.

          It’s known as coir.
          </Typography>
          </p>
          <p>
            <Typography variant="body1" gutterBottom  sx={{ textIndent: '2em', marginBottom: '1em' }}>
            Coir has been used for centuries by navigators in rope form for rigging and ship cables. There are also records of its use in England and India in floor covering materials in the 19th century. Today, coir is used to create an assortment of products, from rugs and doormats, to plant pots and hanging basket liners, to a cultivation-enhancing gardening material and blankets used for erosion control. Some potting mix products also include coir.

            Coir‘s easily combinable structure makes it useful in a variety of products. It is used to create yarn, brushes, insulation panels, and packaging. While some upholstery manufacturers use ecologically friendly coir on its own, it is also used in a form bonded or combined with rubber as a component of car seats, mattresses, sofas, and other furniture. Coir is also used, when combined with rubber or timber veneers, to create an effective plywood replacement. This is an important factor in the conservation of tropical trees that would otherwise be logged for plywood.
            </Typography>
            </p>
          </div>
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
          </Grid>
        </div>
      {/* </Container> */}
    </>
  );
}