import chakraImage from "../../images/techs/chakra.png";
import reactBootstrapImage from "../../images/techs/react-bootstrap.png";
import reactRouterdomImage from "../../images/techs/react-router-dom.png";
import sassImage from "../../images/techs/sass.png";
import reactImage from "../../images/techs/react.png";
import semanticImage from "../../images/techs/semantic.png";
import styledImage from "../../images/techs/styled-logo.png";
import viteImage from "../../images/techs/vite.png";
import cssImage from "../../images/techs/css.png";
import simpsonProject from "../../images/projects/simpson.jpeg";
import dynamicFormProject from "../../images/projects/dynamic.jpeg";
import gasolineraProject from "../../images/projects/gasolinera.jpeg";
import marvelProject from "../../images/projects/marvel.jpeg";
import rickMorty from "../../images/projects/rick-morty.jpeg";
import tareasProject from "../../images/projects/todo.jpeg";
import crypto from "../../images/projects/crypto.jpeg";
import citas from "../../images/projects/citas-react.jpeg"; 
import crm from "../../images/projects/CRM.jpeg";
import snk from "../../images/projects/Snk.jpeg";
import marvelApi from "../../images/projects/MarvelApi.jpeg";

export const projectsPortfolio = [
  {
    title: "Rick & Morty API",
    image: rickMorty,
    techs: [
      { name: "React", src: reactImage },
      { name: "CSS", src: cssImage },
    ],
    description:
      "Application created with React JS and CSS to make a request an external API of Rick & Morty.",
    repository: "https://github.com/Brayanveloza/rickandmorty",
    website: "https://ubiquitous-nougat-178abb.netlify.app/",
  },
  {
    title: "Todo list",
    image: tareasProject,
    techs: [
      { name: "React", src: reactImage },
      { name: "Semantic UI React", src: semanticImage },
    ],
    description:
      "Application created with React JS and to make a list of tasks where you can add or remove it.",
    repository: "https://github.com/Brayanveloza/todo-list",
    website: "https://64bc0870b6caba0626982f55--ephemeral-concha-c9fc79.netlify.app/",
  },
  {
    title: "Simpsons API",
    image: simpsonProject,
    techs: [
      { name: "React JS", src: reactImage },
      { name: "Styled Components", src: styledImage },
    ],
    description:
      "Application created with React JS and Styled Components to make a request an external API of Simpsons.",
    repository: "https://github.com/Brayanveloza/Frases-simpons",
    website: "https://classy-pothos-021259.netlify.app/", 
  },
  {
    title: "Marvel API",
    image: marvelProject,
    techs: [
      { name: "React", src: reactImage },
      { name: "React Router", src: reactRouterdomImage },
      { name: "Sass", src: sassImage },
      { name: "Semantic", src: semanticImage },
    ],
    description:
      "Application created with React JS, React-Router and Sass to make a request an external API of Marvel.",
    repository: "https://github.com/Brayanveloza/Marvel-react",
    website: "https://enchanting-bonbon-7f85dd.netlify.app/", 
  },
  {
    title: "Dynamic Form",
    image: dynamicFormProject,
    techs: [
      { name: "React JS", src: reactImage },
      { name: "React Bootstrap", src: reactBootstrapImage },
    ],
    description:
      "Application of a landing page created with React JS and React Bootstrap to make a form with dynamic fields.",
    repository: "https://github.com/Brayanveloza/dynamic",
    website: "https://glittery-biscuit-b256e0.netlify.app/", 
  },
  {
    title: "Fuel Station",
    image: gasolineraProject,
    techs: [
      { name: "Vite", src: viteImage },
      { name: "Chakra", src: chakraImage },
      { name: "React Router DOM", src: reactRouterdomImage },
    ],
    description:
      "Application created with Vite where you can save the information and see it on a summary.",
    repository: "https://github.com/Brayanveloza/gasolina-react",
    website: "https://luxury-liger-3938ba.netlify.app/",
  },
  {
    title: "Crypto",
    image: crypto,
    techs: [
      { name: "Vite", src: viteImage },
      { name: "React Router DOM", src: reactRouterdomImage },

    ],
    description:
      "Application created with vite, to make a request to an external cryptocurrency API.",
    repository: "https://github.com/Brayanveloza/cripto-react",
    website: "https://serene-medovik-1cb61b.netlify.app/", 
  },
  {
    title: "Citas-react",
    image: citas,
    techs: [
      { name: "Vite", src: viteImage },
      { name: "React Router DOM", src: reactRouterdomImage },
    ],
    description:
      "Application created with Vite where you can save the information, view, modify and delete it.",
    repository: "https://github.com/Brayanveloza/citas-react",
    website: "https://rad-eclair-362b27.netlify.app/",
  },
  {
    title: "CRM",
    image: crm,
    techs: [
      { name: "Vite", src: viteImage },
      { name: "React Router DOM", src: reactRouterdomImage },
    ],
    description:
      "Application created with Vite where you can save the information, view and modify it.",
    repository: "https://github.com/Brayanveloza/crm-react",
    website: "https://darling-puppy-93fef1.netlify.app/", 
  },
  {
    title: "SNK",
    image: snk,
    techs: [
      { name: "React", src: reactImage },
      { name: "React Router", src: reactRouterdomImage },
      { name: "CSS", src: cssImage },
    ],
    description:
      "Application created with React, CSS and React-Router to make Attack on Titan.",
    repository: "https://github.com/Brayanveloza/proyecto-final",
    website: "https://comforting-mochi-143d0d.netlify.app/", 
  },
  {
    title: "Marvel Proyecto",
    image: marvelApi,
    techs: [
      { name: "React", src: reactImage },
      { name: "React Router", src: reactRouterdomImage },
      { name: "CSS", src: cssImage },
      { name: "Sass", src: sassImage },
      { name: "Semantic", src: semanticImage },
    ],
    description:
    "Application created with React JS, React-Router and Sass to make a request an external API of Marvel.",
    repository: "https://github.com/Brayanveloza/Marvel-Api",
    website: "https://bucolic-crumble-418ccb.netlify.app/", 
  },
];
