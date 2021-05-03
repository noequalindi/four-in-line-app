import styled from "styled-components";

export const Wrapper = styled.div`
  background-color:  hsl(0, 0%, 8%);
  color: white;
  overflow-x:auto;
  height: auto;
  background: linear-gradient(62deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
    animation: gradient 15s ease infinite; 
     background-size: 300% 300%;
}
@-webkit-keyframes gradient{
 0% {
   background-position: 0 50%;
 }
 50% {
   background-position: 100% 50%;
 }
 100% {
    background-position: 0% 50%;
 }
}
@keyframes gradient{
 0% {
   background-position: 0 50%;
 }
 50% {
   background-position: 100% 50%;
 }
 100% {
    background-position: 0% 50%;
 }
`;
