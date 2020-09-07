import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Nav from '../components/Nav'
import About from '../components/About'
import Projects from '../components/Projects'
import Tech from '../components/Tech'
import Experience from '../components/Experience'
import Contact from '../components/Contact'


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Mark Hario</title>
        <link rel="icon" href="/favicon.ico" />
        {/* TODO add ga */}
        <script src="https://kit.fontawesome.com/609bfcbb0e.js" crossOrigin="anonymous"></script>
        <link href="https://kit-free.fontawesome.com/releases/latest/css/free-v4-shims.min.css" media="all" rel="stylesheet"></link>
        <link href="https://kit-free.fontawesome.com/releases/latest/css/free-v4-font-face.min.css" media="all" rel="stylesheet"></link>
        <link href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css" media="all" rel="stylesheet"></link>

      </Head>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Tech />
      <Projects />
      <Contact />

    </div>
  )
}
