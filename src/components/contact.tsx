import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Basics, Screen, Decors } from 'styles';
import Socials from './socials';

/* ───── Animations ───── */

const fadeSlideUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const lineGrow = keyframes`
  0% { width: 0; }
  100% { width: 60px; }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 currentColor; }
  50% { box-shadow: 0 0 0 8px transparent; }
`;

/* ───── Layout ───── */

const ContactContainer = styled.div`
  ${Decors.animate.fadeIn(4)};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  justify-content: center;
  max-width: 700px;
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
  margin-bottom: 40px;

  &::after {
    content: '';
    display: block;
    height: 2px;
    background: ${({ theme }) => theme.link};
    opacity: 0.5;
    animation: ${lineGrow} 0.8s ease 0.4s both;
  }
`;

const ContactText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  margin: 0 0 48px 0;
  color: ${({ theme }) => theme.text};
  text-align: center;
  opacity: 0.85;
  max-width: 480px;
  animation: ${fadeSlideUp} 0.6s ease 0.2s both;
  ${Screen.largePhone`
    font-size: ${Basics.fontSize.small};
  `};
`;

/* ───── Email CTA — large and prominent ───── */

const EmailCTA = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  padding: 20px 40px;
  border: 1.5px solid ${({ theme }) => theme.link}30;
  border-radius: 12px;
  transition: all 0.3s ease;
  margin-bottom: 48px;
  animation: ${fadeSlideUp} 0.6s ease 0.35s both;

  &:hover {
    border-color: ${({ theme }) => theme.link};
    transform: translateY(-3px);
    box-shadow: 0 16px 40px ${({ theme }) => theme.color}08;
  }

  ${Screen.largePhone`
    padding: 16px 28px;
    gap: 12px;
    flex-direction: column;
    text-align: center;
  `};
`;

const EmailDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.button};
  flex-shrink: 0;
  animation: ${pulse} 2s ease infinite;
  color: ${({ theme }) => theme.button}40;
`;

const EmailLabel = styled.span`
  font-size: 11px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.5;
`;

const EmailAddress = styled.span`
  font-size: 20px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 600;
  color: ${({ theme }) => theme.link};
  letter-spacing: -0.01em;
  ${Screen.largePhone`
    font-size: 16px;
  `};
`;

const EmailText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

/* ───── Or divider ───── */

const OrDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
  width: 100%;
  max-width: 300px;
  animation: ${fadeSlideUp} 0.6s ease 0.45s both;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.color}15;
  }
`;

const OrText = styled.span`
  font-size: 11px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.4;
`;

/* ───── Quick actions ───── */

const QuickActions = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 60px;
  animation: ${fadeSlideUp} 0.6s ease 0.55s both;
  ${Screen.largePhone`
    flex-direction: column;
    align-items: center;
    gap: 12px;
  `};
`;

const ActionButton = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 13px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;
`;

const PrimaryAction = styled(ActionButton)`
  background-color: ${({ theme }) => theme.button};
  color: ${Basics.colors.white};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px ${({ theme }) => theme.button}35;
    color: ${Basics.colors.white};
  }
`;

const SecondaryAction = styled(ActionButton)`
  background: transparent;
  border: 1.5px solid ${({ theme }) => theme.color}15;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;

  &:hover {
    border-color: ${({ theme }) => theme.link}40;
    color: ${({ theme }) => theme.link};
    opacity: 1;
    transform: translateY(-2px);
  }
`;

/* ───── Socials ───── */

const SocialsWrapper = styled.div`
  animation: ${fadeSlideUp} 0.6s ease 0.65s both;
`;

/* ───── Component ───── */

const Contact = () => (
  <ContactContainer>
    <SectionLabel>Get In Touch</SectionLabel>
    <SectionTitle>Let's build something great.</SectionTitle>
    <Divider />

    <ContactText>
      Have a project in mind? We're always open to discussing new ideas,
      creative partnerships, and opportunities to make an impact.
    </ContactText>

    <EmailCTA href="mailto:webraidersng@gmail.com">
      <EmailDot />
      <EmailText>
        <EmailLabel>Write to us</EmailLabel>
        <EmailAddress>webraidersng@gmail.com</EmailAddress>
      </EmailText>
    </EmailCTA>

    <OrDivider>
      <OrText>or</OrText>
    </OrDivider>

    <QuickActions>
      <PrimaryAction href="mailto:webraidersng@gmail.com?subject=Project%20Inquiry">
        Start a Project
      </PrimaryAction>
      <SecondaryAction href="mailto:webraidersng@gmail.com?subject=Partnership">
        Explore Partnership
      </SecondaryAction>
    </QuickActions>

    <SocialsWrapper>
      <Socials />
    </SocialsWrapper>
  </ContactContainer>
);

export default Contact;
