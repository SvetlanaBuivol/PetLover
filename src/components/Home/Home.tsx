import { FC } from "react";
import { Box, ImageBox, Text, Title } from "./Home.styled";

const Home: FC = () => {
  return (
    <>
      <Box>
        <Title>
          Take good <span>care</span> of your small pets
        </Title>
        <Text>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </Text>
      </Box>
      <ImageBox>
        <source
          media="(max-width: 767px) and (min-resolution: 3dppx)"
          srcSet="images/home/home-img-mb-3x.jpg"
        />
        <source
          media="(max-width: 767px) and (min-resolution: 2dppx)"
          srcSet="images/home/home-img-mb-2x.jpg"
        />
        <source
          media="(max-width: 767px)"
          srcSet="images/home/home-img-mb-1x.jpg"
        />

        <source
          media="(min-width: 768px) and (max-width: 1279px) and (min-resolution: 3dppx)"
          srcSet="images/home/home-img-tab-3x.jpg"
        />
        <source
          media="(min-width: 768px) and (max-width: 1279px) and (min-resolution: 2dppx)"
          srcSet="images/home/home-img-tab-2x.jpg"
        />
        <source
          media="(min-width: 768px) and (max-width: 1279px)"
          srcSet="images/home/home-img-tab-1x.jpg"
        />

        <source
          media="(min-width: 1280px) and (min-resolution: 3dppx)"
          srcSet="images/home/home-img-desk-3x.jpg"
        />
        <source
          media="(min-width: 1280px) and (min-resolution: 2dppx)"
          srcSet="images/home/home-img-desk-2x.jpg"
        />
        <source
          media="(min-width: 1280px)"
          srcSet="images/home/home-img-desk-1x.jpg"
        />
        <img src="images/home/home-img-desk-1x.jpg" alt="Woman with a dog" />
      </ImageBox>
    </>
  );
};

export default Home;
