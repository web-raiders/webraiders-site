import React from 'react';
import styled from 'styled-components';
import { Basics, Screen, Decors } from 'styles';

const AboutContainer = styled.div`
  ${Decors.animate.fadeIn(4)};
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 800px;
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

const AboutText = styled.p`
  font-size: ${Basics.fontSize.small};
  line-height: 1.8;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.text};

  &:last-child {
    margin-bottom: 0;
  }
`;

const HighlightText = styled.span`
  color: ${({ theme }) => theme.link};
  font-weight: 600;
`;

const TeamSection = styled.div`
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid ${({ theme }) => theme.color}15;
`;

const TeamTitle = styled.h2`
  font-size: ${Basics.fontSize.medium};
  margin-bottom: 40px;
  color: ${({ theme }) => theme.color};
  text-align: center;
  font-weight: 600;
  ${Screen.largePhone`
    font-size: ${Basics.fontSize.small};
    margin-bottom: 30px;
  `};
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  justify-items: center;
  ${Screen.largePhone`
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 30px;
  `};
`;

const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ProfileImage = styled.div<{ src?: string }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color}20;
  background-image: ${({ src }) => src ? `url(${src})` : 'none'};
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
  border: 3px solid ${({ theme }) => theme.link};
  transition: ${Basics.transition};

  &:hover {
    transform: scale(1.05);
    border-color: ${({ theme }) => theme.button};
  }

  ${Screen.largePhone`
    width: 100px;
    height: 100px;
    margin-bottom: 15px;
  `};
`;

const MemberName = styled.h3`
  font-size: ${Basics.fontSize.small};
  margin: 0 0 8px 0;
  color: ${({ theme }) => theme.color};
  font-weight: 600;
  ${Screen.largePhone`
    font-size: ${Basics.fontSize.xsmall};
  `};
`;

const MemberRole = styled.p`
  font-size: ${Basics.fontSize.xsmall};
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  ${Screen.largePhone`
    font-size: ${Basics.fontSize.xxsmall};
  `};
`;

interface TeamMemberType {
  name: string;
  role: string;
  image?: string;
}

const teamMembers: TeamMemberType[] = [
  {
    name: "Chima Nnadika",
    role: "Founder & Lead Engineer",
    image: "/images/member1.png" // Replace with actual image path
  },
  {
    name: "Benignus Okorie",
    role: "Strategy & Sales",
    image: "/images/member2.png" // Replace with actual image path
  },
  {
    name: "Olakunle Akinwunmi",
    role: "Infrastructure Specialist",
    image: "/images/member3.png" // Replace with actual image path
  }
];

const About = () => (
  <AboutContainer>
    <SectionTitle>About Web Raiders Studio</SectionTitle>
    <AboutText>
      We are a <HighlightText>creative digital agency</HighlightText> specializing in
      software engineering consulting and digital sales expertise. Our team combines
      technical excellence with strategic thinking to deliver solutions that drive real business growth.
    </AboutText>
    <AboutText>
      With years of experience in <HighlightText>web development, mobile applications,
      and digital strategy</HighlightText>, we've helped startups scale from idea to IPO
      and assisted enterprises in their digital transformation journeys.
    </AboutText>
    <AboutText>
      Our approach is simple: we listen, we understand, we deliver. Every project starts
      with understanding your unique challenges and goals. Then we craft custom solutions
      that not only meet your technical requirements but also exceed your business expectations.
    </AboutText>
    <AboutText>
      From <HighlightText>React and TypeScript</HighlightText> to <HighlightText>Node.js and cloud architecture</HighlightText>,
      we stay current with the latest technologies while maintaining a focus on performance,
      scalability, and user experience.
    </AboutText>

    <TeamSection>
      <TeamTitle>Meet Our Team</TeamTitle>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMember key={index}>
            <ProfileImage src={member.image} />
            <MemberName>{member.name}</MemberName>
            <MemberRole>{member.role}</MemberRole>
          </TeamMember>
        ))}
      </TeamGrid>
    </TeamSection>
  </AboutContainer>
);

export default About;