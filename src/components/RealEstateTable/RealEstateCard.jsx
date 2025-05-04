import styled from "styled-components";
const CardWrapper = styled.div`
  width: 300px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 20px;
  padding: 30px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const NumberTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 36px;
`;

const StatusParagraph = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledParagraph = styled.p`
  margin: 16px 0;
`;

const PlanWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const RealEstateCard = ({
  number,
  houseArea,
  plotArea,
  rooms,
  status,
  housePlan,
  price,
}) => {
  return (
    <CardWrapper>
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
