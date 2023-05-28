import { useState } from "react"


const CommentForm = ({ comments, setComments }) => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [email, setEmail] = useState('')
  const [isAccepted, setIsApccepted] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!isAccepted){
      setErrorText("Bitte akzeptiere die Datenschutzerklärung")
      return
    }

    // setMessage(e.target.value)
    // setName('')
    // setMessage('')
    // setEmail('')
    // console.log(e.target.name.value)
    // console.log(e.target.message.value)

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
      isChecked: isChecked,
    }
    setComments([...comments, newComment])
    setMessage(e.target.value)
    setName('')
    setMessage('')
    setEmail('')
    setIsApccepted(false)
    setErrorText('')
    console.log(e.target.name.value)
    console.log(e.target.message.value)
  }

  const handlePrivacyChange = () => {
    setIsApccepted(!isAccepted)
    setErrorText('')
  }
     

  return(
    <div>
      <form 
      onSubmit={handleSubmit}>
        <h4>Schreib einen Kommentar</h4>

        <p>Deine E-Mailadresse wird nicht öffentlich angezeigt. Erfoderliche Felder sind mit * markiert.</p>

         <label htmlFor="message"></label>
         <textarea
         id="message"
         name="message"

          value={message}
          placeholder="Nachricht"
          onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <br />

        <label htmlFor="name"></label>
        <input
         type="text"
         placeholder="Name"
         id="name"
         name="name"
         value={name}
         onChange={(e) => setName(e.target.value)}
         />
         <br />


          <input
            type="checkbox"
            id="isChecked"
            name="isChecked"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />

          <label htmlFor="isChecked">Durchgestrichen</label>

          <br />

          <label htmlFor="email"></label>
          <input
           type="email"
            name="email"
            id="email"
            placeholder="Ihre E-mail Adresse"
            //required="required"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            <br />

            <input
             type="checkbox"
             id="privacy"
             checked={isAccepted}
             onChange={handlePrivacyChange}
            />

            <label htmlFor="privacy">Ich habe die Datenschutzerklärung gelesen und akzeptiere sie.</label>


          <button disabled={!isAccepted}>Kommentar Abschicken</button>
      </form>
    </div>
  )



}

export default CommentForm