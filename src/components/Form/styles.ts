import styled from "styled-components";


export const Container: any = styled.div`
  margin-top: 3rem;
  display: grid;
  place-items: center;
  h2{
    text-align: center;
    margin-bottom: 2rem;
  }
  form{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    input, textarea{
      width: 100%;
      max-width: 60rem;
      padding: 1rem 2rem;
      border-radius: 1.6rem;
      outline: none;
      border: none;
      background:none;
      border: 1px solid #FFF;
      color: white;
      font-weight: 600;
      &::placeholder{
        color: #FFF;
      }
    }

    textarea{
      height: 20rem;
      overflow-y: auto;
      resize: none;
    }

    button{
      padding: 1rem 6rem;
      text-transform: uppercase;
    }
  
  }

  @media (max-width: 740px){
    h2{
      font-size: 2.4rem;
    }

    form{
      width: 100%;
      
      input,textarea{
        width: 100%;
        max-width: 100%;
      }

      button{
        width: 100%;
        max-width: 26rem;
        padding: 1rem 2rem;
      }
    }
  }

  @media (max-width: 480px){
    form{
      textarea{
        height: 16rem;
      }
    }
  }
`


export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;

  button{
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: #fbfbfb;
  }

  @media (max-width: 480px){
    margin-top: 6rem;

    h3{
      font-size: 2rem;
    }
  }
`
