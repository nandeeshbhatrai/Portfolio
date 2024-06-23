import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-900%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 15,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Nandeesh Bhatrai</motion.h2>
          <motion.h1 variants={textVariants}>
            Computer Science Undergrad
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <a href="#Portfolio">See the Latest Works</a>
            </motion.button>
            <motion.button variants={textVariants}><a href="#Contact">Contact Me</a></motion.button>
            <motion.button variants={textVariants}>
            <a href="https://raw.githubusercontent.com/nandeeshbhatrai/nandeeshbhatrai.github.io/main/Nandeesh_Bhatrai_Google.pdf" download="Nandeesh_Bhatrai_Google.pdf">My Resume</a>

            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Student | Cyber Scecutity | Machine Learning | AI |
      </motion.div>
      <div className="imageContainer">
        <img src="/hero3.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
