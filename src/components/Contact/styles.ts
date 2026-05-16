import styled from "styled-components";


export const Container = styled.section`
  margin-top: 10rem;

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: 4rem;
    }
    p{
      color: var(--green);
      font-weight: 500;
    }
  }

  .contacts{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 1.5rem;
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 25rem;
      gap: 1.5rem;
      background-color: transparent;
      border: 2px solid var(--green);
      border-radius: 1.4rem;
      padding: 1.2rem 2rem;
      transition: all 0.25s;
      img{
        width: 3rem;
      }
      a{
        color: #FFF;
        font-weight: 500;
        font-size: 1.8rem;
      }
      &:hover{
        background-color: var(--green);
        a{
          color: var(--black);
        }
      }
    }
  }


  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        
      }
    }
  }
  
`
/* old one - 2/1/2023 - 
@media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        flex-direction: column;
      }
    }

*/
