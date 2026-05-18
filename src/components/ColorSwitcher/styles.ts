import styled from "styled-components";

export const Container: any = styled.div`
  position: fixed;
  right: 0;
  top: 25%;
  z-index: 1005;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: translateX(100%);

  &.open {
    transform: translateX(0);
  }

  .switcher-btn {
    position: absolute;
    left: -4.5rem;
    width: 4.5rem;
    height: 4.5rem;
    background: var(--green);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-right: none;
    border-radius: 1rem 0 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(8px);
    transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
    color: #fff;
    padding: 0;
    animation: pulse-glow 2s infinite;

    &:hover {
      filter: brightness(1.15);
      .palette-icon {
        transform: rotate(20deg) scale(1.15);
      }
    }
  }

  .palette-icon {
    width: 2.2rem;
    height: 2.2rem;
    transition: transform 0.3s ease-in-out;
  }

  .theme-tooltip {
    position: absolute;
    right: calc(100% + 1.2rem);
    top: 50%;
    transform: translateY(-50%);
    background: rgba(20, 20, 20, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: 0.8rem 1.4rem;
    border-radius: 2rem 0.5rem 0.5rem 2rem;
    box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    gap: 1rem;
    white-space: nowrap;
    z-index: 1010;
    pointer-events: auto;
    cursor: pointer;
    animation: float 2.5s ease-in-out infinite, fadeIn 0.4s ease-out;

    span {
      font-size: 1.3rem;
      font-weight: 600;
      color: #fff;
      letter-spacing: 0.5px;
    }

    .tooltip-close {
      background: transparent;
      border: none;
      color: rgba(255, 255, 255, 0.5);
      font-size: 1.8rem;
      line-height: 1;
      padding: 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 0.2s, background 0.2s;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;

      &:hover {
        color: #fff;
        background: rgba(255, 255, 255, 0.15);
      }
    }
  }

  @keyframes pulse-glow {
    0% {
      box-shadow: 0 0 0 0px var(--green);
    }
    70% {
      box-shadow: 0 0 0 12px transparent;
    }
    100% {
      box-shadow: 0 0 0 0px transparent;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(-50%) translateX(0);
    }
    50% {
      transform: translateY(-50%) translateX(-6px);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-50%) translateX(10px);
    }
    to {
      opacity: 1;
      transform: translateY(-50%) translateX(0);
    }
  }

  .color-palette {
    background: rgba(33, 33, 33, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-right: none;
    padding: 1.5rem;
    border-radius: 0 0 0 1.5rem;
    box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    text-align: center;

    h3 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: rgba(255, 255, 255, 0.7);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  .colors {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .color-option {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    border: 2px solid transparent;
    cursor: pointer;
    transition: transform 0.2s, border-color 0.2s;
    padding: 0;

    &:hover {
      transform: scale(1.15);
      border-color: #fff;
    }

    &:active {
      transform: scale(0.9);
    }
  }

  /* Light mode styles */
  html.light & {
    .color-palette {
      background: rgba(245, 245, 245, 0.85);
      border-color: rgba(0, 0, 0, 0.1);
    }
    
    .switcher-btn {
      background: var(--green);
      border-color: rgba(0, 0, 0, 0.15);
      color: #fff;
    }

    .theme-tooltip {
      background: rgba(255, 255, 255, 0.9);
      border-color: rgba(0, 0, 0, 0.12);
      box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.15);
      
      span {
        color: #111;
      }
      
      .tooltip-close {
        color: rgba(0, 0, 0, 0.4);
        &:hover {
          color: #000;
          background: rgba(0, 0, 0, 0.08);
        }
      }
    }

    h3 {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  @media (max-width: 600px) {
    top: 35%;

    .theme-tooltip {
      padding: 0.6rem 1rem;
      gap: 0.8rem;
      right: calc(100% + 0.8rem);

      span {
        font-size: 1.1rem;
      }

      .tooltip-close {
        width: 1.8rem;
        height: 1.8rem;
        font-size: 1.6rem;
      }
    }
  }
`;
