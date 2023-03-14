import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'


export function Status () {

  const [newAnswer, setNewAnswer] = useState("")
  const [answers, setAnswers] = useState([
    "O maior do Rio está 'ON' novamente ⚫🔴⚫🔴⚫🔴 #vamosmengo #arraxxcamelhordomundo",
    "Oto patamá!! 🐾 🌊",
    '"Faça o teu melhor nas condições que você tem... " Cortella hablando muitoo!! 🤠🤠🫡'
  ])

  function createNewAnswer (event: FormEvent) {
    event.preventDefault()
    setAnswers([newAnswer,...answers])
    setNewAnswer ("")
  }

  function handleHotkeySubmit (event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
    setAnswers([newAnswer,...answers])
    setNewAnswer ("")
    }
  }
  

  return (
    <main className="status">
          
          <Header title='Tweet'/>          

          <Tweet content="FLAMENGOOOOOOO, EU TE AMOOOOOOOO!!!"/>

          <Separator />

          <form onSubmit={createNewAnswer} className="answer-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/Paulinho19.png" alt="Paulo Henrique" />
              <textarea 
                id="tweet" 
                placeholder="Tweet your answer"
                onKeyDown={handleHotkeySubmit}
                value={newAnswer}
                onChange={(event) => {
                setNewAnswer(event.target.value)
                }}
              />
            </label>

            <button type='submit'> 
              <PaperPlaneRight /> 
              <span>Answer</span> 
            </button>
          </form>

          

          {answers.map((answer) => {
            return <Tweet key={answer} content= {answer}/>
          })}
        </main>
  )
}