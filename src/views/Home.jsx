import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import TwitterCard from "../components/TwitterCard"
import tweetData from '../data/tweets.json'
import TweetInput from "../components/TweetInput"
import { useState } from "react"

function Home() {

    //declarar el estado
    const [tweets, setTweets] = useState(tweetData)

    const addTweet = (content) => {
        const newTweet = {
            id: tweets.length + 1,
            author: 'Alumno',
            content: content
        };
        // agregar este nuevo tweet al comienzo de la lista
        setTweets([newTweet, ...tweets])
    }

    console.log('data', tweetData);
    return (
        <div>
            <Navbar />
            <div>
                <h2 className="text-center">Bienvenidos a nuestra app</h2>
                <TweetInput sendTweet={addTweet} />
                <div>
                    {tweets.map((tweet) => (
                        <TwitterCard key={tweet.id} author={tweet.author} content={tweet.content} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home