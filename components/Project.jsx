import styles from '../styles/Projects.module.sass'

export default function Project(props) {
  return (
    <article
      // className="project"
      style={positionObject(props.position)}
      className={ styles.card }>
      <header>
        <h3>{props.project.name}</h3>
      </header>
      <section style={{display:'inline-block', verticalAlign:'top',
        width: props.project.image ? '50%' : '100%'}}>
        {
          props.project.content
        }
      </section>
      {
        props.project.image
          ? <img src={props.project.image}
            alt="Screenshot"
            style={{
              display:'inline-block', width:'50%',
              maxHeight:'475px', maxWidth:'475px'
            }} />
          : ''
      }
      <footer
        className={styles.buttonBar}>
        <a href={props.project.githubUrl} tabIndex="-1">GitHub</a>
        {
          props.project.liveUrl
            ? <a href={props.project.liveUrl} tabIndex="-1">Live</a>
            : <span disabled>Live</span>
        }
      </footer>
    </article>
  )
}


function positionObject(positionValue) {
  switch (positionValue) {
    case -1: return { left: '105%' }
    case 0: return { left: '0px' }
    case 1: return { left: '-105%' }
    default: return null
  }
}