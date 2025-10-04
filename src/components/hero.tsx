import React from 'react';
import styled from 'styled-components';
import { Basics, Screen, Decors } from 'styles';
import Socials from './socials';

const HeroContainer = styled.div`
  ${Decors.animate.fadeIn(4)};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 80vh;
  justify-content: center;
  padding: 100px 40px 60px;
  margin-top: 60px;
  ${Screen.largePhone`
    padding: 80px 20px 40px;
    margin-top: 60px;
  `};
`;

const LogoContainer = styled.div`
  margin-bottom: 40px;
  width: 120px;
  height: 120px;
  content: url(${({ theme }) => theme.loader});
  ${Screen.miniTablet`
    width: 80px;
    height: 80px;
    margin-bottom: 30px;
  `};
`;

const Title = styled.h1`
  font-size: ${Basics.fontSize.xlarge};
  margin: 0 0 20px 0;
  color: ${({ theme }) => theme.color};
  font-weight: 700;
  ${Screen.largeScreen`
    font-size: ${Basics.fontSize.large};
  `};
  ${Screen.largePhone`
    font-size: 36px;
  `};
`;

const SubTitle = styled.h2`
  margin: 0 0 30px 0;
  font-size: ${Basics.fontSize.medium};
  color: ${({ theme }) => theme.subtitle};
  font-weight: 400;
  ${Screen.largePhone`
    font-size: ${Basics.fontSize.small};
  `};
`;

const HeroText = styled.p`
  font-size: ${Basics.fontSize.small};
  line-height: 1.8;
  color: ${({ theme }) => theme.text};
  max-width: 600px;
  margin: 0 auto 40px;
  font-weight: 400;
  ${Screen.largePhone`
    font-size: ${Basics.fontSize.xsmall};
    margin-bottom: 30px;
  `};
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
  ${Screen.largePhone`
    flex-direction: column;
    gap: 15px;
    align-items: center;
  `};
`;

const PrimaryButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.button};
  color: ${Basics.colors.white};
  text-decoration: none;
  padding: 16px 32px;
  border-radius: 30px;
  font-size: ${Basics.fontSize.small};
  font-weight: 600;
  transition: ${Basics.transition};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px ${({ theme }) => theme.button}40;
  }

  ${Screen.largePhone`
    padding: 14px 28px;
    font-size: ${Basics.fontSize.xsmall};
  `};
`;

const SecondaryButton = styled.a`
  display: inline-block;
  background-color: transparent;
  color: ${({ theme }) => theme.link};
  text-decoration: none;
  padding: 16px 32px;
  border: 2px solid ${({ theme }) => theme.link};
  border-radius: 30px;
  font-size: ${Basics.fontSize.small};
  font-weight: 600;
  transition: ${Basics.transition};

  &:hover {
    background-color: ${({ theme }) => theme.link};
    color: ${({ theme }) => theme.body};
    transform: translateY(-3px);
  }

  ${Screen.largePhone`
    padding: 14px 28px;
    font-size: ${Basics.fontSize.xsmall};
  `};
`;

const Hero = () => (
  <HeroContainer>
    <LogoContainer />
    <Title>Web Raiders Studio</Title>
    <SubTitle>Exceptional Digital Experiences</SubTitle>
    <HeroText>
      We build innovative web and mobile solutions that drive growth and elevate brands.
      From startups to enterprises, our expert team delivers custom digital products
      that transform your vision into reality.
    </HeroText>
    <CTAContainer>
      <PrimaryButton href="mailto:info@webraiders.studio">
        Start Your Project
      </PrimaryButton>
      <SecondaryButton href="https://webraiders.notion.site/Our-Works-1203def1dca8809680feeb1a602f4ac1" target="_blank" rel="noopener noreferrer">
        View Our Work
      </SecondaryButton>
    </CTAContainer>
    <Socials />
  </HeroContainer>
);

export default Hero;
