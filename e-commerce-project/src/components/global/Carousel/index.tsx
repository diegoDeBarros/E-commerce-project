import { CarouselContainer } from "./styles";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { VerifyUserDevice } from "../../../contexts/verifyUserDevice";
import { useContext } from "react";

export const Carousel: React.FC = () => {
  const { deviceType } = useContext(VerifyUserDevice);

  return (
    <CarouselContainer>
      <AwesomeSlider
        media={[
          {
            source:
              "https://blog.shoulder.com.br/wp-content/uploads/2022/06/banner-inverno-casaco-branco.png",
          },
          {
            source: "https://i.imgur.com/reeprVO.jpg",
          },
          {
            source: "https://i.imgur.com/4NZYyAQ.jpeg",
          },
          {
            source: "https://i.imgur.com/v5TKUx9.jpg",
          },
          {
            source: "https://i.imgur.com/jr6vJHq.jpg",
          },
        ]}
        infinite={true}
        startup={true}
      ></AwesomeSlider>
    </CarouselContainer>
  );
};
