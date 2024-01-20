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
export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterLogo />
      <FooterLinksWrapper>
        <LinkColumnWrapper>
          <LinkColumnTitle>INSTITUCIONAL</LinkColumnTitle>
          <LinkListColumn>
            <LinkLi>
              <LinkA />
            </LinkLi>
          </LinkListColumn>
        </LinkColumnWrapper>
      </FooterLinksWrapper>
      <FooterSocialMediaWrapper>
        <SocialMediaImg />
        <SocialMediaImg />
        <SocialMediaImg />
        <SocialMediaImg />
        <SocialMediaImg />
        <SocialMediaImg />
      </FooterSocialMediaWrapper>
    </FooterWrapper>
  );
};

export default Footer;
