// Core
import { FC } from 'react';

// Assets
import emptyMessages from '~/assets/empty-messages.json';

// Utils
import { randomNumber } from '~/utils';

const Empty: FC = () => {
  const { title, text, emoji } = emptyMessages[randomNumber(0, emptyMessages.length - 1)];
  const srcImage = `/emoji/${emoji || randomNumber(1, 10)}.png`

  return (
    <div className="empty">
      <img src={srcImage} />
      <h2 className="empty__title">{title}</h2>
      <p className="empty__message">{text}</p>
    </div>
  )
}

export default Empty;