import styled from "styled-components";


export const Container: any = styled.section`
  margin-top: 12rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 2.5rem;
  }

  .projects{
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;

    .project{
      overflow: hidden;
      background-color: #2b2b2b;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 1.4rem;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;

      &:hover{
        transform: translateY(-5px);
        border-color: var(--green);
        box-shadow: 0 1.8rem 4rem rgba(0, 0, 0, 0.3);
      }

      .project-preview{
        min-height: 36rem;
        padding: 2.4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.4rem;
        color: #FFF;
        position: relative;
        overflow: hidden;

        strong{
          font-size: 4.8rem;
          line-height: 1;
        }

        span{
          color: #ddd;
          font-weight: 700;
        }
      }

      .rverse-preview{
        align-items: center;
        text-align: center;
        background:
          radial-gradient(circle at 13% 26%, rgba(110, 14, 180, 0.45), transparent 34%),
          radial-gradient(circle at 78% 0%, rgba(43, 18, 95, 0.4), transparent 32%),
          linear-gradient(180deg, #090713 0%, #0b0614 100%);

        &:before,
        &:after{
          content: "";
          position: absolute;
          width: 0.3rem;
          height: 0.9rem;
          border-radius: 999px;
          background: rgba(138, 74, 255, 0.35);
          box-shadow:
            18rem 6rem 0 rgba(138, 74, 255, 0.3),
            -16rem 13rem 0 rgba(138, 74, 255, 0.24),
            28rem 18rem 0 rgba(138, 74, 255, 0.18);
        }

        &:before{
          top: 2rem;
          left: 18%;
        }

        &:after{
          right: 14%;
          bottom: 4rem;
        }

        .preview-pill{
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          width: fit-content;
          padding: 0.9rem 2rem;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.78);
          font-size: 1.1rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.18rem;
        }

        .preview-dot{
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background: #00d989;
        }

        strong{
          margin-top: 2.8rem;
          background: linear-gradient(90deg, #8758ff, #f052c8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: clamp(4.2rem, 6vw, 7.2rem);
          letter-spacing: -0.02rem;
        }

        .preview-tagline{
          color: #e4e1ea;
          font-size: clamp(2.7rem, 4vw, 4.6rem);
          line-height: 1.1;
        }

        p{
          max-width: 58rem;
          margin: 0 auto;
          color: #b8b4c8;
          font-size: 1.6rem;
          line-height: 1.6;
        }

        .preview-actions{
          display: flex;
          justify-content: center;
          gap: 1.6rem;
          margin-top: 1.2rem;

          span{
            padding: 1.2rem 2.2rem;
            border-radius: 1.6rem;
            color: #FFF;
            font-size: 1.4rem;
            background: linear-gradient(90deg, #9d26f7, #ea0b86);

            &:last-child{
              background: rgba(255, 255, 255, 0.07);
              border: 1px solid rgba(255, 255, 255, 0.14);
            }
          }
        }
      }

      .skillbridge-preview{
        justify-content: flex-start;
        min-height: 36rem;
        background: #020713;

        .skillbridge-nav{
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          margin: -1.2rem -1.2rem 2rem;
          padding: 1.4rem 1.8rem;
          border-radius: 1.2rem;
          background: #121b2a;

          strong{
            font-size: 2.4rem;
            color: #FFF;

            span{
              color: #7fd3ff;
            }
          }

          ul{
            display: flex;
            align-items: center;
            gap: 1.8rem;
            color: #eef2ff;
            font-size: 1.2rem;
            font-weight: 700;

            li:first-child{
              color: #ffcc00;
              border-bottom: 0.2rem solid #ffcc00;
              padding-bottom: 0.4rem;
            }
          }
        }

        .instructor-pill{
          align-self: center;
          padding: 1.2rem 2.8rem;
          border-radius: 999px;
          color: #FFF;
          background: linear-gradient(90deg, #6757ff, #ec3ca7);
          box-shadow: 0 1rem 2.6rem rgba(147, 72, 255, 0.35);
        }

        .skillbridge-title{
          max-width: 72rem;
          margin: 1.8rem auto 0;
          color: #FFF;
          text-align: center;
          font-size: clamp(2.8rem, 4vw, 4.6rem);
          line-height: 1.15;

          span{
            color: #7361ff;
          }
        }

        p{
          max-width: 72rem;
          margin: 0 auto;
          color: #b7cce8;
          text-align: center;
          font-size: 1.5rem;
          line-height: 1.6;
        }

        .skillbridge-actions{
          display: flex;
          justify-content: center;
          gap: 2rem;

          span{
            padding: 1rem 2.8rem;
            border-radius: 0.8rem;
            background: #ffcc00;
            color: #050914;
            font-size: 1.3rem;
            font-weight: 800;

            &:last-child{
              background: #1d2a3d;
              color: #FFF;
            }
          }
        }

        .code-preview{
          min-height: 8rem;
          margin: 1rem -1.2rem -1.2rem;
          border-radius: 1.2rem 1.2rem 0 0;
          background:
            linear-gradient(90deg, rgba(27, 43, 66, 0.3), rgba(8, 20, 36, 0.4)),
            linear-gradient(135deg, #18314c, #0a1424);
          display: grid;
          gap: 0.7rem;
          align-content: center;
          padding: 1.8rem;

          div{
            width: 50%;
            height: 0.8rem;
            border-radius: 999px;
            background: rgba(126, 211, 255, 0.8);

            &:nth-child(2){
              width: 72%;
              background: rgba(255, 205, 67, 0.75);
            }

            &:nth-child(3){
              width: 38%;
              background: rgba(83, 255, 177, 0.68);
            }
          }
        }
      }

      .project-content{
        padding: 1.8rem;
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      header{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 2rem;
        margin-bottom: 1rem;
      }

      .project-kicker{
        margin-bottom: 0.4rem;
        color: var(--green);
        font-size: 1.3rem;
        font-weight: 700;
        letter-spacing: 0.08rem;
        text-transform: uppercase;
      }

      .project-open{
        color: var(--green);
        display: inline-flex;
        flex: 0 0 auto;
        transition: color 0.25s, transform 0.25s;

        &:hover{
          color: #FFF;
          transform: translateY(-2px);
        }
      }
      
      h3{
        font-size: 2.8rem;
        line-height: 1.2;
      }

      p{
        color: #d7d7d7;
        line-height: 1.55;
        letter-spacing: 0.04rem;
        margin-bottom: 1.2rem;
      }

      .highlights{
        display: grid;
        gap: 0.7rem;
        margin-bottom: 1.4rem;

        li{
          position: relative;
          padding-left: 1.8rem;
          color: #c9c9c9;
          line-height: 1.45;

          &:before{
            content: "";
            position: absolute;
            left: 0;
            top: 0.9rem;
            width: 0.7rem;
            height: 0.7rem;
            border-radius: 50%;
            background-color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;

        .tech-list{
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 1.4rem;

          li{
            padding: 0.6rem 1rem;
            border-radius: 999px;
            background-color: rgba(255, 255, 255, 0.08);
            color: #d6d6d6;
          }
        }
      }
    }
  }

  @media (max-width: 960px){
    margin-top: 8rem;

    .projects{
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 740px){
    h2{
      font-size: 3.2rem;
    }

    .projects{
      grid-template-columns: 1fr;

      .project{
        .project-preview{
          min-height: 28rem;
          padding: 2.4rem;

          strong{
            font-size: 3.4rem;
          }
        }

        .skillbridge-preview{
          .skillbridge-nav{
            ul{
              display: none;
            }
          }
        }

        .project-content{
          padding: 1.6rem;
        }
      }
    }
  }

  @media (max-width: 480px){
    margin-top: 8rem;

    .projects{
      .project{
        .project-preview{
          min-height: 25rem;
          padding: 2rem;

          .preview-actions,
          .skillbridge-actions{
            flex-direction: column;
            gap: 1rem;
            width: 100%;

            span{
              width: 100%;
              text-align: center;
            }
          }
        }

        header{
          gap: 1.4rem;
        }

        h3{
          font-size: 2.2rem;
        }
      }
    }
  }
`
