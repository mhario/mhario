// import React from 'react'
// import Radium, { Style } from 'radium'
// import BackdropFilter from 'react-backdrop-filter'

import styles from '../styles/Header.module.sass'
// import splash from './images/splash.jpg'

// import { sharedStyles } from './styles';

// class Header extends React.Component {
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
  // constructor() {
  //   super()
  //   this.state = {
  //     isShown: false
  //   }
  // }
  
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ isShown: true })
  //   }, 250)
  // }
  // id="header"
  // style={[styles.header,
  //   this.state.isShown,
  //   styles.hideHorizontalScroll ]}>



// export default Radium(Header)

const headerColor = '#da8044'

// const styles = {
//   // ...sharedStyles,
//   // React inline style objects
//   header: {
//     height: '100vh',
//     // backgroundImage: `url()`,
//     backgroundSize: 'cover',
//     position: 'relative',
//     textAlign: 'right',
//     color: 'white',
//     myName: [
//       { marginBottom: 0, paddingRight: 0 }
//     ]
//   },
//   nameplate: {
//     position: 'absolute',
//     right: '-50px', bottom: '15%',
//     background:  'rgba(0,0,0,0.45)',
//     boxShadow: '0px 1px 26px -3px black'
//   },

//   // Style component Object
//   contents: {
//     ul: {
//       listStyle: 'none',
//       margin: 0,
//       paddingRight: '17vw', paddingBottom: '12px'
//     },
//     'ul li': { padding: '10px 0' },
//     'h1 a': {
//       paddingRight: '17vw',
//       margin: 0,
//       color: headerColor,
//       fontWeight: 'bold',
//       textDecoration: 'none'
//     },
//   }
// }