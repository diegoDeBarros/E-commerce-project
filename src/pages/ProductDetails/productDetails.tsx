import { ProductDetails } from "../../components/Product/ProductDetails";
import { ProductImages } from "../../components/Product/ProductImages";
import { RandomProductMessage } from "../../components/Product/RandomProductMessage";
import { GridContainer } from "../../components/global/GridContainer/styles";

export const ProductDetailsPage: React.FC = (): React.JSX.Element => {

  return (
    <GridContainer>
      <ProductImages />
      <ProductDetails />
      <RandomProductMessage productMessage="" />
    </GridContainer>
  );
};
