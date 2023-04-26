import '../styles/Contacts.css'
import moon from '../assets/moon.jpg'

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
    <div className='contact-container' id='contact'>
      <div className='contact-box'>
        <form className='form'>
          <div className='inputs'>
            <h2>Let's work together!</h2>
            <p>
              I am ready to rise to the challenge!<br></br> The effort we put in
              today pays dividens in the future.
            </p>
            <div className='name-box'>
              <input
                type='name'
                name=''
                required=''
                placeholder='Enter your name'
              />
              <label>Name</label>
            </div>
            <div className='name-box'>
              <input
                type='email'
                name=''
                required=''
                placeholder='Enter your email'
              />
              <label>Email</label>
            </div>
            <div className='name-box'>
              <textarea name='' required='' placeholder='Enter your message' />
              <label>Message</label>
            </div>
            <a href='#'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </div>
          <div className='contact-img'>
            <img className='moon' src={moon} alt='Reach For The Moon' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts
