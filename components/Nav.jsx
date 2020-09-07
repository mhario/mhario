import styles from '../styles/Nav.module.sass'

export default function Nav() {
  return (
    <nav
      className={styles.nav}
      id="nav">
      {
        links.map(link => (
          <a
            href={`${link.linkId}`}
            key={ link.label }
            className={ link.inverse ? styles.inverse : ''}>
            { link.label }
            <span
              className={ styles.spaceSaver }
              role="presentation">
                { link.label }
            </span>
          </a>
        ))
      }
    </nav>
  )
}


const links = [
  {
    label: 'About',
    linkId: '#about',
    inverse: 0
  },
  {
    label: 'Experience',
    linkId: '#experience',
    inverse: 0
  },
  {
    label: 'Techs',
    linkId: '#tech',
    inverse: 0
  },
  {
    label: 'Projects',
    linkId: '#projects',
    inverse: 0
  },
  {
    label: 'Contact',
    linkId: '#contact',
    inverse: 0
  },
  {
    label: 'Resumé',
    linkId: 'HarioResume.pdf',
    inverse: 1
  }
]