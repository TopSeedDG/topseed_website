import React, {useEffect, useRef, useState} from 'react'

const defaultMessge = '⚡️Launching soon'
const errorString = 'This email address doesn\'t seem valid'
const successMessage = 'Awesome, thanks for tuning in!' 
const duplicateMessage = 'This email address is already in our system'

const defaultBtnText = 'Keep me posted'


const EmailTeaser = ({ status, message: MCMessage, onValidated}) => {

    const [message, setMessage] = useState(defaultMessge)
    const [submitFailed, setFailure] = useState(false)
    const [submitSuccess, setSuccess] = useState(null)
    const [buttonText, setButtonText] = useState(defaultBtnText)
    const [errorMessage, setErrorMessage] = useState(errorString)
    const emailPrompt = useRef(null)
    const emailInput = useRef(null)
    const emailMessage = useRef(null)
    const submitBtn = useRef(null)
    const statusRef = useRef(null)

    

    



    const handleError = () => {
        // console.log('handle error')	
        setFailure(true)

        setButtonText(defaultBtnText)
        setMessage(defaultMessge)
        emailPrompt.current.classList.add('error')
        emailInput.current.focus()
    }


    const handleSuccess = () => {
        // console.log('handle success')	
        setFailure(false)
        setSuccess(true)
        setButtonText('Submitted')

        emailMessage.current.classList.add('fade-out')
        emailPrompt.current.classList.remove('error')
        emailInput.current.value = ''

        emailMessage.current.onanimationend = () => {
            setMessage(defaultMessge)
            setSuccess(false)
            setButtonText(defaultBtnText)

            setTimeout(() => {
                emailMessage.current.classList.remove('fade-out')
            }, 0)
        }
    }

    const handleTimeOut = () => {
        // console.log('timeout', statusRef.current)
        if (statusRef.current === 'sending') {
            handleError()
            setErrorMessage('Sorry, something went wrong. Please try again')
        }

    }




    const submitHandler = (e) => {

        e.preventDefault()
        // console.log(emailInput.current.value)

		onValidated({ EMAIL: emailInput.current.value })


    }

    useEffect(() => {

        if (status === null) {
            return
        }

        console.log('useEffect', status, MCMessage)

        statusRef.current = status

        switch (true) {
            case status === 'error' && MCMessage.includes('many'):
                console.log('useEffect duplicate')
                setMessage(duplicateMessage)
                handleSuccess()
                // console.log('duplicate')
                break
            case status === 'error':
                console.log('useEffect error')
                setErrorMessage(errorString)
                handleError()
                break;

            case status === 'success':
                console.log('useEffect success')
                setMessage(successMessage)
                handleSuccess()
                break
            case status === 'sending':
                console.log('useEffect sending')
                setButtonText('sending...')
                setTimeout(() => {
                    handleTimeOut()
                }, 2000);
                break
        }


    }, [status, MCMessage])





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

                {submitFailed? <p className='error-message'>{errorMessage}</p> : null}
                
                <input
                    disabled={submitSuccess? true : false} 
                    ref={submitBtn} className='submit-btn' 
                    type="submit" 
                    value={buttonText}/>

                {/* this prevents bot signup? from mailchimp */}
                {/* <input style={{ display : 'none' }} type="text" name="b_0d21a3ba7be6d4a85f6f25b07_3958124cb6" tabIndex="-1" /> */}
            </form>

        </div>

    );
};

export default EmailTeaser;
