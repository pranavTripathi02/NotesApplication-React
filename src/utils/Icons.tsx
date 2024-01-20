import styled from "styled-components";
import Icons from "../assets/icons.svg";

const Icon = ({
  name,
  color = "currentColor",
  size,
}: {
  name: string;
  color?: string;
  size?: number;
}) => (
  <SvgWrapper
    className={`icon icon-${name}`}
    width={size}
    height={size}
    stroke={color}
  >
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </SvgWrapper>
);
const SvgWrapper = styled.svg`
  display: inline-block;
  vertical-align: middle;
`;

export default Icon;
