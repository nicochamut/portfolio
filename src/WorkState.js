//Import Images

import playerwork from "./img/playerwork.jpg";
import playerworkMobile from "./img/playerworkMobile.jpg";
import playerdetail from "./img/playerdetail.jpg";
import playerMobile from "./img/playerMobile.jpg";

import ignitedetail from "./img/ignitedetail.jpg";
import searchgames from "./img/searchgames.jpg";
import searchgamesMobile from "./img/searchgamesMobile.jpg";
import puzzle from "./img/puzzle.jpg";

import { MobileImg } from "./components/MobileImg";

export const WorkState = () => {
  return [
    {
      title: "Music Player",
      mainImg: MobileImg() ? playerworkMobile : playerwork,
      secondaryImg: MobileImg() ? playerMobile : playerdetail,
      url: "/work/musicplayer",
      link: "https://nicochamut.github.io/player/",
      repository: "https://github.com/nicochamut/player/",
      descriptions: [
        {
          title: "React Js App",
          description: "“App based on my favourite songs.”",
        },
        {
          title: "Responsive Design",
          description: "“Sass and styled-components.”",
        },
      ],
    },
    {
      title: "Games Search",
      mainImg: ignitedetail,
      url: "/work/ignitegames",
      secondaryImg: MobileImg() ? searchgamesMobile : searchgames,
      link: "https://nicochamut.github.io/ignitegames/#/",
      repository: "https://github.com/nicochamut/ignitegames",
      descriptions: [
        {
          title: "React Js App",
          description:
            "“Redux, react-router-dom, reusable components, animations with framer-motion”",
        },
        {
          title: "Responsive Design",
          description: "“Sass, styled-components.”",
        },
        {
          title: "Api RAWG",
          description: "“Consuming RAWG API”",
        },
      ],
    },
    {
      title: "Puzzle",
      mainImg: puzzle,
      url: "/work/puzzle",
      secondaryImg: puzzle,
      link: "https://nicochamut.github.io/puzzle/",
      repository: "https://github.com/nicochamut/puzzle",
      descriptions: [
        {
          title: "Javascript Vanilla",
          description: "“Puzzle based in my favourite art from Gustav Klimt.”",
        },
        {
          title: "Responsive Design.",
        },
      ],
    },
  ];
};
