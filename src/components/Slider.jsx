import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: yellow;
    display: flex;
    position: relative;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: lightgray;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 1;
    &:hover {
        opacity: 0.5;
    }
`

const Slider = () => {
  return (
      <Container>
          <Arrow direction="left">
              <ArrowLeftOutlined />
          </Arrow>
          <Arrow direction="right">
              <ArrowRightOutlined />
          </Arrow>
      </Container>

  );
};

export default Slider;
