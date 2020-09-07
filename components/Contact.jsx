import styles from '../styles/Contact.module.sass'

export default function Contact() {
  return (
    <article
      id="contact"
      className={ styles.contact }>

      <header>
        <h2>Contact</h2>
      </header>
      <ul className={ styles.contactList }>
        <li><a href="https://www.linkedin.com/in/mark-hario"><i className="fa fa-linkedin-square" />LinkedIn</a></li>
        <li><i className="fa fa-map-marker" />Louisville, CO</li>
        <li><i className="fa fa-phone-square" />(734) 755 - 2807</li>
        <li><a href="mailto:hario.mark@gmail.com"><i className="fa fa-envelope" />hario.mark@gmail.com</a></li>
      </ul>
    </article>
  )
}