// Header.js
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import resumeSvg from "../../assets/resume.svg";
import styles from "./Header.module.css";



function Header() {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBuildResumeClick = () => {
    
    if (isAuthenticated) {
      navigate("/body");
    } else {
      alert("Please login first.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
      <button className={styles.Bresume} onClick={handleBuildResumeClick}>
        Build Resume
      </button>

    </div>
  );
}

export default Header;
