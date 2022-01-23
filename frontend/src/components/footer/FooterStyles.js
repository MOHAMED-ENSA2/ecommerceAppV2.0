import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 3% 2.5%;
  background-color: #0E5AA7;
  bottom: 0;
  width: 100%;
  
  margin-top  :80px; 
  @media (max-width: 1000px) {
    padding:  3.5rem 3rem;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 2.5rem;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-top: 15px;
  font-size: 13.5px;
  text-decoration: none;
   
  &:hover {
      color: black;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom : 10px ; 
  font-weight: bold;
`;