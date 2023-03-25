import React from "react"

// Strongly inspired by: https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server
// Sending it to : https://docs.google.com/spreadsheets/d/1eloIDOn0HHQojupTJagXINj2S5qXYm4yEhDeWAhTAq8/edit#gid=0

const ContactForm = ({text, name, email, comment, submit}) => {

    return (
        <div className="outer-form-block">
        <div className="form-block">
            <h2>Input Form Title</h2>
            <p>{text}</p>
            <form method="post" data-email='pippidis+baalpulken@gmail.com'
                action='https://script.google.com/macros/s/AKfycbzVPZLsSkL3dRHKS5_NfYSF_GynFNVW4VNaHFMNu5XTxca-XgauVLPf05Tw6dYOcS3o/exec'
            >
                <label> 
                    {name}
                    <input type="text" name="name" id="name" />
                </label>
                <label> 
                    {email}
                    <input type="email" name="email" id="email" />
                </label>
                <label> 
                    {comment}
                    <textarea name="comment" id="comment" rows="5" />
                </label>
                <button type="submit">{submit}</button>
            </form>
                    
            </div>
            </div>
    )
}

export default ContactForm