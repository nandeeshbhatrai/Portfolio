import { useRef, useState } from "react";
import "./about.scss";

const techStacks = [
  { name: "Python", logo: "python.png" },
  { name: "C++", logo: "Cpp.png" },
  { name: "JavaScript", logo: "js.png" },
  { name: "React", logo: "react.png" },
  { name: "VHDL", logo: "vhdl.png" },
  { name: "Git", logo: "git.png" },
  { name: "PostgreSQL", logo: "postgresql.png" },
  { name: "Bash", logo: "bash.png" },
  { name: "Github", logo: "github.png" },
  { name: "Linux", logo: "linux.png" },
  { name: "Machine Learning", logo: "ml.png" },
  { name: "TensorFlow", logo: "tf.png" },
  { name: "Postman", logo: "postman.png" },
  { name: "Leetcode", logo: "leetcode.png" },
  { name: "Codeforces", logo: "codeforces.svg" },
];

const About = () => {
  return (
    <div className="about">
      <div className="content">
        <h1>About Me</h1>
        <p>
          I am Nandeesh Bhatrai, a 3rd year BTech student at Indian Institute of
          Technology, Goa in Computer Science and Engineering.
        </p>
        <p>
          This is my tech-stack!
        </p>
        <div className="tech-grid">
          {techStacks.map((tech) => (
            <div key={tech.name} className="tech-item">
              <img src={tech.logo} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
