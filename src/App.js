import { use, useEffect, useState } from "react"
import "./index.css"

const messages = ["Learn React", "Appy for jobs", "Invest your new income"]
export default function App() {
  return (
    <div>
      <Steps />
    </div>
  )
}

function Steps() {
  const [step, setStep] = useState(1)
  const addStep = () => {
    if (step < messages.length) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }
  return (
    <div className="steps">
      <Numbers currentStep={step} />
      <Message currentStep={step} />
      <div className="buttons">
        <button
          onClick={prevStep}
          style={{ backgroundColor: `#7950f2`, color: `#fff` }}
          className="button"
        >
          Previous
        </button>
        <button
          onClick={addStep}
          style={{ backgroundColor: `#7950f2`, color: `#fff` }}
          className="button"
        >
          Next
        </button>
      </div>
    </div>
  )
}
function Numbers({ currentStep }) {
  return (
    <div className="numbers">
      {messages.map((_, i) => {
        return (
          <div key={i} className={currentStep === i + 1 ? `active` : ""}>
            {i + 1}
          </div>
        )
      })}
    </div>
  )
}

function Message({ currentStep }) {
  return <p className="message">{messages[currentStep - 1]}</p>
}
