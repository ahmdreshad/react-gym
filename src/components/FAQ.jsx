import { FaMinus, FaPlus } from 'react-icons/fa'
import { useState } from 'react'

function FAQ({ question, answer }) {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false)

  const questionToggleHandler = () => {
    setIsAnswerShowing(prev => !prev)
  }
  return (
    <article className="faq" onClick={questionToggleHandler}>
      <div>
        <h4>{question}</h4>
        <button className="faq__icon">
          {isAnswerShowing ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {isAnswerShowing && <p>{answer}</p>}
    </article>
  )
}

export default FAQ
