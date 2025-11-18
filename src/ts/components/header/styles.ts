import { css } from 'lit';

export const styles = css`
  header {
    background-color: #111;
    color: #fff;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #333;
  }

  h1 {
    margin: 0;
    font-size: 1.4rem;
    letter-spacing: 0.05em;
  }

  nav a {
    color: #ccc;
    text-decoration: none;
    margin-left: 1.5rem;
    font-size: 1.12rem;
    transition: color 0.2s ease;
  }

  nav a:hover {
    color: #fff;
  }
`;
