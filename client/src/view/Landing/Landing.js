import React from 'react';
import styled from 'styled-components';

import LandingBody from './LandingBody'
import Footer from './Footer'
import Header from '../../components/Navigation/Header'

const Landing = () => {
  return (
    <StyledLanding>
      <Header />
      <LandingBody />
      <Footer/>
    </StyledLanding>
  )
}

const StyledLanding = styled.div`
    min-height: 100%;
`;

export default Landing;