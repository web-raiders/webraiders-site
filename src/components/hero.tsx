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
  padding: 60px 40px 60px;
  margin-top: 60px;
  ${Screen.largePhone`
    padding: 40px 20px 40px;
    margin-top: 60px;
  `};
`;

const LogoContainer = styled.div`
  margin-bottom: 10px;
  width: 520px;
  height: 180px;
  content: url(${({ theme }) => theme.loader});
  object-fit: contain;
  ${Screen.miniTablet`
    width: 360px;
    height: 130px;
    margin-bottom: 30px;
  `};
`;

const Title = styled.h1`
  font-size: ${Basics.fontSize.xlarge};
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.color};
  font-weight: 700;
  letter-spacing: -0.03em;
  ${Screen.largeScreen`
    font-size: ${Basics.fontSize.large};
  `};
  ${Screen.largePhone`
    font-size: 32px;
  `};
`;

const SubTitle = styled.h2`
  margin: 0 0 24px 0;
  font-size: ${Basics.fontSize.medium};
  color: ${({ theme }) => theme.subtitle};
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-size: 14px;
  ${Screen.largePhone`
    font-size: 12px;
  `};
`;

const HeroText = styled.p`
  font-size: 18px;
  line-height: 1.75;
  color: ${({ theme }) => theme.text};
  max-width: 560px;
  margin: 0 auto 44px;
  font-weight: 400;
  opacity: 0.85;
  ${Screen.largePhone`
    font-size: ${Basics.fontSize.small};
    margin-bottom: 32px;
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
  padding: 14px 36px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-family: ${Basics.fonts.Montserrat};
  letter-spacing: 0.03em;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px ${({ theme }) => theme.button}35;
  }

  ${Screen.largePhone`
    padding: 12px 28px;
    font-size: 12px;
  `};
`;

const SecondaryButton = styled.a`
  display: inline-block;
  background-color: transparent;
  color: ${({ theme }) => theme.link};
  text-decoration: none;
  padding: 14px 36px;
  border: 1.5px solid ${({ theme }) => theme.link}50;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-family: ${Basics.fonts.Montserrat};
  letter-spacing: 0.03em;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.link};
    background-color: ${({ theme }) => theme.link}10;
    transform: translateY(-2px);
  }

  ${Screen.largePhone`
    padding: 12px 28px;
    font-size: 12px;
  `};
`;

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => (
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
      <SecondaryButton as="button" onClick={() => onNavigate?.('work')}>
        View Our Work
      </SecondaryButton>
    </CTAContainer>
    <Socials />
  </HeroContainer>
);

export default Hero;
