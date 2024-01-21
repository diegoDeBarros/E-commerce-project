import React from "react";
import {
  FooterWrapper,
  FooterLogo,
  FooterLinksWrapper,
  FooterSocialMediaWrapper,
  SocialMediaImg,
  LinkColumnWrapper,
  LinkColumnTitle,
  LinkListColumn,
  LinkLi,
  LinkA,
  FooterLogoContainer,
} from "./styles";

import DiscordIconPng from "../../../icons/SocialMediaIcons/discord.png";
import FacebookIconPng from "../../../icons/SocialMediaIcons/facebook.png";
import PinterestIconPng from "../../../icons/SocialMediaIcons/pinterest.png";
import TwitterIconPng from "../../../icons/SocialMediaIcons/twitter.png";
import WhatsappIconPng from "../../../icons/SocialMediaIcons/whatsapp.png";
import EnaEtleLogo from "../../../imgs/EnaEtleLogo.png";
import { FooterMock } from "../../../mock/FooterMock";
export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterLogoContainer>
        <FooterLogo src={EnaEtleLogo}></FooterLogo>
      </FooterLogoContainer>
      <FooterLinksWrapper>
        <LinkColumnWrapper>
          <LinkListColumn>
            <LinkColumnTitle>INSTITUCIONAL</LinkColumnTitle>
            {FooterMock.map((link) => {
              if (link.fromColumn === "INSTITUCIONAL") {
                return (
                  <LinkLi>
                    <LinkA>{link.linkName}</LinkA>
                  </LinkLi>
                );
              }
            })}
          </LinkListColumn>
          <LinkListColumn>
            <LinkColumnTitle>AJUDA</LinkColumnTitle>
            {FooterMock.map((link) => {
              if (link.fromColumn === "AJUDA") {
                return (
                  <LinkLi>
                    <LinkA>{link.linkName}</LinkA>
                  </LinkLi>
                );
              }
            })}
          </LinkListColumn>
          <LinkListColumn>
            <LinkColumnTitle>TERMOS DE USO</LinkColumnTitle>
            {FooterMock.map((link) => {
              if (link.fromColumn === "TERMOS DE USO") {
                return (
                  <LinkLi>
                    <LinkA>{link.linkName}</LinkA>
                  </LinkLi>
                );
              }
            })}
          </LinkListColumn>
          <LinkListColumn>
            {
              //TODO: fazer lógica de MAIS BUCADOS ----------- envolverá lógica no
            }
            <LinkColumnTitle>MAIS BUSCADOS</LinkColumnTitle>
            {FooterMock.map((link) => {
              if (link.fromColumn === "MAIS BUSCADOS") {
                return (
                  <LinkLi>
                    <LinkA>{link.linkName}</LinkA>
                  </LinkLi>
                );
              }
            })}
          </LinkListColumn>
        </LinkColumnWrapper>
      </FooterLinksWrapper>
      <FooterSocialMediaWrapper>
        <SocialMediaImg src={DiscordIconPng} />
        <SocialMediaImg src={FacebookIconPng} />
        <SocialMediaImg src={PinterestIconPng} />
        <SocialMediaImg src={TwitterIconPng} />
        <SocialMediaImg src={WhatsappIconPng} />
        {/* <SocialMediaImg src={DiscordIconPng} /> */}
      </FooterSocialMediaWrapper>
    </FooterWrapper>
  );
};

export default Footer;
