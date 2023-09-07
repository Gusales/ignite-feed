import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post, PostType } from './components/Post'

import './globals.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: { 
      avatarUrl: "https://github.com/Gusales.png",
      name: "Gustavo Sales",
      role: "Full Stack Developer" 
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋 "},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date('2023-09-06 20:00:00')
  },
  {
    id: 2,
    author: { 
      avatarUrl: "https://github.com/G3rsonBR.png",
      name: "Gerson Silva",
      role: "Web Developer" 
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋"},
      { type: "paragraph", content: "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻"},
      { type: "paragraph", content: "Acesse e deixe seu feedback!"},
      { type: "link", content: "devonlane.design" },
    ],
    publishedAt: new Date('2023-09-07 07:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          }) }
        </main>
      </div>
    </div>
  )
}

