import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Basics, Screen, Decors } from 'styles';

/* ───── Animations ───── */

const fadeSlideUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const lineGrow = keyframes`
  0% { width: 0; }
  100% { width: 60px; }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

/* ───── Layout ───── */

const WorkContainer = styled.div`
  ${Decors.animate.fadeIn(4)};
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  padding: 160px 40px 80px;
  ${Screen.largePhone`
    padding: 140px 20px 60px;
  `};
`;

const SectionLabel = styled.span`
  font-size: 12px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.link};
  text-align: center;
  display: block;
  margin-bottom: 16px;
  animation: ${fadeSlideUp} 0.6s ease both;
`;

const SectionTitle = styled.h1`
  font-size: ${Basics.fontSize.xlarge};
  margin: 0 0 20px 0;
  color: ${({ theme }) => theme.color};
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.03em;
  animation: ${fadeSlideUp} 0.6s ease 0.1s both;
  ${Screen.largeScreen`
    font-size: ${Basics.fontSize.large};
  `};
  ${Screen.largePhone`
    font-size: 32px;
  `};
`;

const Divider = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;

  &::after {
    content: '';
    display: block;
    height: 2px;
    background: ${({ theme }) => theme.link};
    opacity: 0.5;
    animation: ${lineGrow} 0.8s ease 0.4s both;
  }
`;

/* ───── Featured project ───── */

const FeaturedCard = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.color}12;
  border-radius: 16px;
  padding: 48px;
  margin-bottom: 32px;
  overflow: hidden;
  transition: all 0.4s ease;
  animation: ${fadeSlideUp} 0.6s ease 0.3s both;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.link},
      ${({ theme }) => theme.button},
      transparent
    );
    background-size: 200% 100%;
    animation: ${shimmer} 3s linear infinite;
  }

  &:hover {
    border-color: ${({ theme }) => theme.link}30;
    transform: translateY(-4px);
    box-shadow: 0 20px 50px ${({ theme }) => theme.color}08;
  }

  ${Screen.largePhone`
    padding: 28px;
  `};
`;

const FeaturedLabel = styled.span`
  font-size: 10px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.button};
  background: ${({ theme }) => theme.button}15;
  padding: 4px 12px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 16px;
`;

const FeaturedName = styled.h2`
  font-size: 32px;
  margin: 0 0 8px 0;
  color: ${({ theme }) => theme.color};
  font-weight: 700;
  letter-spacing: -0.02em;
  ${Screen.largePhone`
    font-size: 24px;
  `};
`;

const FeaturedCategory = styled.span`
  font-size: 13px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 500;
  color: ${({ theme }) => theme.link};
  display: block;
  margin-bottom: 16px;
`;

const FeaturedDescription = styled.p`
  font-size: 17px;
  line-height: 1.8;
  color: ${({ theme }) => theme.text};
  margin: 0 0 24px 0;
  opacity: 0.85;
  max-width: 600px;
`;

const FeaturedTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

/* ───── Project grid ───── */

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  ${Screen.miniTablet`
    grid-template-columns: 1fr;
    gap: 20px;
  `};
`;

const ProjectCard = styled.div<{ delay: number }>`
  border: 1px solid ${({ theme }) => theme.color}10;
  border-radius: 12px;
  padding: 28px;
  transition: all 0.3s ease;
  animation: ${fadeSlideUp} 0.6s ease ${({ delay }) => 0.4 + delay * 0.1}s both;

  &:hover {
    border-color: ${({ theme }) => theme.link}30;
    transform: translateY(-4px);
    box-shadow: 0 12px 40px ${({ theme }) => theme.color}06;
  }

  ${Screen.largePhone`
    padding: 24px;
  `};
`;

const ProjectNumber = styled.span`
  font-size: 36px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 700;
  color: ${({ theme }) => theme.color}12;
  display: block;
  margin-bottom: 12px;
  line-height: 1;
`;

const ProjectTag = styled.span`
  font-size: 10px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.link};
  margin-bottom: 10px;
  display: inline-block;
`;

const ProjectName = styled.h3`
  font-size: 18px;
  margin: 0 0 10px 0;
  color: ${({ theme }) => theme.color};
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text};
  margin: 0 0 20px 0;
  opacity: 0.75;
`;

const TechTag = styled.span`
  font-size: 10px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color}06;
  color: ${({ theme }) => theme.text};
  opacity: 0.65;
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

/* ───── Data ───── */

interface Project {
  tag: string;
  name: string;
  description: string;
  tech: string[];
}

const featured: Project = {
  tag: 'Fintech',
  name: 'Fastcash',
  description: 'A mobile banking and investment platform enabling seamless money transfers, savings, and financial management for everyday users. Built from scratch — backend, mobile app, and infrastructure.',
  tech: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
};

const projects: Project[] = [
  {
    tag: 'E-Commerce',
    name: 'Corporate Baddie',
    description: 'A fashion e-commerce platform with curated shopping, inventory management, and integrated payments.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
  },
  {
    tag: 'SaaS',
    name: 'Webraiders Studio',
    description: 'Our own digital presence — a lightweight, themeable SPA with dark mode and animated transitions.',
    tech: ['React', 'Styled Components', 'TypeScript'],
  },
  {
    tag: 'Consulting',
    name: 'Client Projects',
    description: 'Custom solutions for startups across logistics, healthcare, and education verticals.',
    tech: ['React', 'Node.js', 'AWS', 'Docker'],
  },
];

/* ───── Component ───── */

const Work = () => (
  <WorkContainer>
    <SectionLabel>Portfolio</SectionLabel>
    <SectionTitle>Work that speaks for itself.</SectionTitle>
    <Divider />

    <FeaturedCard>
      <FeaturedLabel>Featured Project</FeaturedLabel>
      <FeaturedName>{featured.name}</FeaturedName>
      <FeaturedCategory>{featured.tag}</FeaturedCategory>
      <FeaturedDescription>{featured.description}</FeaturedDescription>
      <FeaturedTech>
        {featured.tech.map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </FeaturedTech>
    </FeaturedCard>

    <ProjectGrid>
      {projects.map((project, index) => (
        <ProjectCard key={index} delay={index}>
          <ProjectNumber>0{index + 2}</ProjectNumber>
          <ProjectTag>{project.tag}</ProjectTag>
          <ProjectName>{project.name}</ProjectName>
          <ProjectDescription>{project.description}</ProjectDescription>
          <TechRow>
            {project.tech.map((t) => (
              <TechTag key={t}>{t}</TechTag>
            ))}
          </TechRow>
        </ProjectCard>
      ))}
    </ProjectGrid>
  </WorkContainer>
);

export default Work;
