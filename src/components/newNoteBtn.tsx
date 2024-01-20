import styled from "styled-components";
import Icon from "../utils/Icons";

function NewNoteBtn() {
  return (
    <ButtonWrapper>
      <Icon
        name="pencil"
        size={20}
      />
      <span>New Note</span>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  background: var(--bg);
  color: var(--text-alt);
  border: none;
  width: 200px;
  height: 50px;
  border-radius: var(--border-lg);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  font-size: 1.1rem;

  span {
    margin: 0 0.5rem;
  }
`;

export default NewNoteBtn;