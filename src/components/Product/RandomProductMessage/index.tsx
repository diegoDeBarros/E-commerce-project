import React from "react";
import {
  ProductMessage,
  RandomProductMessageContainer,
  RandomProductMessageWrapper,
} from "./styles";

export const RandomProductMessage: React.FC<RandomProductMessageProps> = ({
  productMessage,
}): JSX.Element => {
  return (
    <RandomProductMessageContainer>
      <RandomProductMessageWrapper>
        <ProductMessage>
          {
            "Você está prestes a adquirir um produto totalmente único e de qualidade. Nossas estampas (formidáveis, é claro) são criadas e pensadas especialmente pra você e além da malha das nossas camisetas serem 100% algodão com fio penteado 30.1, o processo de produção silkscreen é feito à base d'água (o que faz com que sua estampa nunca corra o risco de craquelar).O prazo de envio é de 15 (quinze) a 20 (vinte) dias úteis, não incluso o prazo dos correios ou transportadora. Esse prazo é referente à confecção e embalagem dos produtos.Arte:Davi Severiano"
          }
        </ProductMessage>
      </RandomProductMessageWrapper>
    </RandomProductMessageContainer>
  );
};
