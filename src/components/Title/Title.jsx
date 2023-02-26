import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export function Title ({title}){
    return <StyledTitle>{title}</StyledTitle>;
  }


export default Title;

const StyledTitle = styled.h2`
  margin-bottom: 20px;
  color: blue;
`;

Title.propTypes = {
  title: PropTypes.string,

};