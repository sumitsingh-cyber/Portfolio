import styled from "styled-components";

export const Container: any = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  

  .about-image{
    text-align: center;
    img{
      margin-top: 2rem;
      width: 75%;
      filter: grayscale(0);
      transition: filter 0.5s;
      &:hover{
        filter: grayscale(0);
      }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    margin-top: 10rem;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      justify-content: center;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 75%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    margin-top: 8rem;

    h2{
      font-size: 2.8rem;
    }

    p{
      font-size: 1.6rem;
      letter-spacing: 0.04rem;
    }

    .hard-skills{
      gap: 1.4rem;
    }

    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
      }
    }
  }
    /* ABOUT IMAGE */

.about-image {
  display: inline-block;
  overflow: hidden;

  /* Only corner curl */
  border-radius: 40px 0px 40px 0px;
}

/* IMAGE */

.about-image img {
  width: 380px;
  max-width: 100%;
  display: block;
  object-fit: cover;

  /* Same corner curl */
  border-radius: 40px 0px 40px 0px;

  transition: transform 0.5s ease;
}

/* HOVER */

.about-image:hover img {
  transform: scale(1.03);
}

/* TABLET */

@media (max-width: 992px) {
  .about-image img {
    width: 300px;
  }
}

/* MOBILE */

@media (max-width: 576px) {
  .about-image img {
    width: 230px;

    border-radius: 25px 0px 25px 0px;
  }
}
`
