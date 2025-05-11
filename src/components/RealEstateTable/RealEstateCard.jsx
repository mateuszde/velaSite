import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  CardWrapper,
  HeaderWrapper,
  NumberTitle,
  StatusParagraph,
  StyledParagraph,
  PlanWrapper,
} from "./StyleRealEstateCard";

const RealEstateCard = ({
  number,
  houseArea,
  plotArea,
  rooms,
  status,
  housePlan,
  price,
}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <CardWrapper data-aos="fade-up">
      <HeaderWrapper>
        <NumberTitle>{number}</NumberTitle>
        <StatusParagraph>{status}</StatusParagraph>
      </HeaderWrapper>
      <StyledParagraph>Powierzchnia domu: {houseArea}</StyledParagraph>
      <StyledParagraph>Powierzchnia działki: {plotArea}</StyledParagraph>
      <StyledParagraph>Liczba pokoi: {rooms}</StyledParagraph>
      <StyledParagraph>Cena: {price} zł</StyledParagraph>

      <PlanWrapper>
        <div>{housePlan}</div>
      </PlanWrapper>
    </CardWrapper>
  );
};

export default RealEstateCard;
