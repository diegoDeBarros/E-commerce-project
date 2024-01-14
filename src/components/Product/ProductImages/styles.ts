import styled from "styled-components";

export const ProductImageContainer = styled.div<{
  deviceType: string | undefined;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  grid-column: span ${({ deviceType }) => (deviceType === "desktop" ? 6 : 12)};
`;

export const PreviewImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PreviewImage = styled.img`
  width: 120px;
  height: 150px;
  background-color: black;
`;

export const ImageCarouselContainer = styled.div`
  display: flex;
  width: 50%;
`;
