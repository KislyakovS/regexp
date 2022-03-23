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
    <div className="center text-center">
      <img src={srcImage} className="mx-auto" alt={text} />
      <h2 className="mt-2 mb-3 text-4xl font-bold">{title}</h2>
      <p className="text-2xl text-gray-900">{text}</p>
    </div>
  )
}

export default Empty;