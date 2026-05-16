import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;

  .colors {
    display: flex;
    gap: 0.8rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .color-option {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 2px solid transparent;
    cursor: pointer;
    transition: transform 0.2s, border-color 0.2s;
    padding: 0;

    &:hover {
      transform: scale(1.2);
      border-color: #fff;
    }

    &:active {
      transform: scale(0.9);
    }
  }

  @media (max-width: 960px) {
    margin-right: 0;
    margin-bottom: 2rem;
    
    .colors {
      padding: 0.8rem 1.5rem;
    }
    
    .color-option {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;
