import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    height: 8vh;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    white-space: pre-line;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ;
`

const SmallText = styled.div`
  font-size: 12px;
`

const BigText = styled.div`
  text-align: center;
`

const text = "FASHION MONTH: SS22 BAGS & ACCESSORIES \n Enjoy 10% off ALL Bags & Accessories |  Use Code: "

const Announcement = () => {
  return (
  <Container>
    <BigText>{text}<span style={{"textDecoration":"underline"}}> SS22BA</span></BigText> 
      <SmallText> Ends: February 23rd, 2022 at 11:59AM EST. </SmallText>
  </Container>
  );
};

export default Announcement;
