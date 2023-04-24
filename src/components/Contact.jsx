import '../styles/Contacts.css'

const Contacts = () => {
  /*  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true)
    }, 100)
  }

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    )
  }*/
  return (
    <div class='contact-box'>
      <h2>Let's work together!</h2>
      <form>
        <div class='name-box'>
          <input type='name' name='' required='' />
          <label>Name</label>
        </div>
        <div class='name-box'>
          <input type='email' name='' required='' />
          <label>Email</label>
        </div>
        <div class='name-box'>
          <textarea name='' required='' />
          <label>Message</label>
        </div>
        <a href='#'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  )
}

export default Contacts
