import styled from "styled-components";

export const CarouselContainer = styled.div`
width: 60%;

&.slick-slider{

}

&.slick-slider slick-initialized{
    display: flex;
    position: initial;
}
/* .slick-prev {
    left: -111px;
    z-index: 3;
}


.slick-next {
    right: 28px;
    z-index: 3;
} */
.img-container img,
.slick-slide img {
  width: 60%;
  height: auto;
}
  `


export const PrevButton = styled.button`
  background-color: ${"black"};
  color: ${"black"};
  font-size: 16px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${"blue"};
  }
`;

export const NextButton = styled.button`
  background-color: ${"black"};
  color: ${"black"};
  font-size: 16px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${"blue"};
  }
`;

export const SliderContainer = styled.div`
display: flex !important;  
justify-content: center !important;`