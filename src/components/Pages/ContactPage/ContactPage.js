import Contact from '../../Contact';
import * as React from 'react';

import Container from '@mui/material/Container';

function ContactPage () {
  return (
    <>
      <Container
        sx={{
          flexGrow: 1,
          minHeight: '100%',
          width: '100vw',
          mt: '100px'
        }}
      >
        <Contact />
      </Container>
    </>
  );
}

export default ContactPage;
