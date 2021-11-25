//Import Images
import playerdetail from "./img/playerdetail.png";
import playerMobile from "./img/playerMobile.png";
import PlayerMainDetail from "./img/PlayerMainDetail.png";

import ignitedetail from "./img/ignitedetail.png";
import puzzle from "./img/puzzle.png";

import crudapp from "./img/crudapp.png";

import { MobileImg } from "./components/MobileImg";

export const WorkState = () => {
  return [
    {
      title: "Music Player",
      mainImg: PlayerMainDetail,
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
      title: "CRUD APP",
      mainImg: crudapp,
      secondaryImg: crudapp,
      url: "/work/crudapp",
      link: "https://nicochamut.github.io/crud/",
      repository: "https://github.com/nicochamut/crud/",
      descriptions: [
        {
          title: "React Js App",
          description: "“CRUD(create - read - update - delete) with Hooks.”",
        },
        {
          title: "Responsive Design",
        },
      ],
    },
    {
      title: "Games Search",
      mainImg: ignitedetail,
      url: "/work/ignitegames",
      secondaryImg: ignitedetail,
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
