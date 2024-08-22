import { useCallback, useEffect, useState } from 'react';
import classes from './MainNavigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MainNavigation() {
  const [isYellow, setIsYellow] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const onScroll = useCallback((e) => {
    e.preventDefault();

    const isChange = document.getElementsByTagName('section');
    const scrollTop = e.target.scrollTop;

    function elementTop(index) {
      return isChange[index].offsetTop - 65;
    }

    function compareElement(index1, index2) {
      const result = index1 && index2 ?
        scrollTop >= elementTop(index1) && scrollTop < elementTop(index2)
        :
        scrollTop >= elementTop(index1);
      return result;
    }

    switch (compareElement(0)) {
      case compareElement(1, 2):
        setIsYellow(true);
        break;
      case compareElement(2, 3):
        setIsYellow(false);
        break;
      case compareElement(3, 4):
        setIsYellow(true);
        break;
      case compareElement(4):
        setIsYellow(false);
        break;
      default:
        setIsYellow(false)
        break;
    }
  }, [])

  useEffect(() => {
    const main = document.getElementsByTagName('main')[0];
    main.addEventListener('scroll', onScroll);
    return () => main.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const handleShowNav = () => {
    setShowNav(true);
  }

  const handleCloseNav = () => {
    setShowNav(false);
  }

  return (
    <header className={`${classes.header} ${isYellow && classes.bgYellow} fixed top-0 left-0 right-0`}>
      <article className={classes.nav}>
        <a className={classes.fontLogo} href='/#'>TrinhNguyen</a>
        <button className={classes.showBar} onClick={handleShowNav}>
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </button>
        <nav className={`${showNav && classes.show} ${isYellow && classes.bgNavYellow}`}>
          <ul className={classes.list} onClick={handleCloseNav}>
            <li>
              <a href='/#'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#skills'>Skills</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
          <button className={`${classes.closeBar} ${showNav && classes.show}`} onClick={handleCloseNav}>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </button>
        </nav>
      </article>
    </header >
  );
}

export default MainNavigation;
