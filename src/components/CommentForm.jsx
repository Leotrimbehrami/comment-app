import { useState } from "react"


const CommentForm = ({ comments, setComments }) => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(e.target.value)
    setName('')
    setMessage('')
    console.log(e.target.name.value)
    console.log(e.target.message.value)

    const ISODate = new Date().toLocaleString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    const newComment = {
      name: e.target.name.value,
      message: e.target.message.value,
      date: ISODate,
    }
    setComments([...comments, newComment])
  }

  return(
    <div>
      <form 
      onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
         type="text"
         placeholder="Name"
         id="name"
         name="name"
         value={name}
         onChange={(e) => setName(e.target.value)}
         />

         <h4>Schreib einen Kommentar</h4>

         <p>Deine E-Mailadresse wird nicht öffentlich angezeigt. Erfoderliche Felder sind mit * markiert.</p>

         <label htmlFor="message">Nachricht</label>
         <textarea
         id="message"
         name="message"

          value={message}
          placeholder="Nachricht"
          onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <br />

          <button>Kommentar Abschicken</button>
      </form>
    </div>
  )



}

export default CommentForm