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
} from "./styles";

import DiscordIconPng from "../../../icons/SocialMediaIcons/discord.png";
import FacebookIconPng from "../../../icons/SocialMediaIcons/facebook.png";
import PinterestIconPng from "../../../icons/SocialMediaIcons/pinterest.png";
import TwitterIconPng from "../../../icons/SocialMediaIcons/twitter.png";
import WhatsappIconPng from "../../../icons/SocialMediaIcons/whatsapp.png";
export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterLogo />
      <FooterLinksWrapper>
        <LinkColumnWrapper>
          <LinkListColumn>
            <LinkColumnTitle>INSTITUCIONAL</LinkColumnTitle>
            <LinkLi>
              <LinkA>Onde estamos</LinkA>
            </LinkLi>
            <LinkLi>
              <LinkA>Onde estamos</LinkA>
            </LinkLi>
            <LinkLi>
              <LinkA>Onde estamos</LinkA>
            </LinkLi>
            <LinkLi>
              <LinkA>Onde estamos</LinkA>
            </LinkLi>
            <LinkLi>
              <LinkA>Onde estamos</LinkA>
            </LinkLi>
          </LinkListColumn>
          <LinkListColumn>
            <LinkColumnTitle>INSTITUCIONAL</LinkColumnTitle>
            <LinkLi>
              <LinkA>Onde estamos</LinkA>
            </LinkLi>
            <LinkLi>
              <LinkA>Onde estamos</LinkA>
            </LinkLi>
            <LinkLi>
              <LinkA>Onde estamos</LinkA>
            </LinkLi>
            <LinkLi>
              <LinkA>Onde estamos</LinkA>
            </LinkLi>
            <LinkLi>
              <LinkA>Onde estamos</LinkA>
            </LinkLi>
          </LinkListColumn>
          <LinkListColumn>
            <LinkColumnTitle>INSTITUCIONAL</LinkColumnTitle>
            <LinkLi>
              <LinkA>Onde estamos</LinkA>
            </LinkLi>
            <LinkLi>
              <LinkA>Onde estamos</LinkA>
            </LinkLi>
          </LinkListColumn>
          <LinkListColumn>
            <LinkColumnTitle>INSTITUCIONAL</LinkColumnTitle>
            <LinkLi>
              <LinkA>Onde estamos</LinkA>
            </LinkLi>
            <LinkLi>
              <LinkA>Onde estamos</LinkA>
            </LinkLi>
            <LinkLi>
              <LinkA>Onde estamos</LinkA>
            </LinkLi>
            <LinkLi>
              <LinkA>Onde estamos</LinkA>
            </LinkLi>
            <LinkLi>
              <LinkA>Onde estamos</LinkA>
            </LinkLi>
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
