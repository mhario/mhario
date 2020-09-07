import styles from '../styles/Header.module.sass'

export default function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.nameplate}>
        <h1 >
          <a href="#about">
            Mark Hario
          </a>
        </h1>
        {/* <BackdropFilter
          filter={'blur(5px) sepia(50%)'}
          canvasFallback={true}> */}
    
        <ul className={styles.contents} >
          <li>JavaScript Web Developer &</li>
          <li>FullStack Software Engineer</li>
        </ul>
        {/* </BackdropFilter> */}
      </section>
    </header>
  )

}
