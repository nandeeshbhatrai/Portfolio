import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "One-Shot Image Classification",
    img: "/siamese.png",
    desc: "This one-shot facial recognition model employing siamese neural networks is designed to identify faces with only one example of each person. By learning to measure the similarity between image pairs, the model can determine if two faces belong to the same individual.",
    link: "https://github.com/nandeeshbhatrai/One-shot-facial-recognition",
  },
  {
    id: 2,
    title: "Captcha Recognition Model",
    img: "/captcha.png",
    desc: "CNN model to correctly identify a captcha of 5 characters. The model tries to guess all five characters of the captcha individually, and then return the overall result, with above 80% accuracy for each individual character.   Programmed without using any pre-existing OCR Models",
    link: "https://github.com/nandeeshbhatrai/Captcha-Recognition/tree/main/CaptchaRecognition-main",
  },
  {
    id: 3,
    title: "The webpage you're looking at 😉",
    img: "/macweb.jpg",
    desc: "This webpage is made using React.js. It's amazing right?",
    link: "#",
  },
  {
    id: 4,
    title: "Chessify",
    img: "/chess.png",
    desc: "Let's play chess on my-made website 😀",
    link: "#",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.link} target="_blank"><strong>See Project</strong></a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>MY PROJECTS</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
