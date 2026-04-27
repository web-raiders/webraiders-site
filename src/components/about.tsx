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

const countUp = keyframes`
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
`;

/* ───── Layout ───── */

const AboutContainer = styled.div`
  ${Decors.animate.fadeIn(4)};
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  padding: 160px 40px 80px;
  ${Screen.largePhone`
    padding: 140px 20px 60px;
  `};
`;

/* ───── Section label ───── */

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
  margin-bottom: 48px;

  &::after {
    content: '';
    display: block;
    height: 2px;
    background: ${({ theme }) => theme.link};
    opacity: 0.5;
    animation: ${lineGrow} 0.8s ease 0.4s both;
  }
`;

/* ───── Story section ───── */

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 60px;
  margin-bottom: 80px;
  ${Screen.miniTablet`
    grid-template-columns: 1fr;
    gap: 32px;
  `};
`;

const StoryBlock = styled.div<{ delay: number }>`
  animation: ${fadeSlideUp} 0.6s ease ${({ delay }) => 0.3 + delay * 0.15}s both;
`;

const StoryLabel = styled.span`
  font-size: 11px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.link};
  display: block;
  margin-bottom: 12px;
`;

const StoryText = styled.p`
  font-size: 16px;
  line-height: 1.85;
  margin: 0;
  color: ${({ theme }) => theme.text};
  opacity: 0.85;
`;

/* ───── Stats ───── */

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 80px;
  padding: 40px 0;
  border-top: 1px solid ${({ theme }) => theme.color}10;
  border-bottom: 1px solid ${({ theme }) => theme.color}10;
  ${Screen.largePhone`
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 32px 0;
  `};
`;

const StatItem = styled.div<{ delay: number }>`
  text-align: center;
  animation: ${countUp} 0.5s ease ${({ delay }) => 0.6 + delay * 0.15}s both;
`;

const StatNumber = styled.div`
  font-size: 42px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 700;
  color: ${({ theme }) => theme.link};
  letter-spacing: -0.02em;
  margin-bottom: 4px;
  ${Screen.largePhone`
    font-size: 36px;
  `};
`;

const StatLabel = styled.span`
  font-size: 12px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.6;
`;

/* ───── Values ───── */

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 80px;
  ${Screen.miniTablet`
    grid-template-columns: 1fr;
    gap: 24px;
  `};
`;

const ValueCard = styled.div<{ delay: number }>`
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.color}10;
  border-radius: 12px;
  transition: all 0.3s ease;
  animation: ${fadeSlideUp} 0.6s ease ${({ delay }) => 0.4 + delay * 0.12}s both;

  &:hover {
    border-color: ${({ theme }) => theme.link}30;
    transform: translateY(-4px);
  }

  ${Screen.largePhone`
    padding: 24px;
  `};
`;

const ValueIcon = styled.span`
  font-size: 28px;
  display: block;
  margin-bottom: 16px;
`;

const ValueTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: ${({ theme }) => theme.color};
`;

const ValueText = styled.p`
  font-size: 14px;
  line-height: 1.7;
  margin: 0;
  color: ${({ theme }) => theme.text};
  opacity: 0.75;
`;

/* ───── Team ───── */

const TeamSection = styled.div`
  padding-top: 0;
`;

const TeamLabel = styled.span`
  font-size: 12px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.link};
  text-align: center;
  display: block;
  margin-bottom: 12px;
`;

const TeamTitle = styled.h2`
  font-size: 36px;
  margin: 0 0 48px 0;
  color: ${({ theme }) => theme.color};
  text-align: center;
  font-weight: 700;
  letter-spacing: -0.02em;
  ${Screen.largePhone`
    font-size: 28px;
    margin-bottom: 36px;
  `};
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  justify-items: center;
  ${Screen.miniTablet`
    grid-template-columns: 1fr;
    gap: 40px;
  `};
`;

const TeamMember = styled.div<{ delay: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${fadeSlideUp} 0.6s ease ${({ delay }) => 0.5 + delay * 0.15}s both;
`;

