import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import {
  faTree,
  faCar,
  faHouseChimney,
  faSackDollar,
  faMap,
} from "@fortawesome/free-solid-svg-icons";

import ContainerWidth from "../../components/ContainerWidth/ContainerWidth";
import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";
import SubTitle from "../../components/SubTitle/SubTitle";
import Paragraph from "../../components/Paragraph/Paragraph";
import TextBolder from "../../components/TextBolder/TextBolder";
import srcVideo from "../../assets/Video/DronInwestycja.mp4";
import Video from "../../components/Video/Video";
import MyMap from "../../components/MyMap/MyMap";

import {
  ContentWrapper,
  Wrapper,
  TextContainer,
  Gallery,
  ListItem,
  List,
  IconsWrapper,
  MapWrapper,
} from "./style";

import image1 from "../../assets/Images/1_hr.jpg";
import image2 from "../../assets/Images/2_hr.jpg";
import image3 from "../../assets/Images/3_hr.jpg";
import image4 from "../../assets/Images/4_hr.jpg";
import image5 from "../../assets/Images/5_hr.jpg";
import image6 from "../../assets/Images/6_hr.jpg";
import IconWithText from "../../components/IconWithText/IconWithText";
import RealEstateTable from "../../components/RealEstateTable/RealEstateTable";

const images = [
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: image2,
    thumbnail: image2,
  },
  {
    original: image3,
    thumbnail: image3,
  },
  {
    original: image4,
    thumbnail: image4,
  },
  {
    original: image5,
    thumbnail: image5,
  },
  {
    original: image6,
    thumbnail: image6,
  },
];

const Investment = () => {
  return (
    <ContainerWidth>
      <TextWithChildrenComponent
        title="O inwestycji"
        subtitle="Nowoczesne Domy w Żukczynie – Twoje Miejsce Blisko Natury"
        text="Zapraszamy do zapoznania się z naszą nową inwestycją w Żukczynie – kameralnym osiedlem domów jednorodzinnych położonym nad malowniczym potokiem. To idealne miejsce dla tych, którzy pragną połączyć komfort życia w nowoczesnym domu z bliskością przyrody."
      >
        <ContentWrapper>
          <TextContainer>
            <SubTitle>Funkcjonalność i Nowoczesny Standard</SubTitle>
            <div>
              <Paragraph>
                <TextBolder>
                  W ramach inwestycji powstaną dwa nowoczesne domy:
                </TextBolder>
              </Paragraph>
              <List>
                <ListItem>
                  <Paragraph>
                    <TextBolder>Dom dwulokalowy B1 oraz B2</TextBolder> – o
                    powierzchniach <TextBolder>120 m²</TextBolder> każdy, z
                    przestronnymi garażami i funkcjonalnymi układami
                    pomieszczeń.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <TextBolder>Dom wolnostojący A1 </TextBolder>– o powierzchni{" "}
                    <TextBolder>183 m²</TextBolder>, oferujący maksymalną
                    przestrzeń i prywatność.
                  </Paragraph>
                </ListItem>
              </List>
            </div>
            <div>
              <Paragraph>
                Domy w <TextBolder>Vela Park</TextBolder> spełniają wysokie
                standardy energooszczędności. Zamiast tradycyjnego ogrzewania
                gazowego zastosowaliśmy pompę ciepła, co zapewnia niższe koszty
                eksploatacji oraz większą troskę o środowisko.
              </Paragraph>
            </div>
            <div>
              <Paragraph>Standard wykończenia:</Paragraph>
              <List>
                <ListItem>
                  <Paragraph>
                    <TextBolder>Energooszczędne rozwiązania</TextBolder> – pompa
                    ciepła, ogrzewanie podłogowe
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <TextBolder>Duże przeszklenia</TextBolder> zapewniające
                    doskonałe doświetlenie wnętrz
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <TextBolder>Wysokiej jakości stolarka</TextBolder> okienna z
                    roletami elektrycznymi
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <TextBolder>Przestronne działki</TextBolder> zapewniające
                    prywatność i możliwość aranżacji ogrodu
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <TextBolder>Wysokiej klasy materiały budowlane</TextBolder>{" "}
                    gwarantujące trwałość i komfort
                  </Paragraph>
                </ListItem>
              </List>
            </div>
          </TextContainer>
          <Gallery>
            <ImageGallery
              showPlayButton={false}
              showNav={false}
              showBullets={false}
              items={images}
            />
          </Gallery>
        </ContentWrapper>
        <Wrapper>
          <SubTitle>Otoczenie i Infrastruktura</SubTitle>
          <Wrapper>
            <Paragraph>
              Żukczyn to miejscowość oferująca pełną infrastrukturę niezbędną do
              wygodnego życia. W pobliżu znajdują się szkoły, przedszkola,
              sklepy oraz placówki medyczne. Bliskość terenów rekreacyjnych i
              ścieżek rowerowych sprzyja aktywnemu spędzaniu czasu na świeżym
              powietrzu.
            </Paragraph>
          </Wrapper>
          <Wrapper>
            <SubTitle>Lokalizacja</SubTitle>
            <Wrapper>
              <Paragraph>
                Nasze osiedle usytuowane jest w spokojnej okolicy Żukczyna,
                zaledwie kilkanaście minut jazdy od centrum Gdańska. Bliskość
                obwodnicy oraz stacji PKM zapewnia doskonałą komunikację z całym
                Trójmiastem. Otoczenie zieleni i sąsiedztwo potoku tworzą
                unikalny klimat sprzyjający relaksowi i aktywnemu wypoczynkowi
                na świeżym powietrzu.
              </Paragraph>
              <Video videoSrc={srcVideo} />
            </Wrapper>
          </Wrapper>
          <Wrapper>
            <SubTitle>Architektura i Standard Wykończenia</SubTitle>
            <Wrapper>
              <Paragraph>
                Inwestycja obejmuje nowoczesne domy jednorodzinne o przemyślanym
                układzie przestrzennym. Każdy dom posiada przestronny salon z
                aneksem kuchennym, kilka sypialni, łazienki oraz garaż. Duże
                przeszklenia zapewniają doskonałe doświetlenie wnętrz i
                pozwalają cieszyć się widokiem na otaczającą przyrodę.
              </Paragraph>
              <Paragraph>
                W trosce o komfort mieszkańców, domy wyposażone są w nowoczesne
                technologie, takie jak pompy ciepła i ogrzewanie podłogowe, co
                gwarantuje energooszczędność i niskie koszty eksploatacji.
                Dodatkowo, każdy dom posiada własny ogród, stanowiący idealne
                miejsce do wypoczynku i spotkań z bliskimi.
              </Paragraph>
            </Wrapper>
          </Wrapper>
          <IconsWrapper>
            <IconWithText
              icon={faHouseChimney}
              text="funkcjonalny układ pomieszczeń"
            />
            <IconWithText icon={faMap} text="spokojna okolica" />
            <IconWithText icon={faCar} text="prywatny garaż" />
            <IconWithText icon={faTree} text="prywatny ogród" />
            <IconWithText icon={faSackDollar} text="inwestycja premium" />
          </IconsWrapper>
        </Wrapper>
        <RealEstateTable />
        <MapWrapper>
          <MyMap />
        </MapWrapper>
      </TextWithChildrenComponent>
    </ContainerWidth>
  );
};

export default Investment;
