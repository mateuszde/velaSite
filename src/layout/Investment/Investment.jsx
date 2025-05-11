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

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ContentWrapper,
  Wrapper,
  TextContainer,
  Gallery,
  ListItem,
  List,
  IconsWrapper,
  MapWrapper,
  ParagraphWrapper,
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
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <ContainerWidth id="investment">
      <TextWithChildrenComponent
        id="investment"
        title="O inwestycji"
        subtitle="Nowoczesne Domy w Żukczynie – Twoje Miejsce Blisko Natury"
        text="Zapraszamy do zapoznania się z naszą nową inwestycją w Żukczynie – kameralnym osiedlem domów jednorodzinnych położonym nad malowniczym potokiem. To idealne miejsce dla tych, którzy pragną połączyć komfort życia w nowoczesnym domu z bliskością przyrody."
      >
        <ContentWrapper>
          <TextContainer>
            <SubTitle>Funkcjonalność i Nowoczesny Standard</SubTitle>
            <div>
              <ParagraphWrapper>
                <Paragraph>
                  <TextBolder>
                    W ramach inwestycji powstaną dwa nowoczesne domy:
                  </TextBolder>
                </Paragraph>
              </ParagraphWrapper>

              <List>
                <ListItem>
                  <Paragraph>
                    <TextBolder>Dom dwulokalowy B1 oraz B2</TextBolder> – każdy
                    o powierzchni
                    <TextBolder> 121,28 m²</TextBolder>,
                  </Paragraph>
                  <Paragraph>
                    z przestronnymi garażami i funkcjonalnymi układami
                    pomieszczeń.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <TextBolder>Dom wolnostojący A1 </TextBolder>– o powierzchni{" "}
                    <TextBolder>183 m²</TextBolder>,
                  </Paragraph>
                  <Paragraph>
                    oferujący maksymalną przestrzeń i prywatność.
                  </Paragraph>
                </ListItem>
              </List>
            </div>
            <div>
              <Paragraph>
                <TextBolder>Domy Nad Potokiem</TextBolder> spełniają wysokie
                standardy energooszczędności. Zamiast tradycyjnego ogrzewania
                gazowego zastosowaliśmy pompę ciepła, co zapewnia niższe koszty
                eksploatacji oraz większą troskę o środowisko.
              </Paragraph>
            </div>
            <div>
              <ParagraphWrapper>
                <Paragraph>Standard wykończenia:</Paragraph>
              </ParagraphWrapper>
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
          <Gallery data-aos="fade-up">
            <ImageGallery
              showPlayButton={false}
              showNav={false}
              showBullets={true}
              items={images}
              showThumbnails={true}
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
          <Wrapper id="location">
            <SubTitle>Lokalizacja</SubTitle>
            <Wrapper>
              <Paragraph>
                Zaledwie{" "}
                <TextBolder>
                  5 km dzieli inwestycję od centrum Pruszcza Gdańskiego i 17 km
                  od Gdańska,
                </TextBolder>{" "}
                co zapewnia wygodny dostęp do pełnej infrastruktury miejskiej.
                Otulina drzew oraz bliskość strumyka Kłodawa tworzą
                niepowtarzalny klimat prywatności, spokoju i relaksu, a w
                sąsiedztwie znajdują się eleganckie rezydencje, domy
                jednorodzinne oraz klimatyczne mini zoo „Zwierzęta nad
                Potokiem”. W promieniu kilku kilometrów dostępne są szkoła,
                przychodnia, sklepy, obiekty sportowe, przystanek PKS (200 m)
                oraz stacja kolejowa – wszystko, co potrzebne do komfortowego
                życia na co dzień.
              </Paragraph>
              <Video videoSrc={srcVideo} />
            </Wrapper>
          </Wrapper>
          <Wrapper>
            <SubTitle>Domy zaprojektowane z myślą o Tobie</SubTitle>
            <Wrapper>
              <Paragraph>
                Inwestycja to wyjątkowy projekt indywidualny, stworzony na
                zamówienie z myślą o najbardziej wymagających klientach,
                ceniących komfort, estetykę i kontakt z naturą. Nowoczesne domy
                jednorodzinne wyróżniają się przemyślanym układem funkcjonalnym
                – każdy z nich oferuje przestronny salon z aneksem kuchennym,
                kilka sypialni, wygodne łazienki oraz garaż. Duże przeszklenia
                nie tylko doskonale doświetlają wnętrza, ale również otwierają
                je na otaczającą zieleń, zapewniając codzienny kontakt z naturą
                i wyjątkową jakość życia.
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
          <IconsWrapper data-aos="fade-up">
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
