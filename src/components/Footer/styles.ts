import styled from "styled-components";


export const Container: any = styled.footer`
  background-color: #2b2b2b;
  padding: 3rem 15rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;


  .logo{
    font-size: 2.8rem;
    font-weight: 700;
  }

  p{
    letter-spacing: 0.1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    img{
      width: 2.6rem;
      animation: spinning 5s infinite linear;
    }
  }

  .copyright{
    p{
      font-size: 1.6rem;
      color: #888;
    }
  }

  .social-media{
    display: flex;
    align-items: center;
    gap: 2rem;

    img{
      width: 3rem;
      transition: transform 0.3s ease;
      &:hover{
        transform: translateY(-5px);
      }
    }
  }


  @keyframes spinning {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  @media(max-width: 960px){
    padding: 4rem 5rem;
    flex-direction: column;
    gap: 3rem;
    text-align: center;
    
    .social-media{
      gap: 3rem;
    }
  }
  @media(max-width: 600px){
    padding: 4rem 2rem;

    .logo{
      font-size: 2.4rem;
    }

    p{
      font-size: 1.4rem;
      justify-content: center;
      text-align: center;
    }

    .copyright p{
      font-size: 1.4rem;
    }

    .social-media{
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
    }
  }

  @media(max-width: 380px){
    padding: 3rem 1.5rem;
  }
`
