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
    background: rgba(33, 33, 33, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-right: none;
    border-radius: 1rem 0 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(8px);
    transition: background 0.3s;
    color: #fff;
    padding: 0;

    &:hover {
      background: rgba(33, 33, 33, 0.95);
      .palette-icon {
        transform: rotate(15deg) scale(1.1);
      }
    }
  }

  .palette-icon {
    width: 2.2rem;
    height: 2.2rem;
    transition: transform 0.3s ease-in-out;
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
    .switcher-btn, .color-palette {
      background: rgba(245, 245, 245, 0.85);
      border-color: rgba(0, 0, 0, 0.1);
      color: #000;
    }
    h3 {
      color: rgba(0, 0, 0, 0.6);
    }
    .switcher-btn:hover {
      background: rgba(245, 245, 245, 0.95);
    }
  }

  @media (max-width: 600px) {
    top: 30%;
  }
`;
