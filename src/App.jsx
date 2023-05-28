import { useEffect } from 'react'
import { useState } from 'react'
import CommentForm from './components/CommentForm'
import CommentList from './components/CommentList'
import './index.css'


function App() {
  const [comments, setComments] = useState(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments"));
    return savedComments || [];
  })

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments))
  }, [comments])
 
  return (
    <>
      <h1>Teile deine Meinung zu diesem Artikel</h1>
      <CommentList comments={comments} setComments={setComments} />
      <CommentForm comments={comments} setComments={setComments} />
      
    </>
  )
}
      
      
      

export default App
