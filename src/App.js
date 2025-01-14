import { use, useEffect, useState } from "react"
import "./index.css"

const messages = ["Learn React", "Appy for jobs", "Invest your new income"]
export default function App() {
  const [step, setStep] = useState(1)
  function nextClick() {
    if (step < messages.length) setStep(step + 1)
  }
  function prevClick() {
    if (step >= messages.length - 1) setStep(step - 1)
  }

  return (
    <div className="steps">
      <Numbers currentStep={step} />
      <Message currentStep={step} />
      <Button addStep={nextClick} minClick={prevClick} />
    </div>
  )
}
function Numbers({ currentStep }) {
  return (
    <div className="numbers">
      {messages.map((_, step) => {
        return (
          <div
            key={step}
            className={`${step + 1 === currentStep ? `active` : ``}`}
          >
            {step + 1}
          </div>
        )
      })}
    </div>
  )
}

function Message({ currentStep }) {
  return (
    <div className="message">
      <p>{messages[currentStep - 1]}</p>
    </div>
  )
}

function Button({ addStep, minClick }) {
  return (
    <div className="buttons">
      <button
        onClick={minClick}
        style={{ backgroundColor: `#7920f2`, color: `#fff` }}
      >
        Previos
      </button>
      <button
        onClick={addStep}
        style={{ backgroundColor: `#7920f2`, color: `#fff` }}
      >
        Next
      </button>
    </div>
  )
}
