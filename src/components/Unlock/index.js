// Write your code here

import {useState} from 'react'

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)

  const onClickButton = () => {
    setIsUnlocked(prevState => !prevState)
  }

  const imgUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altText = isUnlocked ? 'unlock' : 'lock'
  const text = isUnlocked ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttonText = isUnlocked ? 'Lock' : 'Unlock'

  return (
    <div>
      <img src={imgUrl} alt={altText} />
      <p>{text}</p>
      <button onClick={onClickButton}> {buttonText} </button>
    </div>
  )
}
export default Unlock
