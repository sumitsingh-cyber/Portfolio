import styled from "styled-components";


export const Container: any = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  
  background-color: #21212150;
  
  backdrop-filter: blur(6px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  .logo{
    display: flex;
    align-items: center;
    color: #FFF;
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 700;
    font-size: 2.4rem;
    img{
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      margin-right: 1rem;
    }
    
    span.portfolio-text {
      @media (max-width: 960px) {
        display: none;
      }
    }

    span.last-name {
      @media (max-width: 600px) {
        display: none;
      }
    }

    span:not(.portfolio-text):not(.last-name) {
      @media (max-width: 400px) {
        display: none;
      }
    }
  }

  nav{
    display: flex;
    align-items: center;
    gap: 1.8rem;
    margin-left: auto;
    margin-right: 2.5rem;
    a{
      color: #FFF;
      padding: 0.6rem;
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      transition: filter 0.25s;

      &.button{
        padding: 0.6rem 2rem;
      }

      &:hover{
        filter: brightness(0.6);
      }
    }

  }

  .menu-container{
    cursor: pointer;
    padding: 0.6rem 0;
  }

  .menu{
    width: 2rem;
    height: 0.2rem;
    background: #FFF;
    position: relative;
    cursor: pointer;
    display: none;

    &:before{
      bottom: 0.5rem;
    }
    &:after{
      top: 0.5rem;
    }


    &.active:before{
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after{
      top: 0;
      transform: rotate(135deg);
    }

    &.active{
      background-color: rgba(0, 0, 0, 0);
    }

  }

  .menu:before, .menu:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: #FFF;
    cursor: pointer;
    transition: .6s;
  }


  input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
    outline: none;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 30px;
    background: var(--green);
    display: block;
    justify-content: center;
    align-items: center;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 10px;
  }

  @media only screen and (max-width: 800px) {
    label {
    position: relative;
   }
  }

  label:after {
    content: '';
    background: #FFF;
    width: 20px;
    height: 20px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 4px;
   transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
  }

  input:checked + label {
    background: var(--pink);
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  @media (max-width: 960px){
    padding: 1.8rem 3rem;

    .menu{
      display: block;
    }

    nav {
      margin: 0;
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: var(--blue);
      top: 0;
      left: 0;
      transition: opacity 0.25s;
      background-color: var(--green);
      gap: 2rem;

      a{
        font-size: 2rem;
        padding: 1rem;
      }

      a.button{
        background-color: var(--pink);
      }

      &.active{
        opacity: 1;
        visibility: visible;
      }
    }
  }

  @media (max-width: 480px){
    padding: 1.4rem 2rem;

    .logo{
      font-size: 2rem;

      img{
        width: 3.4rem;
        height: 3.4rem;
        margin-right: 0.6rem;
      }
    }

    label{
      width: 48px;
      height: 26px;
      right: 0;
    }

    label:after{
      width: 18px;
      height: 18px;
      top: 4px;
      left: 4px;
    }
  }
    
  
`

