import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Timeline.css'


export function Timeline() {
  const [newTweet, setNewTweet] = useState("")
  const [tweets, setTweets] = useState([
    'Olá! Aqui quem fala é o criador desta página 😜. Aproveite o clone do "Twitter" para enviar o que quiser e se divirta com responsabilidade 🕵🏻‍♂️🤠. Desde já agradeço sua presença por aqui e até uma próxima interação 🫶🏻🤳🏻🤳🏻',

    'Tubarão te amo 🦈 🦈 😍 !! O hiittt do ano 🎼🎼 ',

    '"The Last of Us"  série boa ou modinha 🤔🤔? Eis a questão...',

    'Manuel Gomes ainda leva vai levar o Grammy Awards 🤓🤓 !! Anotem isso  🕴🏻🕴🏻🖊️🖊️🙇🏻‍♂️🙇🏻‍♂️',

    'GitHub: https://github.com/Paulinho19 🕺🏼🕺🏼👨🏻‍💻😎',

    'LinkedIn: https://www.linkedin.com/in/paulo-santos-4884151b6/ 🚀🚀'
  ])

  function createNewTweet (event: FormEvent) {
    event.preventDefault()
    setTweets([newTweet,...tweets])
    setNewTweet ("")
  }

  function handleHotkeySubmit (event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
    setTweets([newTweet,...tweets])
    setNewTweet ("")
    }
  }

  return (
    <main className="timeline">
          
          <Header title='Home'/>          

          <form  onSubmit={createNewTweet} className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/Paulinho19.png" alt="Paulo Henrique" />
              <textarea 
                id="tweet" 
                placeholder="What's happening?"
                onKeyDown={handleHotkeySubmit}
                value={newTweet}
                onChange={(event) => { setNewTweet (event.target.value)}}
              />
            </label>

            <button type='submit'>Tweet</button>
          </form>

          <Separator />

          {tweets.map((tweet) => {
            return <Tweet key={tweet} content= {tweet}/>
          })}
    </main>
  )
}