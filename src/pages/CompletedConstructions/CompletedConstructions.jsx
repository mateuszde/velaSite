import styled from "styled-components";
import Header from "../../layout/Header/Header";
import ContainerWidth from "../../components/ContainerWidth/ContainerWidth";
import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";
import SubTitle from "../../components/SubTitle/SubTitle";
import Paragraph from "../../components/Paragraph/Paragraph";

const MainWrapper = styled.main`
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  width: 100%;

  & h2 {
    margin-bottom: 16px;
  }
`;

const CompletedConstructions = () => {
  return (
    <MainWrapper>
      <Header subpage />
      <ContainerWidth>
        <TextWithChildrenComponent
          title="O inwestycji"
          subtitle="komfortowe osiedle w Trąbkach Małych"
          text="Domy Grubby to kameralne osiedle domów jednorodzinnych, zrealizowane przez Vela Group w malowniczej okolicy Trąbek Małych. To idealne miejsce dla osób szukających harmonii między spokojem natury a bliskością aglomeracji Trójmiejskiej."
        >
          <Wrapper>
            <SubTitle>Funkcjonalność i nowoczesne rozwiązania</SubTitle>
            <Paragraph>
              Każdy dom o powierzchni użytkowej 127,17 m² został zaprojektowany
              z myślą o komforcie i ergonomii. Na parterze znajduje się
              przestronny salon z dużym, widnym aneksem kuchennym oraz wyjściem
              do słonecznego ogrodu (działka 500 m²).
            </Paragraph>
            <Paragraph>
              Dodatkowo zaplanowano praktyczne pomieszczenia gospodarcze, w tym
              pralnię i WC. Piętro to cztery przestronne sypialnie, w tym dwie z
              balkonami, oraz duża łazienka z miejscem na wannę i prysznic.
            </Paragraph>
          </Wrapper>

          <Wrapper>
            <SubTitle>
              Nowoczesne technologie i wysoki standard wykończenia
            </SubTitle>
            <Paragraph>
              Domy zostały wyposażone w ogrzewanie podłogowe w całym budynku,
              nowoczesny kocioł Viessmann z zasobnikiem na wodę oraz uzdatniacz
              wody.
            </Paragraph>
            <Paragraph>
              W garażu zamontowano ocieplaną bramę Wiśniowski z napędem, a
              posesja została ogrodzona z wyprowadzeniem instalacji pod domofon
              i automatyczną bramę wjazdową.
            </Paragraph>
          </Wrapper>

          <Wrapper>
            <SubTitle>Doskonała lokalizacja</SubTitle>
            <Paragraph>
              Inwestycja zapewnia świetne połączenie z Trójmiastem – zaledwie 7
              km do obwodnicy w Rusocinie, 8 km do Pruszcza Gdańskiego i 20 km
              do centrum Gdańska.
            </Paragraph>
            <Paragraph>
              Domy Grubby to gotowe do zamieszkania, nowoczesne i funkcjonalne
              domy w spokojnej okolicy – idealne dla rodzin ceniących komfort i
              dobrą komunikację.
            </Paragraph>
          </Wrapper>

          <h1>ZDJĘCIA</h1>
        </TextWithChildrenComponent>
      </ContainerWidth>
    </MainWrapper>
  );
};

export default CompletedConstructions;
