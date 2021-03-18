import React from "react";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconName } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faGithub,
  faXing,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

library.add(faGithub, faLinkedin, faXing, faCodepen);

const icons = [
  {
    name: "github",
    href: "https://github.com/manojsatya",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/manojsatya",
  },
  {
    name: "xing",
    href: "https://www.xing.com/profile/Manoj_Satyanarayana/cv",
  },
  { name: "codepen", href: "https://codepen.io/manu_js" },
];

const IndexPage: React.FC = () => (
  <Layout>
    <div className="flex justify-center items-center m-auto h-screen">
      <div className="grid text-center">
        <img
          src="/portfolioImage.jpeg"
          alt="portfolio"
          className="max-w-xs rounded-full mx-auto"
        />
        <h3 className="m-2 text-xl">
          Hi, I am Manoj Satyanarayana from India. I am a software developer in
          Hamburg, Germany
        </h3>
        <div className="flex justify-evenly m-5">
          {icons.map((icon) => {
            const { name, href } = icon;
            return (
              <div key={name}>
                <a
                  href={href}
                  target="__blank"
                  style={{ textDecoration: "none", color: "inherit" }}
                  aria-label={name}
                  title={name}
                >
                  <FontAwesomeIcon icon={["fab", name as IconName]} size="3x" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
