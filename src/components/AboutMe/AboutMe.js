import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
  const socialNetworks = [
    {
      name: "Github",
      link: "https://github.com/Brayanveloza",
      logo: logoGithub,
    },
    {
      name: "Linkedind",
      link: "https://www.linkedin.com/feed/",
      logo: logoLinkeind,
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com",
      logo: logoYoutube,
    },
  ];

  return (
    <S.ContainerAboutMe id="about-me">
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>👋🏼 Hola, Soy Brayan Veloza</p>
            <p>Brayan Steven Veloza Cruz</p>
            <p>Front End</p>
          </S.Title>
          <S.DescriptionText>
          Estudiante de Análisis de sistema de información en el Sena y Programador Front End de la Universidad Distrital, brindando lo mejor de mi cada día, tanto en el aspecto laboral como en el aspecto personal. 
          </S.DescriptionText>
          <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={network.logo} alt={network.name} />
              </a>
            ))}
          </S.ContainerIcons>
        </S.ContainerText>
        <S.ContainerImage>
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};
export default AboutMe;
