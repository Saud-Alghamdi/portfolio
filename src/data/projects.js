import myClubsSnapshot from "../images/myclubs-screenshot-mobile_iphone13blue_portrait.png";
import seuStudentsSnapshot from "../images/seu-students-screenshot-mobile_iphone13blue_portrait.png";
import randomNumberSnapshot from "../images/random-number-screenshot-mobile_iphone13blue_portrait.png";

export const projectsData = [
  {
    id: 1,
    title: "My Clubs",
    category: "Web Application",
    desc: "a football platform where you can follow your favorite clubs",
    techStack: "React, TypeScript, Firebase, Tailwind",
    url: "https://myclubs.lol",
    img: myClubsSnapshot,
  },
  {
    id: 2,
    title: "SEU Students",
    category: "Web Application",
    desc: "a platform for students of Saudi Electronic University to excel their education journey",
    techStack: "JavaScript, Node.js, Bootstrap",
    url: "https://seu-students.com",
    img: seuStudentsSnapshot,
  },
  {
    id: 3,
    title: "Random Number Code Generator",
    category: "Web Application",
    desc: "a web application that generates code that returns a random number",
    techStack: "JavaScript, Node.js, Bootstrap",
    url: "https://random-number-generator.site",
    img: randomNumberSnapshot,
  },
];
