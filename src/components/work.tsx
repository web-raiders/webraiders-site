import React from 'react';
import styled from 'styled-components';
import { Basics, Screen, Decors } from 'styles';

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

const SectionTitle = styled.h1`
  font-size: ${Basics.fontSize.xlarge};
  margin: 0 0 16px 0;
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

const SectionSubtitle = styled.p`
  font-size: 18px;
  line-height: 1.75;
  color: ${({ theme }) => theme.text};
  text-align: center;
  opacity: 0.85;
  margin: 0 auto 60px;
  max-width: 560px;
  ${Screen.largePhone`
    font-size: ${Basics.fontSize.small};
    margin-bottom: 40px;
  `};
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  ${Screen.miniTablet`
    grid-template-columns: 1fr;
    gap: 24px;
  `};
`;

const ProjectCard = styled.div`
  border: 1px solid ${({ theme }) => theme.color}12;
  border-radius: 12px;
  padding: 32px;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.color}04;

  &:hover {
    border-color: ${({ theme }) => theme.link}40;
    transform: translateY(-4px);
    box-shadow: 0 12px 40px ${({ theme }) => theme.color}08;
  }

  ${Screen.largePhone`
    padding: 24px;
  `};
`;

const ProjectTag = styled.span`
  font-size: 11px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.link};
  margin-bottom: 12px;
  display: inline-block;
`;

const ProjectName = styled.h3`
  font-size: 20px;
  margin: 0 0 12px 0;
  color: ${({ theme }) => theme.color};
  font-weight: 600;
  ${Screen.largePhone`
    font-size: 18px;
  `};
`;

const ProjectDescription = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text};
  margin: 0 0 20px 0;
  opacity: 0.8;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TechTag = styled.span`
  font-size: 11px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color}08;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
`;

interface Project {
  tag: string;
  name: string;
  description: string;
  tech: string[];
  url?: string;
}

const projects: Project[] = [
  {
    tag: 'Fintech',
    name: 'Fastcash',
    description: 'A mobile banking and investment platform enabling seamless money transfers, savings, and financial management for everyday users.',
    tech: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    tag: 'E-Commerce',
    name: 'Corporate Baddie',
    description: 'A fashion e-commerce platform with a curated shopping experience, inventory management, and integrated payments.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
  },
  {
    tag: 'SaaS',
    name: 'Webraiders Studio',
    description: 'Our own digital presence — built as a lightweight, themeable single-page app with dark mode and smooth transitions.',
    tech: ['React', 'Styled Components', 'TypeScript'],
  },
  {
    tag: 'Consulting',
    name: 'Client Projects',
    description: 'Custom web and mobile solutions for startups and enterprises across industries including logistics, healthcare, and education.',
    tech: ['React', 'Node.js', 'AWS', 'Docker', 'CI/CD'],
  },
];

const Work = () => (
  <WorkContainer>
    <SectionTitle>Our Work</SectionTitle>
    <SectionSubtitle>
      A selection of projects we've built — from concept to production.
    </SectionSubtitle>
    <ProjectGrid>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectTag>{project.tag}</ProjectTag>
          <ProjectName>{project.name}</ProjectName>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectTech>
            {project.tech.map((t) => (
              <TechTag key={t}>{t}</TechTag>
            ))}
          </ProjectTech>
        </ProjectCard>
      ))}
    </ProjectGrid>
  </WorkContainer>
);

export default Work;
