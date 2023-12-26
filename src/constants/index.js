import {
    graphics,
    game,
    uiux,
    web,
    robofriends,
    galaxyshooter,
    certificatemailer,
    mousebot,
    tetris,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "MERN Developer",
      icon: web,
    },
    {
      title: "Graphic Designer",
      icon: graphics,
    },
    {
      title: "Ui/Ux Designer",
      icon: uiux,
    },
    {
      title: "Game Developer",
      icon: game,
    },
    
  ];
  

  
   

  


  const projects = [
    {
      name: "RoboFriends",
      description:
        "A web-app to search your robot friends from the list.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
  
      ],
      image: robofriends,
      source_code_link: "https://github.com/NibidaGhimire/RoboFriends",
    },
    {
      name: "Galaxy Shooter",
      description:
        "A fun shooter game to play while you are bored.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
      ],
      image: galaxyshooter,
      source_code_link: "https://github.com/NibidaGhimire/Galaxy-Shooter",
    },
    {
      name: "Certificate Mailer",
      description:
        "Make distributing digital certificates easy by using certificate mailer which will write the name of the receiver in the middle of your certificate template and send it to the receiver's mail",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "expressjs",
          color: "pink-text-gradient",
        },
      ],
      image: certificatemailer,
      source_code_link: "https://github.com/NibidaGhimire/CertificateMailer",
    },
    {
      name: "Tetris",
      description:
        "The classic tetris game.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "OOP",
          color: "pink-text-gradient",
        },
      ],
      image: tetris,
      source_code_link: "https://github.com/NibidaGhimire/oop",
    },
    {
      name: "Mouse Bot",
      description:
        "A bot that will follow path avoiding obstacles.",
      tags: [
        {
          name: "TinkerCad",
          color: "blue-text-gradient",
        },
        {
          name: "Arduino",
          color: "pink-text-gradient",
        },
        {
          name: "C",
          color: "green-text-gradient",
        },
        {
          name: "C++",
          color: "blue-text-gradient",
        },
      ],
      image: mousebot,
      source_code_link: "https://www.tinkercad.com/things/lKOS22Fnis9-mousebot",
    },
  ];


  
  export { services, projects };