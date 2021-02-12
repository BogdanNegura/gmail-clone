import React from 'react'
import "./send-mail.style.css"
import CloseIcon from "@material-ui/icons/Close"

const SendMail = () => {
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className="closeIcon"/>
            </div>
        </div>
    )
}

export { SendMail }

