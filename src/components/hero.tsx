import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Basics, Screen, Decors } from 'styles';
import Socials from './socials';

/* ───── Background animation ───── */

const float1 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -40px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
`;

const float2 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-40px, 30px) scale(0.95); }
  66% { transform: translate(25px, -25px) scale(1.05); }
`;

const float3 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(35px, 35px) scale(1.08); }
`;

const gradientShift = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.6; }
`;

const BackgroundShapes = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const Shape = styled.div<{ size: number; top: string; left: string; delay: number; anim: number }>`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  border-radius: 50%;
  background: ${({ theme }) => theme.button};
  opacity: 0.06;
  filter: blur(60px);
  animation: ${({ anim }) => anim === 1 ? float1 : anim === 2 ? float2 : float3} ${({ delay }) => 12 + delay}s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
`;

/* ───── Typewriter animation ───── */

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: ${({ theme }) => theme.link};
  margin-left: 4px;
  vertical-align: text-bottom;
  animation: ${blink} 0.8s step-end infinite;
`;

/* ───── Layout ───── */

const HeroContainer = styled.div`
  ${Decors.animate.fadeIn(4)};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 90vh;
  justify-content: center;
  padding: 60px 40px 60px;
  margin-top: 60px;
  overflow: hidden;
  ${Screen.largePhone`
    padding: 40px 20px 40px;
    margin-top: 60px;
    min-height: 85vh;
  `};
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    margin-bottom: 20px;
  `};
`;

/* ───── Studio name reveal ───── */

const letterSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const lineExpand = keyframes`
  0% { width: 0; }
  100% { width: 40px; }
`;

const StudioNameRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 20px;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 1px;
    background: ${({ theme }) => theme.link};
    opacity: 0.4;
    animation: ${lineExpand} 1s ease 1.5s both;
  }

  ${Screen.largePhone`
    gap: 12px;
    margin-bottom: 16px;
  `};
`;

const StudioNameInner = styled.span`
  display: flex;
  gap: 0;
`;

const Letter = styled.span<{ i: number }>`
  display: inline-block;
  font-size: 14px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.link};
  animation: ${letterSlideUp} 0.5s ease both;
  animation-delay: ${({ i }) => 0.6 + i * 0.04}s;
  white-space: pre;

  ${Screen.largePhone`
    font-size: 11px;
  `};
`;

/* ───── Gradient title ───── */

const GradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Title = styled.h1`
  font-size: ${Basics.fontSize.xlarge};
  margin: 0 0 20px 0;
  font-weight: 700;
  letter-spacing: -0.03em;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.color} 0%,
    ${({ theme }) => theme.link} 40%,
    ${({ theme }) => theme.button} 60%,
    ${({ theme }) => theme.color} 100%
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${GradientShift} 8s ease infinite;
  ${Screen.largeScreen`
    font-size: ${Basics.fontSize.large};
  `};
  ${Screen.largePhone`
    font-size: 30px;
  `};
`;

/* ───── Rotating subtitle ───── */

const SubTitleWrapper = styled.div`
  margin: 0 0 28px 0;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubTitleText = styled.span`
  font-family: ${Basics.fonts.Montserrat};
  font-size: 14px;
  color: ${({ theme }) => theme.subtitle};
  font-weight: 500;
  letter-spacing: 0.02em;
  ${Screen.largePhone`
    font-size: 12px;
  `};
`;

const RotatingWord = styled.span`
  color: ${({ theme }) => theme.link};
  font-weight: 600;
`;

/* ───── Body text ───── */

const HeroText = styled.p`
  font-size: 18px;
  line-height: 1.75;
  color: ${({ theme }) => theme.text};
  max-width: 520px;
  margin: 0 auto 36px;
  font-weight: 400;
  opacity: 0.85;
  ${Screen.largePhone`
    font-size: ${Basics.fontSize.small};
    margin-bottom: 28px;
  `};
`;

/* ───── Service pills ───── */

const ServicePills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 44px;
  max-width: 600px;
  ${Screen.largePhone`
    gap: 8px;
    margin-bottom: 36px;
  `};
`;

const Pill = styled.span`
  font-size: 12px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 500;
  padding: 6px 16px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.color}15;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
  transition: all 0.3s ease;
  letter-spacing: 0.02em;

  &:hover {
    opacity: 1;
    border-color: ${({ theme }) => theme.link}40;
    color: ${({ theme }) => theme.link};
  }

  ${Screen.largePhone`
    font-size: 11px;
    padding: 5px 12px;
  `};
