import styled, { css } from "styled-components";
import Icon from "../utils/Icons";
import { useEffect, useState } from "react";

function NewNoteBtnSticky() {
  const [yScroll, setYScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setYScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <NewNoteBtnStickyWrapper
      onClick={() => {
        console.log("clicked");
      }}
      $scrolled={yScroll}
    >
      <Icon
        name="pencil"
        size={24}
      />
    </NewNoteBtnStickyWrapper>
  );
}

const NewNoteBtnStickyWrapper = styled.button<{ $scrolled: number }>`
  height: 75px;
  width: 75px;
  background: var(--bg);
  border: none;
  border-radius: var(--border-full);
  box-shadow: var(--box-shadow);
  color: var(--text);
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  ${(props) =>
    props.$scrolled > 250 &&
    css`
      display: block;
    `}
`;

export default NewNoteBtnSticky;
