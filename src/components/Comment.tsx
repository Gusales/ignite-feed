import { useState } from 'react'

import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

import { Avatar } from './Avatar'

interface CommentProps {
  content: string,
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeClick() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/G3rsonBR.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
               <strong>Gerson Silva</strong>
               <time title="06 de setembro de 2023 às 19:28" dateTime="2023-09-06 19:28:00">Cerca de 1h atrás</time>
            </div>
               <button title="deletar comentário" onClick={handleDeleteComment}>
                  <Trash size={24} />
               </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeClick}>
            <ThumbsUp />
            aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}