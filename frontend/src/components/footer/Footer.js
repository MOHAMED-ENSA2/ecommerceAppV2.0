import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h3 style={{ fontSize : "25px" ,
                   color: "white", 
                   textAlign: "center", 
                   marginBottom : "4rem" }}>
        ECOMERCE WEBSITE
      </h3>
      <Container>
        <Row>
          <Column>
            <Heading>Categories</Heading>
            <FooterLink href="#">Food</FooterLink>
            <FooterLink href="#">Beauty</FooterLink>
            <FooterLink href="#">baby product</FooterLink>
            <FooterLink href="#">electronics</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Shipping</FooterLink>
            <FooterLink href="#">Loyalty card</FooterLink>
            <FooterLink href="#">Home delivry</FooterLink>
            <FooterLink href="#">All services</FooterLink>
          </Column>
          <Column>
            <Heading>Cities</Heading>
            <FooterLink href="#">Oujda</FooterLink>
            <FooterLink href="#">Rabat</FooterLink>
            <FooterLink href="#">Tanger</FooterLink>
            <FooterLink href="#">Casa</FooterLink>
          </Column>
          <Column>
            <Heading>Réseaux sociaux</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;