import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={`${classes.header} fixed top-0 left-0 right-0 z-10`}>
      <main className={classes.nav}>
        <a className={classes.fontLogo} href='/#'>TrinhNguyen</a>
        <nav>
          <ul className={classes.list}>
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
        </nav>
      </main>
    </header >
  );
}

export default MainNavigation;
