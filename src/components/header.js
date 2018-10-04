import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;
const TitleWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;
const Title = styled.h1`
  margin: 0;
`;
const TitleLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <TitleWrapper>
      <Title>
        <TitleLink to="/">{siteTitle}</TitleLink>
      </Title>
    </TitleWrapper>
  </HeaderContainer>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
