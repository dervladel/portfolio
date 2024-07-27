import gameHub from "../assets/gamehub.webp"
import portfolio from "../assets/portfolio.webp"
import instaApi from "../assets/instaApi.webp"
export default
[{
  id: 1,
  title: "Game Hub",
  usedTech: ["typescript", "react", "axios", "github","chakraui"],
  desc: "Während eines Kurses habe ich dieses Projekt entwickelt, das mithilfe von TypeScript und React Daten von der Rawg.io-API abruft. Diese API dient als Datenbank für Videospiele. Die Daten wurden mit der Hilfe von Axios geladen und im Frontend der Anwendung dargestellt.",
  image:gameHub,
  viewLink: "https://game-hub-dervladels-projects.vercel.app/",
  github:"https://github.com/dervladel/game-hub"
},
{
  id: 2,
  title: "Mein Portfolio",
  usedTech: ["typescript", "react", "github","chakraui"],
  desc: "Meine Portfolioseite diente als hervorragende Übung, um das im Kurs erlernte Wissen zu vertiefen und die erworbenen Fähigkeiten praktisch anzuwenden. Durch die Umsetzung dieses Projekts konnte ich mein Verständnis festigen und meine Kompetenzen weiter ausbauen.",
  image:portfolio,
  viewLink: "",
  github:"https://github.com/dervladel/portfolio"
},
{
  id: 3,
  title: "Instagram Anbindung",
  usedTech: ["php", "javascript", "bootstrap","wordpress"],
  desc: "Während meiner Ausbildung hatte ich mehrmals die Gelegenheit, mit der Instagram API zu arbeiten. In einem speziellen Projekt habe ich ein WordPress-Plugin entwickelt, das es ermöglicht, Beiträge aus einem Social-Media-Gewinnspiel auf der Webseite darzustellen. Für die Umsetzung des Plugins habe ich PHP im Backend und JavaScript im Frontend verwendet.",
  image:instaApi,
  viewLink: "https://www.reiseclub24.de/",
  github:""
}
]
