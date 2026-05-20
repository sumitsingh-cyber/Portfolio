import styled from "styled-components";

export const Container: any = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
      font-size: 2rem;
      line-height: 1.6;
      color: #ccc;
      max-width: 60rem;
    }
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }


  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

/* DEFAULT WHITE TEXT */

.textcolor {
  font-size: 80px;
  font-weight: 700;
  color: white;

  transition: all 0.5s ease;
  cursor: pointer;
}

/* HOVER → GRADIENT */

.textcolor:hover {
  background: linear-gradient(
    90deg,
    #ff512f,
    #dd2476,
    #1fa2ff,
    #12d8fa
  );

  background-size: 300% 300%;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  transform: scale(1.03);

  filter: drop-shadow(0 0 10px rgba(255, 100, 100, 0.4));
}

/* MOBILE */

@media (max-width: 576px) {
  .textcolor {
    font-size: 48px;
  }
}
 /* ========================= */
/* HERO IMAGE SECTION */
/* ========================= */

.hero-image {
  position: relative;
  display: inline-flex;
  padding: 5px;
  border-radius: 30px;
  overflow: hidden;

  /* Classical gradient */
  background: linear-gradient(
    135deg,
    #c9a227,
    #5c1a1b,
    #2c3e50
  );

  /* Reduced gradient spread */
  background-size: 50% 50%;

  /* Smooth animation */
  animation: gradientMove 8s ease infinite;

  transition: all 0.6s ease;

  /* 3D Perspective */
  perspective: 1000px;
}

/* ========================= */
/* IMAGE STYLE */
/* ========================= */

.hero-image img {
  width: 350px;
  height: auto;
  max-width: 100%;
  display: block;
  vertical-align: middle;

  border-radius: 25px;

  transition:
    transform 0.8s ease,
    filter 0.5s ease;

  transform-style: preserve-3d;

  /* Floating effect */
  animation: float3d 4s ease-in-out infinite;
}

/* ========================= */
/* HOVER EFFECT */
/* ========================= */

.hero-image:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
}

.hero-image:hover img {
  transform:
    rotateY(10deg)
    rotateX(4deg)
    scale(1.04);

  filter:
    brightness(1.08)
    contrast(1.08);
}

/* ========================= */
/* GRADIENT ANIMATION */
/* ========================= */

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

/* ========================= */
/* FLOAT ANIMATION */
/* ========================= */

@keyframes float3d {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0px);
  }
}

/* ========================= */
/* TABLET */
/* ========================= */

@media (max-width: 992px) {
  .hero-image img {
    width: 280px;
  }

  .hero-image:hover img {
    transform:
      rotateY(6deg)
      rotateX(3deg)
      scale(1.03);
  }
}

/* ========================= */
/* MOBILE */
/* ========================= */

@media (max-width: 576px) {
  .hero-image {
    padding: 4px;
    border-radius: 22px;
  }

  .hero-image img {
    width: 220px;
    border-radius: 18px;
  }

  .hero-image:hover img {
    transform:
      rotateY(4deg)
      rotateX(2deg)
      scale(1.02);
  }
}

  @media(max-width: 960px){
    padding-top: 18rem;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 0;

    .hero-text{
      max-width: 70rem;
      margin: 0 auto;

      h1{
        font-size: 5.5rem;
      }

      p.small-resume{
        margin-left: auto;
        margin-right: auto;
      }
    }

    .social-media{
      justify-content: center;
      padding-left: 0;
      padding-top: 3rem;
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    padding-top: 14rem;

    .hero-text{
      & > p{
        font-size: 1.6rem;
      }

      h1{
        font-size: 4.5rem;
        line-height: 1.1;
      }

      h3{
        font-size: 2rem;
      }

      p.small-resume{
        font-size: 1.8rem;
        margin-bottom: 3rem;
      }
    }
    .button{
      margin-top: 3rem;
    }
  }

  @media(max-width: 480px){
    padding-top: 13rem;

    .hero-text{
      h1{
        font-size: 3.8rem;
      }

      p.small-resume{
        font-size: 1.6rem;
      }
    }

    .button{
      width: 100%;
      max-width: 26rem;
      display: inline-flex;
      justify-content: center;
      padding: 1.2rem 2rem;
    }
  }
`
