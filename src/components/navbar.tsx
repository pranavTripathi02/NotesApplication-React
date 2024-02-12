import styled, { css } from "styled-components";
function Navbar() {
  return (
    <Nav>
      <div className="logo">
        <a href="/">NOTES</a>
      </div>
      <div className="searchbar">
        <input
          type="text"
          className="search"
          placeholder="Search Notes"
        />
      </div>
      <div className="auth"></div>
      {/* <div className="no-auth"> */}
      {/*   <Button */}
      {/*     className="sign-up" */}
      {/*     $primary */}
      {/*   > */}
      {/*     Sign Up */}
      {/*   </Button> */}
      {/*   <Button className="log-in">Log In</Button> */}
      {/* </div> */}
    </Nav>
  );
}

const Nav = styled.nav<{ $primary?: boolean }>`
  background: #000;
  margin: 0;
  padding: 0 4rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1200px) {
    padding: 0 1rem;
  }

  input {
    background: var(--text);
  }

  .logo > a {
    font-family: "Playfair Display", serif;
    text-decoration: none;
    color: var(--text);
    font-size: 3rem;
    font-weight: 300;
  }
  .searchbar {
  }
  .search {
    width: clamp(100px, 30vw, 850px);
    height: 2rem;
    border-radius: 5px;
    border: none;
    padding: 0 0.5rem;
  }
  .no-auth {
    display: flex;
    justify-content: space-between;
  }
  .no-auth > button {
  }
  .auth {
  }

  @media (max-width: 600px) {
    .searchbar {
      display: none;
    }
  }
`;
const Button = styled.button<{ $primary?: boolean }>`
  border-radius: 5px;
  padding: 0.5rem 1rem;
  border: 1px solid var(--text);
  margin: 0 0 0 1rem;
  background: transparent;
  color: var(--text);

  ${(props) =>
    props.$primary &&
    css`
      background: var(--text);
      color: var(--bg);
      border: none;
    `}
  ${(props) =>
    !props.$primary &&
    css`
      @media (max-width: 600px) {
        display: none;
      }
    `}
`;

export default Navbar;
