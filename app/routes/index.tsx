// Components
import Card from '../components/card';

// Assets
import regexps from '~/assets/regexp.json';

export default () => {
  return (
    <ul className="regexps">
      {regexps.map(({ title, regexp, example, tags }) => (
        <li key={regexp}>
          <Card
            title={title}
            regexp={regexp}
            example={example}
            tags={tags}
          />
        </li>
      ))}
    </ul>
  )
}
