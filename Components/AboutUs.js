import Image from "next/image";
import React from "react";
import styled from "styled-components";

function AboutUs() {
  return (
    <Container id='About'>
      <FadeBackground>
        <Paragraph>
          <h1>Cfare eshte Arakne TV</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            augue metus, porttitor tempor sapien eu, rutrum vestibulum risus.
            Nullam luctus, libero cursus hendrerit ultricies, nulla dui
            tincidunt magna, sed pellentesque enim est sed leo. Nulla varius
            nisl eget massa ullamcorper iaculis. Morbi malesuada mauris mattis
            massa mollis, at consequat massa aliquam. Vestibulum semper ligula
            quis lacus ornare, quis porttitor tortor luctus. Aenean id purus sit
            amet ex venenatis accumsan. Aliquam mattis lorem lorem, eu egestas
            sem scelerisque quis. Sed pharetra gravida nunc, vel tincidunt
            turpis semper nec. Nulla in enim elementum, molestie elit non,
            convallis ipsum. Donec vitae elementum velit. Nunc tempus est vitae
            purus posuere sagittis.
          </p>
          <h1>
            Më shumë se Live TV. Tek ne mund të gjeni seriale, filma, koncerte
            virtuale, e shumë të tjera!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            augue metus, porttitor tempor sapien eu, rutrum vestibulum risus.
          </p>
        </Paragraph>
      </FadeBackground>
      <ImgContainer
        src='/images/tvwatching.jpg'
        layout='fill'
        objectFit='cover'
      />
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  width: 80%;
  height: 700px;
  background-color: #fff;
  margin: 20px;
`;

const FadeBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  z-index: 2;
  text-align: left;
  background: #f4f4f4;
  @media screen and (max-width: 1500px) {
    width: 100%;
  }
`;

const Paragraph = styled.p`
  margin-left: 20px;
  top: 0;
  position: absolute;
  font-size: 14px;
  line-height: 1.5;
  background: transparent;
  color: black;
  width: 80%;
  z-index: 2;
`;

const ImgContainer = styled(Image)`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  @media screen and (max-width: 1500px) {
    display: none;
  }
`;

export default AboutUs;
