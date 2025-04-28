import SingleCard from "./SingleCard/SingleCard";
import { Wrapper } from "./style";

const Cards = ({ dataCards }) => {
  return (
    <Wrapper>
      {dataCards.map((card) => (
        <SingleCard
          key={card.id}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </Wrapper>
  );
};

export default Cards;
