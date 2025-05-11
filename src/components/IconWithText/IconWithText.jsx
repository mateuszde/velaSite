import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Wrapper, IconWrapper, TextWrapper } from "./styleIconWithText";

const IconWithText = ({ icon, text }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={icon} />{" "}
      </IconWrapper>
      <TextWrapper>
        <h3>{text}</h3>
      </TextWrapper>
    </Wrapper>
  );
};

export default IconWithText;
