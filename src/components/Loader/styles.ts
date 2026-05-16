import styled from "styled-components";

export const Container: any = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle at center, #1a1a1a 0%, #0a0a0a 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;

  .loader-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .progress-ring {
    transform: rotate(-90deg);
  }

  .progress-ring__circle {
    transition: stroke-dashoffset 0.1s linear;
  }

  .logo-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-image {
    width: 220px;
    height: 220px;
    object-fit: contain;
    mix-blend-mode: screen;
    border-radius: 50%;
    filter: drop-shadow(0 0 20px rgba(255, 77, 77, 0.4)); /* Updated to red shadow */
    animation: pulse 2s infinite ease-in-out;
  }

  .percentage {
    position: absolute;
    bottom: -80px;
    font-size: 2.4rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: 2px;
    font-family: 'Red Hat Display', sans-serif;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(0.95);
    }
  }

  /* Entrance/Exit animation */
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
