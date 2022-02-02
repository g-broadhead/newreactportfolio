import { About } from '../../About'
import { Projects } from '../../Projects'
import * as React from 'react';
import Container from '@mui/material/Container';

const AboutPage = () => {
  return (
    <>
      <Container
        sx={{
          flexGrow: 1,
          minHeight: '100%',
          width: '100vw'
        }}
      >
        <About />
        <Projects />
      </Container>
    </>
  );
}

export default AboutPage;
