'use client'
import { useState } from 'react'
import './bumperstick.css'

const BumperSticker: React.FC = () => {

    const [review, setReview] = useState("")

    const pathName = process.env.BASE_URL

    async function submitReviews() {
        try {
          const response = await fetch(`${pathName}/server/submitreview`, {
              method: 'POST',
              body: JSON.stringify({review}),
          });
          const result = await response.json();
          setReview("")
        } catch (error) {
          console.error('Error fetching data:', error);
        }
        // const result = await submitReviews();
        // console.log('da reviews', result)
        return () => {
            console.log('Component unmounted or effect re-ran');
        };  
    }

    // const updateValues = (e: HTMLTextAreaElement | HTMLInputElement | HTMLEve) => {
    //     setReview(e?.target.value)
    // }

    return (
        <div id="warning-container">
        <div id="top-container">
          <span id="title">HOW'S MY PUBLIC SPEAKING?</span>
          <span>PRESENTATION NUMBER: ssn here</span>
        </div>
        <div id="bottom-container">
          <label>
            REVIEW HERE:
            <textarea value={review} onChange={(e: any)=>{setReview(e.target.value)}}/>
          </label>
        </div>
        <div id="button-container">
        <button id="submit-button" onClick={submitReviews}>Submit</button>
        </div>
      </div>
    )
}

export default BumperSticker;