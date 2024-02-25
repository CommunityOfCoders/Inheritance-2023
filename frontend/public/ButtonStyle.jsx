import React from "react";
import { styled } from "@mui/system";

const StyledButton = styled("button")(({ theme }) => ({
  textDecoration: 'none',
  maxWidth: 'auto',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: '1.4rem 2.4rem',
  border: 'none',
  textTransform: 'uppercase',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '-webkit-transition': 'all 0.3s ease 0s',
  '-moz-transition': 'all 0.3s ease 0s',
  '-o-transition': 'all 0.3s ease 0s',
  '&:hover, &:active': {
    boxShadow: '0 2rem 2rem 0 rgba(132, 144, 255, 0.3)',
    boxShadow: theme.shadows[3],
    transform: 'scale(0.96)',
  },
  'a': {
    textDecoration: 'none',
    color: theme.palette.common.white,
    fontSize: '1.8rem',
  },
}));

function MaterialUIButton() {
  return (
    <StyledButton>
      <a href="#">Click me</a>
    </StyledButton>
  );
}

export default MaterialUIButton;
