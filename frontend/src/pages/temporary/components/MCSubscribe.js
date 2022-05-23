import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import EmailTeaser from './EmailTeaser'

export const MCSubscribe = () => {

    const url = 'https://gmail.us13.list-manage.com/subscribe/post?u=0d21a3ba7be6d4a85f6f25b07&amp;id=3958124cb6'

    return (
           <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <EmailTeaser
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
           /> 
    )
}
