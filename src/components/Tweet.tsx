import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import './Tweet.css'

interface TweetProps {
  content: string
}

export function Tweet (props: TweetProps) {
  return (
    <Link to='/status' className="tweet" >
     <img src="https://github.com/Paulinho19.png" alt="Paulo Henrique" />

     <div className="tweet-content">
      <div className="tweet-content-header">
        <strong>Paulo Henrique</strong>
        <span>@paulinhodev</span>
      </div>

      <p>{props.content}</p>

      <div className="tweet-content-footer">
        <button type='button'>
          <ChatCircle />
          45
        </button>

        <button type='button'>
          <ArrowsClockwise/>
          20
        </button>

        <button type='button'>
          <Heart/>
          2.7K
        </button>
      </div>
     </div>
    </Link>
  )
}