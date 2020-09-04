import React from 'react'

import styles from '../styles/Tech.module.sass'

export default function Tech() {
  return (
    <article id="tech" className={styles.tech}>

      <header className="header">
        <h2>Technologies</h2>
      </header>
      <div
        className={ styles.wrapperDiv }
        role="presentation">
        <ul style={ styles.betterOnes }>
          <li>Vue / Vuex</li>
          <li>React / Redux</li>
          <li>HTML5, jQuery</li>
          <li>CSS3 / Sass, Bootstrap</li>
        </ul>
        <ul>
          <li>Node</li>
          <li>Express</li> 
          <li>Postgres / Mongoose</li>
          <li>Mocha / Chai</li>
        </ul>
        <ul>
          <li>Git</li>
          <li>GitHub / BitBucket</li>
          <li>TeamCity</li>
          <li>Jira</li>
        </ul>
      </div>
      <section>
        <h3 style={{display:'inline-block', marginRight:'20px'}}>Studying:</h3>
        <small>AWS, Docker, DevOps</small>
      </section>
    </article>
  )
}