const ProfileImage = styled.div<{ src?: string }>`
  width: 140px;
  height: 140px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color}10;
  background-image: ${({ src }) => src ? `url(${src})` : 'none'};
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.05) rotate(2deg);
    border-radius: 20px;
    box-shadow: 0 16px 40px ${({ theme }) => theme.color}15;
  }

  ${Screen.largePhone`
    width: 120px;
    height: 120px;
  `};
`;

const MemberName = styled.h3`
  font-size: 16px;
  margin: 0 0 4px 0;
  color: ${({ theme }) => theme.color};
  font-weight: 600;
`;

const MemberRole = styled.p`
  font-size: 13px;
  margin: 0;
  color: ${({ theme }) => theme.link};
  font-weight: 500;
  letter-spacing: 0.02em;
`;

/* ───── Data ───── */

interface TeamMemberType {
  name: string;
  role: string;
  image?: string;
}

const teamMembers: TeamMemberType[] = [
  {
    name: "Chima Nnadika",
    role: "Founder & Lead Engineer",
    image: "/images/member1.png"
  },
  {
    name: "Benignus Okorie",
    role: "Strategy & Sales",
    image: "/images/member2.png"
  },
  {
    name: "Olakunle Akinwunmi",
    role: "Infrastructure Specialist",
    image: "/images/member3.png"
  }
];

const values = [
  { icon: '/', title: 'Ship Fast', text: 'We move with urgency. Prototypes in days, not months. Real feedback beats perfect plans.' },
  { icon: '//', title: 'Build Right', text: 'Clean architecture, tested code, scalable infrastructure. No shortcuts on the things that matter.' },
  { icon: '///', title: 'Stay Honest', text: "We'll tell you what you need to hear, not what you want. Transparency builds better products." },
];

/* ───── Component ───── */

const About = () => (
  <AboutContainer>
    <SectionLabel>Who We Are</SectionLabel>
    <SectionTitle>A small team with big ambitions.</SectionTitle>
    <Divider />

    <StoryGrid>
      <StoryBlock delay={0}>
        <StoryLabel>Our Origin</StoryLabel>
        <StoryText>
          Web Raiders Studio was born from a simple belief: great software should be
          accessible to every business, not just those with enterprise budgets. We
          combine technical depth with strategic thinking to punch above our weight.
        </StoryText>
      </StoryBlock>
      <StoryBlock delay={1}>
        <StoryLabel>Our Focus</StoryLabel>
        <StoryText>
          We specialize in web and mobile applications, fintech platforms, and
          cloud infrastructure. From React Native to Node.js to AWS — we own the
          full stack and deliver end-to-end.
        </StoryText>
      </StoryBlock>
      <StoryBlock delay={2}>
        <StoryLabel>Our Process</StoryLabel>
        <StoryText>
          Every project starts with listening. We understand your challenge, map
          the solution, then build iteratively — shipping early and often so you
          see progress from week one.
        </StoryText>
      </StoryBlock>
      <StoryBlock delay={3}>
        <StoryLabel>Our Edge</StoryLabel>
        <StoryText>
          We're small enough to care about every pixel and every millisecond of
          load time, but experienced enough to architect systems that scale to
          millions of users.
        </StoryText>
      </StoryBlock>
    </StoryGrid>

    <StatsRow>
      <StatItem delay={0}>
        <StatNumber>10+</StatNumber>
        <StatLabel>Projects Shipped</StatLabel>
      </StatItem>
      <StatItem delay={1}>
        <StatNumber>3</StatNumber>
        <StatLabel>Industries Served</StatLabel>
      </StatItem>
      <StatItem delay={2}>
        <StatNumber>100%</StatNumber>
        <StatLabel>Client Retention</StatLabel>
      </StatItem>
    </StatsRow>

    <ValuesGrid>
      {values.map((v, i) => (
        <ValueCard key={v.title} delay={i}>
          <ValueIcon>{v.icon}</ValueIcon>
          <ValueTitle>{v.title}</ValueTitle>
          <ValueText>{v.text}</ValueText>
        </ValueCard>
      ))}
    </ValuesGrid>

    <TeamSection>
      <TeamLabel>The People</TeamLabel>
      <TeamTitle>Meet Our Team</TeamTitle>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} delay={index}>
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
