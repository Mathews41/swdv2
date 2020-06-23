import React from 'react';
import styled from 'styled-components';
import '../assets/scss/layout/projects.scss'



const Ul = styled.a`
@media (min-width: 0px) and (max-width: 360px){
    list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  
    flex-flow: column nowrap;
    background-color: #1F3F77;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    font-size: 22pt;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: black;
    
  }
}
@media (min-width: 361px) and (max-width: 480px){
    list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  
    flex-flow: column nowrap;
    background-color: #1F3F77;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    font-size: 22pt;
    padding-top: 2.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: black;
    
  }
}
@media (min-width: 481px) and (max-width: 736px){
    list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  
    flex-flow: column nowrap;
    background-color: #1F3F77;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    font-size: 22pt;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: black;
    
  }
}
@media (min-width: 737px) and (max-width: 980px){
    list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  
    flex-flow: column nowrap;
    background-color: #1F3F77;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    font-size: 22pt;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: black;
    
  }
}
@media (min-width: 981px) and (max-width: 1280px){
    list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  
    flex-flow: column nowrap;
    background-color: #1F3F77;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    font-size: 20pt;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: black;
    
  }
}
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  
    flex-flow: column nowrap;
    background-color: #1F3F77;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    font-size: 22pt;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: black;
    
  }
  @media (min-width: 1281px){
    display: none;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a id='sideNav' href='/architectsStepper'>Home</a></li>
      <li><a id='sideNav' href='/architectsInsulation/'>Insulation</a></li>
      <li><a id='sideNav' href='/architectsRoofing/'>Roofing</a></li>
      <li><a id='sideNav' href='/projectsStepper/'>Projects</a></li>
      <li><a id='sideNav' href='/details/'>Details & Drawings</a></li>


    </Ul>
  )
}

export default RightNav