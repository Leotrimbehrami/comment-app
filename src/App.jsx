import { useState } from 'react'
import CommentForm from './components/CommentForm'
import CommentList from './components/CommentList'
import './index.css'


function App() {
  const [comments, setComments] = useState([])
 
  return (
    <>
      <h1>Teile deine Meinung zu diesem Artikel</h1>
      <CommentList comments={comments} setComments={setComments} />
      <CommentForm comments={comments} setComments={setComments} />
      
      
      
      
    </>
  )
}

export default App
