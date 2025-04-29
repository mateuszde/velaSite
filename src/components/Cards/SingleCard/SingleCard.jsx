import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SingleCardWrapper, IconWrapper, TitleWrapper } from "./style";
const SingleCard = ({ icon, title, description }) => {
  return (
    <SingleCardWrapper>
      <TitleWrapper>
        <IconWrapper>
          <FontAwesomeIcon icon={icon} />
        </IconWrapper>

        <h2>{title}</h2>
      </TitleWrapper>
      <div>
        <p>{description}</p>
      </div>
    </SingleCardWrapper>
  );
};

export default SingleCard;
