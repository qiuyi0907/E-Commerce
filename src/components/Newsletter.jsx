import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 30vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 50px;
    margin-bottom: 25px;
    color: white;
`

const Description = styled.div`
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 30px;
    ${mobile({ textAlign: "center" })}
    color: white;
`

const InputContainer = styled.div`
    width: 40%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px splid lightgray;
    ${mobile({ width: "80%" })}


`

const Input = styled.input`
    border: 1px solid black;
    flex: 8;
    padding-left: 20px;
`

const Button = styled.button`
    flex: 1;
    border: 1px solid black;
    background-color: white;
    color: black;
    cursor: pointer;
`

const Newsletter = () => {
  return <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from you favorite products.</Description>
      <InputContainer>
      <Input placeholder='Your email'/>
      <Button>
          <Send />
      </Button>
      </InputContainer>
  </Container>;
};

export default Newsletter;
