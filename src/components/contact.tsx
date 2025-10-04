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
    font-size: 36px;
  `};
`;

const ContactText = styled.p`
  font-size: ${Basics.fontSize.small};
  line-height: 1.8;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const ContactButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.button};
  color: ${Basics.colors.white};
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: ${Basics.fontSize.small};
  font-weight: 600;
  text-align: center;
  transition: ${Basics.transition};
  margin: 10px auto;
  max-width: 200px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${({ theme }) => theme.button}40;
  }

  ${Screen.largePhone`
    padding: 12px 24px;
    font-size: ${Basics.fontSize.xsmall};
  `};
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
  align-items: center;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.link};
  text-decoration: none;
  font-size: ${Basics.fontSize.small};
  transition: ${Basics.transition};

  &:hover {
    color: ${({ theme }) => theme.button};
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