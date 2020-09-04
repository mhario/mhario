// import styles from '../'

export default function Contact() {
  return (
    <article
      id="contact"
      className={ styles.contact }>

      <header>
        <h2>Contact</h2>
      </header>
      <ul>
        <li><a href="https://www.linkedin.com/in/mark-hario-6b871285/">LinkedIn</a></li>
        <li><icon className="fas fa-target" /> Louisville, CO</li>
        <li><icon className="fas fa-target" /> (734) 755 - 2807</li>
        <li><icon className="fas fa-target" /> <a href="mailto:hario.mark@gmail.com">hario.mark@gmail.com</a></li>
      </ul>
    </article>
  )
}