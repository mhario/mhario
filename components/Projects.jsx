import styles from '../styles/Projects.module.sass'
import Project from './Project.jsx'
import React from 'react'

const projects = [

  {
    name: `3D 'Game of Life'`,
    githubUrl: 'https://github.com/mhario/GoL-3D',
    liveUrl: 'http://gol-3d.s3-website-us-west-1.amazonaws.com',
    image: '3dgol.png',
    content: 
      <section>
        Conway's 'Game of Life', converted into 3D! 
        <h4>Technologies</h4>
        <p className="spread">
          <span>ThreeJS</span>
          <span>React</span>
        </p>
        <h4>Technical Challenges</h4>
        <ul>
          <li>Integrating ThreeJS with React <small className="space-left"> — Interface, data, etc.</small></li>
          <li>Game logic <small className="space-left"> — Integrating with ThreeJS, turn cycle calc</small></li>
          <li></li>
        </ul>
        <h4>Coming Updates</h4>
        <ul>
          <li>Save board state</li>
          <li>Improve interface</li>
        </ul>
      </section>
  },
  {
    name: 'BiteSwipeLite',
    githubUrl: 'https://github.com/mhario/biteswipelite',
    content: 
      <section className="space-bottom">
        Originally built by with a team of three on React Native.<br />
        More recently, I've started to rebuild it as a React app. 
        <h4>Technologies</h4>
        <p className="spread">
          <span>React</span>
          <span>Express</span>
          <span>Yelp API</span>
        </p>
        <h4>Technical Challenges</h4>
        <ul>
          <li>Architecture <small className="space-left"> — Express API holds key for services</small></li>
          <li></li>
        </ul>
        <h4>Coming Updates</h4>
        <ul>
          <li>Additional location hosts</li>
          <li>Improve interface</li>
          <li>Group Function</li>
        </ul>
      </section>
    // img
  },
  {
    name: 'Codsworx',
    githubUrl: 'https://github.com/mhario/codsworx',
    content: 
      <section className="space-bottom">
        <h4>Technologies</h4>
        <p className="spread">
          <span>React</span>
          <span>Mongoose</span>
          <span>Express</span>
        </p>
        <strong>This project is in its very early stages! More to come later.</strong>
        {/* <header>Coming Updates</header>
        <ul>
          <li>Everything</li>
          <li>Database practice</li>
        </ul> */}
      </section>
  },
  // {
  //   name: 'React Portfolio',
  //   content:
  //     <section>
  //       <header>Technologies</header>
  //       <p>
  //         <span>React</span>
  //         <span>Radium</span>
  //       </p>
  //     </section>
  // }
];

export default class Projects extends React.Component {

  constructor() {
    super()
    this.state = {
      currentProjectViewIndex: 0
    }

    this.getPositionValue = this._getPositionValue.bind(this)
    this.viewNext = this._viewNext.bind(this)
    this.viewPrev = this._viewPrev.bind(this)
  }

  render() {
    return (
      <article
        id="projects"
        className={styles.projects}>
  
        <header
          className="header">
          <h2>Projects</h2>
        </header>
        <section
          className={ styles.projectsSection }>
          <button
            disabled={ this._isOnFirst() }
            className={ styles.navButtons }
            onClick={this.viewPrev}
            ><i className="fas fa-caret-left fa-5x space-right space-right-4x" />
          </button>
          <div
            className={ styles.projectViewWindow }
            role="presentation">
            {
              projects.map((proj, index) => {
                return <Project
                  position={ this.getPositionValue(index) }
                  key={ index }
                  project={ proj }
                />
              })
            }
          </div>
          <button
            disabled={ this._isOnLast() }
            className={ styles.navButtons }
            onClick={ this.viewNext }>
              <i className="fas fa-caret-right fa-5x space-left space-left-4x" />
          </button>
        </section>
        {/* <Upcoming /> */}
      </article>
    )
  }


  _getPositionValue(index) {
    // for positioning project cards;
    // -1 is past, scrolled to the left
    // 0 is in focus and centered
    // 1 is to the right, not seen yet
    if (index === this.state.currentProjectViewIndex) {
      return 0
    } else if (index >= this.state.currentProjectViewIndex) {
      return -1
    }
    return 1
  }

  _viewPrev() {
    const newVal = this.state.currentProjectViewIndex - 1;
    if (newVal > -1) {
      this.setState({ currentProjectViewIndex: newVal })
    }
  }

  _viewNext() {
    const newVal = this.state.currentProjectViewIndex + 1;
    if (newVal < 3) {
      this.setState({ currentProjectViewIndex: newVal })
    }
  }

  _isOnFirst() {
    return this.state.currentProjectViewIndex === 0;
  }
  _isOnLast() {
    return this.state.currentProjectViewIndex === projects.length - 1;
  }
}