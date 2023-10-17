"use client";

import { useState } from "react";
import "../../styles/styles.css";

interface Skill {
  title: string;
  content: string;
}

interface Experience {
  title: string;
  content: string;
}

interface Education {
  title: string;
  content: string;
}

interface Tab {
  title: string;
  content: Skill[] | Experience[] | Education[];
}

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Skills");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const skills: Skill[] = [
    {
      title: "Technical Skills",
      content:
        "HTML, CSS, SCSS/SASS, Javascript, ReactJs, Material UI, Git, Blockchain, Web3.js, Solidity, Hardhat, and Truffle",
    },
    {
      title: "Soft Skills",
      content:
        "Googling skills to help solve technical problems, Ability to work remotely, Art of reading and understanding Documentation, Ability to communicate and collaborate well with team members, Teamwork and Decision Making",
    },
  ];

  const experiences: Experience[] = [
    {
      title: "Frontend Developer Intern",
      content: "Health Information System - July 2021 - December, 2021",
    },
    {
      title: "Software Developer Fellow ",
      content: "Women Techsters Fellowship - April 2021 - March 2022",
    },
    {
      title: "Blockchain Developer ",
      content: "Web3bridge - July 2021 - January 2022 - April 2022",
    },
  ];

  const educations: Education[] = [
    {
      title: " BSc Computer Science with Mathematics ",
      content: " Obafemi Awolowo University - April 2017 - August 2023",
    },
  ];

  const tabs: Tab[] = [
    { title: "Skills", content: skills },
    { title: "Experiences", content: experiences },
    { title: "Education", content: educations },
  ];
  return (
    <section className="about section" id="about">
      <div className="about-container">
        <div className="image">
          <img src="/about.png" alt="" />
        </div>

        <div className="tab-contents">
          <div className="about-me">
            <h2 className="section-title">About Me</h2>
            <div className="about-summary">
              <h3 className="about-me-title">Summary</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
                iusto, molestiae similique aperiam modi voluptates doloremque
                dolorum deleniti quos suscipit? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Veniam ad pariatur tempora omnis
                quos, ipsa laboriosam! At, ipsa itaque. Est!
              </p>
            </div>
          </div>

          <div className="tab-titles">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`tab-title ${
                  activeTab === tab.title ? "active-tab" : ""
                }`}
                onClick={() => handleTabClick(tab.title)}
              >
                {tab.title}
              </div>
            ))}
          </div>

          <div className="tab-content">
            <ul>
              {tabs
                .find((tab) => tab.title === activeTab)
                ?.content.map((item, i) => (
                  <li key={i}>
                    <span>{item.title}</span>
                    <br />
                    {item.content}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
