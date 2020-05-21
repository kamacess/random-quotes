import React from 'react'

// appelé par QuoteBox

export default function TextBox({text}) {
    console.log(text)
    return (
        <div id = 'text'>
            <p>«&nbsp;
            {text}
            &nbsp;»</p>
        </div>
    )
}
