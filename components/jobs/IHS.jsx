
import styles from '../../styles/Experience.module.sass'
export function IHS() {
  return (
    <article
      className={styles.experienceEntry}>
      <header>
        <h3>IHS Markit</h3>
        <h4>Associate ​ Software Engineer II</h4>
        <p className="dateLocation">
          <span>Boulder, CO</span>
          <span>May 2017 / June 2019</span>
        </p>
      </header>
      <ul>
        {
          listStrings.map((str,index) => <li key={index}>{str}</li>)
        }
      </ul>
    </article>
  )
}


const listStrings = [
  'Provided on-going agile development and deployment within a large, interdisciplinary team for a major financial client serving millions of page views daily to investors and advisors.',
  'Overhauled the ‘Detailed Quote’ investing pages with: new Vue apps, featuring updated accessibility, functionality, and user experience.',
  'Collaborated with design to improve upon prototypes of data-dense, interactive tables to ensure accessibility both to screen readers, partially-sighted, and physically disabled users.',
  'Led deployment to acceptance and production environments for several projects and fixed defects and regression bugs, regardless of original developer.',
  'Collaborating with team members, assisting with troubleshooting and JIRA issues, evaluating and comparing potential solutions to complex technical issues; communicating same with CS resources.',
]
