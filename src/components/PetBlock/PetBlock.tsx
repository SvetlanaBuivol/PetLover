import { FC } from "react";
import {
  Wrapper,
  PetBox,
  Image,
  Header,
  Name,
  Description,
} from "./PetBlock.styled";
import MediaQuery from "react-responsive";

interface ImageSources {
  mobile: {
    "1x": string;
    "2x": string;
    "3x": string;
  };
  tablet: {
    "1x": string;
    "2x": string;
    "3x": string;
  };
  desktop: {
    "1x": string;
    "2x": string;
    "3x": string;
  };
}

interface IPetAdvert {
  kind: string;
  name: string;
  birth: string;
  descr: string;
}

interface IPetBlockProps {
  imageSources: ImageSources;
  petAdvert: IPetAdvert;
}

const PetBlock: FC<IPetBlockProps> = ({ imageSources, petAdvert }) => {
  return (
    <Wrapper>
      <picture>
        <source
          media="(max-width: 767px) and (min-resolution: 3dppx)"
          srcSet={imageSources.mobile["3x"]}
        />
        <source
          media="(max-width: 767px) and (min-resolution: 2dppx)"
          srcSet={imageSources.mobile["2x"]}
        />
        <source media="(max-width: 767px)" srcSet={imageSources.mobile["1x"]} />

        <source
          media="(min-width: 768px) and (max-width: 1279px) and (min-resolution: 3dppx)"
          srcSet={imageSources.tablet["3x"]}
        />
        <source
          media="(min-width: 768px) and (max-width: 1279px) and (min-resolution: 2dppx)"
          srcSet={imageSources.tablet["2x"]}
        />
        <source
          media="(min-width: 768px) and (max-width: 1279px)"
          srcSet={imageSources.tablet["1x"]}
        />

        <source
          media="(min-width: 1280px) and (min-resolution: 3dppx)"
          srcSet={imageSources.desktop["3x"]}
        />
        <source
          media="(min-width: 1280px) and (min-resolution: 2dppx)"
          srcSet={imageSources.desktop["2x"]}
        />
        <source
          media="(min-width: 1280px)"
          srcSet={imageSources.desktop["1x"]}
        />
        <img src={imageSources.desktop["1x"]} alt="pet" />
      </picture>

      <MediaQuery minWidth={768}>
        <PetBox>
          <Image
            src={
              petAdvert.kind === "dog"
                ? "images/petBlock/dog.png"
                : "images/petBlock/cat.png"
            }
            alt="kind of pet"
          />
          <div>
            <Header>
              <Name>{petAdvert.name}</Name>
              <p>
                Birthday: <span>{petAdvert.birth}</span>
              </p>
            </Header>
            <Description>{petAdvert.descr}</Description>
          </div>
        </PetBox>
      </MediaQuery>
    </Wrapper>
  );
};

export default PetBlock;
