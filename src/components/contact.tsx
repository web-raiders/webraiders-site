import React from 'react';
import styled from 'styled-components';
import { Basics, Screen, Decors } from 'styles';

const ContactContainer = styled.div`
  ${Decors.animate.fadeIn(4)};
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  padding: 160px 40px 60px;
  ${Screen.largePhone`
    padding: 140px 20px 40px;
  `};
`;

const SectionTitle = styled.h1`
  font-size: ${Basics.fontSize.xlarge};
  margin: 0 0 30px 0;
  color: ${({ theme }) => theme.color};
  font-weight: 700;
  text-align: center;
  ${Screen.largeScreen`
    font-size: ${Basics.fontSize.large};
  `};
  ${Screen.largePhone`
    font-size: 32px;
  `};
`;

const ContactText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 44px;
  color: ${({ theme }) => theme.text};
  text-align: center;
  opacity: 0.85;
`;

const ContactButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.button};
  color: ${Basics.colors.white};
  text-decoration: none;
  padding: 14px 36px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-family: ${Basics.fonts.Montserrat};
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align: center;
  transition: all 0.3s ease;
  margin: 10px auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px ${({ theme }) => theme.button}35;
  }

  ${Screen.largePhone`
    padding: 12px 28px;
    font-size: 12px;
  `};
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 36px;
  align-items: center;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.link};
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
  opacity: 0.8;

  &:hover {
    color: ${({ theme }) => theme.button};
    opacity: 1;
  }
`;

const Contact = () => (
  <ContactContainer>
    <SectionTitle>Let's Work Together</SectionTitle>
    <ContactText>
      Ready to transform your digital presence? We'd love to hear about your project
      and discuss how we can help bring your vision to life.
    </ContactText>

    <ContactButton href="mailto:info@webraiders.studio">
      Start Your Project
    </ContactButton>

    <ContactInfo>
      <ContactLink href="mailto:info@webraiders.studio">
        info@webraiders.studio
      </ContactLink>
      <ContactLink href="https://webraiders.notion.site/Our-Works-1203def1dca8809680feeb1a602f4ac1" target="_blank" rel="noopener noreferrer">
        View Our Portfolio
      </ContactLink>
    </ContactInfo>
  </ContactContainer>
);

export default Contact;