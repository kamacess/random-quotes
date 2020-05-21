import React from 'react'

export default function TweetQuote({text, author}) {
    const tweet = text + " – " + author
    return (
        <div >
            <a id = 'tweet-quote' href={"https://twitter.com/intent/tweet?&text=" + tweet}>tweet this badass quote</a>
        </div>
    )
}
