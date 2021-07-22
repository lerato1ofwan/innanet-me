import { useRef, useEffect } from 'react';
import styles from '../styles/CustomCursor.module.scss';

const CustomCursor = () => {

  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousemove', e => {
      console.log(cursorRef);
      console.log(e);
        if (cursorRef.current == null)
              return;
        const {clientX, clientY} = e;
        const mouseX = clientX - cursorRef.current.clientWidth / 2;
        const mouseY = clientY - cursorRef.current.clientHeight / 2;
        cursorRef.current.setAttribute("style", "top: " + (mouseY) + "px; left: " + (mouseX) + "px;");
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
      <div className={styles.cursor} ref={cursorRef}>
        
      </div>
    );
  };
 
export default CustomCursor;