import styled from "styled-components";

export const CarouselContainer = styled.div`
width: 60%;
z-index:999;

&.slick-list{
  background-color: black;
  z-index: 999 !important;
  
  
}



.img-container img,
.slick-slide img {
  width: 60%;
  height: auto;
}

.slick-slider.slick-initialized{
  width:400px;
  
}


`


export const PrevButton = styled.button`

z-index: 999!important;
 
  

&.slick-prev{

  background-color: transparent!important;
  left: 10px;

}

&.slick-prev::before{
  content: '';
  background-image: url("https://cdn.icon-icons.com/icons2/1132/PNG/512/1486348532-music-play-pause-control-go-arrow_80458.png")!important;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover; /* ou 'contain' dependendo do comportamento desejado */
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  transform: rotateY(180deg);
  opacity: 1;
}
`

export const NextButton = styled.button`

z-index: 999!important;


  &.slick-next{
  background-color: transparent!important;
  right: 10px;
}

&.slick-next::before{
  content: '';
  background-image: url("https://cdn.icon-icons.com/icons2/1132/PNG/512/1486348532-music-play-pause-control-go-arrow_80458.png")!important;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover; /* ou 'contain' dependendo do comportamento desejado */
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  opacity: 1;
}
`;

export const SliderContainer = styled.div`
display: flex!important;
justify-content: center!important;


`