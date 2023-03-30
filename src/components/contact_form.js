import React from "react"

// Strongly inspired by: https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server
// Sending it to : https://docs.google.com/spreadsheets/d/1eloIDOn0HHQojupTJagXINj2S5qXYm4yEhDeWAhTAq8/edit#gid=0

const ContactForm = ({title, text, name, email, comment, submit}) => {

    return (
        <div className="form-block">
            
            <form method="post" data-email='pippidis+baalpulken@gmail.com'
                action='https://script.google.com/macros/s/AKfycbxzMt267AHUPtbHiKd73-TK2a6fV5VfnaGl9wVPEVqt7LYjAkQSN-9XNr1UInUIvgfz/exec'
            >
                <h2>{title}</h2>
            <p>{text}</p>
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
    )
}

export default ContactForm