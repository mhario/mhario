import React from 'react'
import styles from '../styles/Experience.module.sass'

import { Denovo } from './jobs/Denovo.jsx'
import { IHS } from './jobs/IHS.jsx'
// import { FSA } from './jobs/FSA.jsx'
import { Vizient } from './jobs/Vizient.jsx'
import { PNC } from './jobs/PNC.jsx'

export default class Experience extends React.Component {
  constructor() {
    super()
    this.state = {
      currentViewIndex: 0,
      jobs: [
        Denovo,
        IHS,
        Vizient,
        PNC
      ]
    }

    this.getActiveStyle = this._getActiveStyle.bind( this )
  }

  _getActiveStyle(testIndex) {
    return this.state.currentViewIndex === testIndex
      ? styles.active
      : styles.inactive
  }

  render () {
    const currentIndex = this.state.currentViewIndex

    return (
      <article
        id="experience"
        className={ styles.experience }>

        <header className="header">
          <h2>Experience</h2>
        </header>

        <section className={ styles.experienceWindow }>
          <section className={ styles.listPane }>
            <div className={ styles.listBorder }
              role="presentation">
              <span className={ styles.label }>
                Software Engineering
              </span>
              <ul>
                <li className={ this.getActiveStyle(0) }>
                  <button className={ this.getActiveStyle(0) } onClick={() => this.setState({ currentViewIndex: 0 })}
                  >Denovo</button>
                </li>
                <li className={ this.getActiveStyle(1) }>
                  <button className={ this.getActiveStyle(1) } onClick={() => this.setState({ currentViewIndex: 1 })}
                  >IHS Markit</button>
                </li>
              </ul>
              {/* <span style={ styles.label }>
                Coding Education
              </span>
              <ul style={ styles.list }>
                <li style={ this.getActiveStyle(1) }>
                  <button
                    onClick={() => this.setState({ currentViewIndex: 1 })}
                  >Fullstack Academy</button>
                </li>
              </ul> */}
              <span className={ styles.label }>Older Positions</span>
              <ul>
                <li className={ this.getActiveStyle(2) }>
                  <button
                    disabled
                    onClick={() => this.setState({ currentViewIndex: 2 })}
                  >Vizient</button>
                </li>
                <li 
                  className={ this.getActiveStyle(3) }>
                  <button
                    disabled
                    onClick={() => this.setState({ currentViewIndex: 3 })}
                  >PNC</button>
                </li>
              </ul>
            </div>
          </section>
          <section className={ styles.detailsView }>
            {
              this.state.jobs[currentIndex]
                ? this.state.jobs[currentIndex]()
                : null
            }
          </section>
        </section>
      </article>
    )
  } 
}