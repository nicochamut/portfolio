//Import Images
import player from "./img/player.jpg";
import playerwork from "./img/playerwork.jpg";
import playerdetail from "./img/playerdetail.jpg";

import ignitedetail from "./img/ignitedetail.jpg";
import searchgames from "./img/searchgames.jpg";
import puzzle from "./img/puzzle.jpg";
import goodtimes from "./img/goodtimes-small.png";

import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const WorkState = () => {
  return [
    {
      title: "Music Player App",
      mainImg: playerwork,
      secondaryImg: playerdetail,
      url: "/work/musicplayer",
      link: "https://nicochamut.github.io/player/",
      repository: "https://github.com/nicochamut/player/",
      descriptions: [
        {
          title: "React Js App",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Responsive Design",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Games Search",
      mainImg: ignitedetail,
      url: "/work/ignitegames",
      secondaryImg: searchgames,
      link: "https://nicochamut.github.io/ignitegames/#/",
      repository: "https://github.com/nicochamut/ignitegames",
      descriptions: [
        {
          title: "React Js App",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Responsive Design",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Api RAWG",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Puzzle",
      mainImg: puzzle,
      url: "/work/puzzle",
      secondaryImg: theracer2,
      link: "https://nicochamut.github.io/puzzle/",
      repository: "https://github.com/nicochamut/puzzle",
      descriptions: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
