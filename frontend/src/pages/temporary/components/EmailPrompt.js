import React, {useEffect, useRef, useState} from 'react'

const defaultMessge = '⚡️Launching soon'
const errorString = 'This email address doesn\'t seem valid'
const successMessage = 'Awesome, thanks for tuning in!' 
const duplicateMessage = 'This email address is already in our system'


const EmailPrompt = ({ status, message: MCMessage, onValidated}) => {

    const [message, setMessage] = useState(defaultMessge)
    const [submitFailed, setFailure] = useState(false)
    const [submitSuccess, setSuccess] = useState(null)
    const emailPrompt = useRef(null)
    const emailInput = useRef(null)
    const emailMessage = useRef(null)
    const submitBtn = useRef(null)

    

    const handleError = () => {
        setFailure(true)
		console.log(status, MCMessage)
        // setSuccess(false)
        setMessage(defaultMessge)
        emailPrompt.current.classList.add('error')
        emailInput.current.focus()
    }


    const handleSuccess = () => {	
        setFailure(false)
        setSuccess(true)

        emailMessage.current.classList.add('fade-out')
        emailPrompt.current.classList.remove('error')
        emailInput.current.value = null

        emailMessage.current.onanimationend = () => {
            setMessage(defaultMessge)
            setSuccess(false)

            setTimeout(() => {
                emailMessage.current.classList.remove('fade-out')
            }, 0)
        }
    }




    const submitHandler = (e) => {

        e.preventDefault()
        console.log(emailInput.current.value)

		onValidated({ EMAIL: emailInput.current.value })

		let duplicate = MCMessage === null? false : MCMessage.includes('many')

        switch (true) {
			case status === 'error' && duplicate:
                setMessage(duplicateMessage)
                handleSuccess()
                break
            case status === 'error':
                handleError()
                break;
            default: 
                setMessage(successMessage)
                handleSuccess()
        }

        status = null
        MCMessage = null




    }





    return (
        <div ref={emailPrompt} className="email-prompt">

            <p ref={emailMessage} className='message'>{message}</p>

            <form
                onSubmit={(e) => submitHandler(e)}
                className='email-form'
            >
                <input 
                    disabled={submitSuccess? true : false} 
                    ref={emailInput} 
                    type="text" 
					autoComplete='email'
                    placeholder='Enter your email'  
                />

                {submitFailed? <p className='error-message'>{errorString}</p> : null}
                
                <input
                    disabled={submitSuccess? true : false} 
                    ref={submitBtn} className='submit-btn' 
                    type="submit" 
                    value={submitSuccess? "Submitted" : "Keep me posted"}/>

                {/* this prevents bot signup? from mailchimp */}
                {/* <input style={{ display : 'none' }} type="text" name="b_0d21a3ba7be6d4a85f6f25b07_3958124cb6" tabIndex="-1" /> */}
            </form>

        </div>
    )
}

export default EmailPrompt