`;

/* ───── Buttons ───── */

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
  cursor: pointer;

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

/* ───── Featured works ───── */

const WorksSection = styled.div`
  width: 100%;
  max-width: 900px;
  margin-top: 20px;
  margin-bottom: 60px;
`;

const WorksHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 36px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    max-width: 80px;
    height: 1px;
    background: ${({ theme }) => theme.color}15;
  }
`;

const WorksLabel = styled.span`
  font-size: 11px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.5;
`;

const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 32px;
  ${Screen.miniTablet`
    grid-template-columns: 1fr;
    gap: 16px;
  `};
`;

const WorkCard = styled.div`
  border: 1px solid ${({ theme }) => theme.color}10;
  border-radius: 12px;
  padding: 24px;
  text-align: left;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.link}30;
    transform: translateY(-3px);
    box-shadow: 0 8px 30px ${({ theme }) => theme.color}06;
  }

  ${Screen.largePhone`
    padding: 20px;
  `};
`;

const WorkCardTag = styled.span`
  font-size: 10px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.link};
  display: block;
  margin-bottom: 8px;
`;

const WorkCardName = styled.h3`
  font-size: 17px;
  margin: 0 0 8px 0;
  color: ${({ theme }) => theme.color};
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const WorkCardDesc = styled.p`
  font-size: 13px;
  line-height: 1.65;
  color: ${({ theme }) => theme.text};
  margin: 0;
  opacity: 0.7;
`;

const ViewAllButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.link};
  padding: 10px 20px;
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.link}10;
  }

  &::after {
    content: '→';
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: translateX(4px);
  }
`;

const featuredWorks = [
  {
    tag: 'Fintech',
    name: 'Fastcash',
    desc: 'Mobile banking platform with seamless transfers, savings, and investment management.',
  },
  {
    tag: 'E-Commerce',
    name: 'Corporate Baddie',
    desc: 'Curated fashion marketplace with inventory management and integrated payments.',
  },
  {
    tag: 'Consulting',
    name: 'Client Projects',
    desc: 'Custom solutions across logistics, healthcare, and education verticals.',
  },
];

/* ───── Typewriter hook ───── */

const phrases = [
  'mobile apps',
  'fintech platforms',
  'e-commerce experiences',
  'cloud infrastructure',
  'digital products',
];

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) {
  const [display, setDisplay] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplay(current.slice(0, display.length + 1));
        if (display.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplay(current.slice(0, display.length - 1));
        if (display.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [display, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return display;
}

/* ───── Services ───── */

const services = [
  'Mobile Apps',
  'Web Platforms',
  'Fintech',
  'Cloud Infrastructure',
  'UI/UX Design',
  'Digital Strategy',
];

/* ───── Component ───── */

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  const typedText = useTypewriter(phrases);

  return (
    <HeroContainer>
      <BackgroundShapes>
        <Shape size={400} top="10%" left="70%" delay={0} anim={1} />
        <Shape size={300} top="60%" left="10%" delay={2} anim={2} />
        <Shape size={250} top="30%" left="40%" delay={4} anim={3} />
      </BackgroundShapes>

      <HeroInner>
        <LogoContainer />
        <StudioNameRow>
          <StudioNameInner>
            {'Web Raiders Studio'.split('').map((char, i) => (
              <Letter key={i} i={i}>{char}</Letter>
            ))}
          </StudioNameInner>
        </StudioNameRow>
        <Title>We turn ideas into products.</Title>
        <SubTitleWrapper>
          <SubTitleText>
            We build <RotatingWord>{typedText}</RotatingWord>
            <Cursor />
          </SubTitleText>
        </SubTitleWrapper>
        <HeroText>
          A digital studio that combines engineering excellence with strategic
          thinking to deliver solutions that drive real business growth.
        </HeroText>
        <ServicePills>
          {services.map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </ServicePills>
        <CTAContainer>
          <PrimaryButton href="mailto:webraidersng@gmail.com">
            Start Your Project
          </PrimaryButton>
        </CTAContainer>

        <WorksSection>
          <WorksHeader>
            <WorksLabel>Selected Work</WorksLabel>
          </WorksHeader>
          <WorksGrid>
            {featuredWorks.map((w) => (
              <WorkCard key={w.name}>
                <WorkCardTag>{w.tag}</WorkCardTag>
                <WorkCardName>{w.name}</WorkCardName>
                <WorkCardDesc>{w.desc}</WorkCardDesc>
              </WorkCard>
            ))}
          </WorksGrid>
          <ViewAllButton onClick={() => onNavigate?.('work')}>
            View All Projects
          </ViewAllButton>
        </WorksSection>

        <Socials />
      </HeroInner>
    </HeroContainer>
  );
};

export default Hero;
