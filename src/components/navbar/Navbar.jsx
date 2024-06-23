import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/nandeeshbhatrai/" target="_blank">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://instagram.com/thelifeofnandeesh/" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.youtube.com/channel/UCD7huZVE0mEbcqqa3w07tjQ/?sub_confirmation=1" target="_blank">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://leetcode.com/u/nandeesh_bhatrai/" target="_blank">
            <img src="/leetcode.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
