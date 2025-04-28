import ContainerWidth from "../../components/ContainerWidth/ContainerWidth";
import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";
import Paragraph from "../../components/Paragraph/Paragraph";
import image from "../../assets/DawidRoman.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 60px;
  margin: 40px 0;
`;
const ImageWrapper = styled.div`
  border-radius: 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  overflow: hidden;
  height: 500px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Contact = () => {
  return (
    <ContainerWidth>
      <TextWithChildrenComponent
        title="Kontakt"
        subtitle="chcesz się dowiedzieć więcej?"
        text="Masz pytania lub potrzebujesz dodatkowych informacji? Skontaktuj się z nami, a odpowiemy na wszelkie wątpliwości!"
      >
        <Wrapper>
          <ImageWrapper>
            <img src={image} alt="zdjęcie Dawid Roman" />
          </ImageWrapper>
          <div>dsa</div>
        </Wrapper>
      </TextWithChildrenComponent>
    </ContainerWidth>
  );
};

export default Contact;
