import React, {useState} from 'react';
import AuthorBox from './AuthorBox'
import TextBox from './TextBox'
import NewRandomQuote from './NewRandomQuote'
import TweetQuote from './TweetQuote'

// QuoteBox est le composant qui contient la quote. Il est appelé dans App.jsx
// Il appelle trois composants : TextBox et AuthorBox pour la quote, NewRandomQuote pour aller en chercher une nouvelle
const QUOTES = [{
    quoteText: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    quoteAuthor: "Thomas Edison"
    },
    {
    quoteText: "You can observe a lot just by watching.",
    quoteAuthor: "Yogi Berra"
    }]

const selectQuote = (arr) => {
        return Math.floor(Math.random() * Math.floor(arr.length));
}



export default function QuoteBox() {
    const [selectedQuote, setSelectedQuote] = useState()
    console.log('prout')
    return (
        <div id = 'quote-box'>
            <TextBox  text = {QUOTES[0].quoteText}/>
            <AuthorBox author = {QUOTES[0].quoteAuthor} />
            <NewRandomQuote />
            <TweetQuote text = {QUOTES[0].quoteText}
                        author = {QUOTES[0].quoteAuthor}
            />
        </div>
    )
}
