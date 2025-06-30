import React,{ useState } from "react"

function MoodDisplay({ value }) {
    const moods={
        happy: "keep smiling😃",
        sad: "its okey to be sad sometimes😔",
        excited: "its great to be excited!😄",
        angry: "lets calm down😡"
    }
    return (
        <div className='box'>
           {
            value?<><h2>Your Mood</h2><p>{moods[value]}</p></>:
            <><h2>Please select a mood</h2></>
           } 
        </div>
    )
}

export default MoodDisplay
