import { useRef, useEffect, useState } from 'react';
import styles from '../styles/CustomCursor.module.scss';

const CustomCursor = (props) => {

  const { pathname } = props;

  const cursorRef = useRef(null);
  const [navActive, setNavActive] = useState(null);
  const [cursorColor, setCursorColor] = useState(null);

  useEffect(() => {

    const { pathname } = props;

    // Moving the mouse
    document.addEventListener('mousemove', e => {
        if (cursorRef.current == null)
              return;

        const {clientX, clientY} = e;
        const mouseX = clientX - cursorRef.current.clientWidth / 2;
        const mouseY = clientY - cursorRef.current.clientHeight / 2;
        cursorRef.current.setAttribute("style", "top: " + (mouseY) + "px; left: " + (mouseX) + "px;");
    });

    // Hovers
    document.addEventListener("mouseover", e => {
      if (cursorRef.current == null)
        return;

      const item = e.target;

      const className = item.classList[0];

      if(className != null && (className.toLowerCase().includes("footer"))) {
        setCursorColor("white");
      } else if (className != null && (className.toLowerCase().includes("hero-right") || className.toLowerCase().includes("social-links") || className.toLowerCase().includes("slinks") 
      || className.toLowerCase().includes("featured") || className.toLowerCase().includes("p-text"))) {
        setCursorColor("black");
      } else {
        if(pathname == "/blog/[slug]") {
          setCursorColor("black");
        }
      }

      if (item.id === "logo" || item.id === "logo-icon" || item.id === "burger" || item.classList.contains("burger")) {
        setNavActive("nav-active");
      } else {
        // cursorRef.current.classList.remove("nav-active");
        // document.querySelector("#cursor").classList.remove("nav-active");
        setNavActive("");
      }
      if (item.classList.contains("explore")) {
        cursorRef.current.classList.add("explore-active");
        // mouseText.innerText = "Tap";
        // Add title swipe
        // gsap.to(".title-swipe", 1, { y: "0%" });
      } else {
        cursorRef.current.classList.remove("explore-active");
        // mouseText.innerText = "";
        // Title swipe again
        // gsap.to(".title-swipe", 1, { y: "100%" });
      }

    });

    document.addEventListener('click', () => {
      if (cursorRef.current == null)
          return;

      cursorRef.current.classList.add("expand");

      setTimeout(() => {
          if (cursorRef.current == null)
                return;
          cursorRef.current.classList.remove("expand");
      }, 500);
    });

  }, []);

    return (
      <div className={`${styles.cursor} ${styles[navActive]} ${styles[cursorColor]}`} ref={cursorRef}>
        <span className={styles["cursor-text"]}></span>
      </div>
    );
  };
 
export default CustomCursor;