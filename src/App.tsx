import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Quote} from "./components/Quote";
import Container from "react-bootstrap/Container";
import {Timer} from "./components/Timer";
import {ImageView} from "./components/ImageView";
import {DropElement} from "./components/DropElement";


function App() {

//=======================TIMER==============================
    const [running, setRunning] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [targetTime, setTargetTargetTime] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const handleMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)

        //convert value to number
        let minutes = parseInt(e.target.value)

        //prevent user from setting negative minutes
        if (minutes < 0 || isNaN(minutes)) {
            e.target.value = "0"
        } else {
            setMinutes(minutes)
        }
    }
    const handleSeconds = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)

        //convert value to number
        let seconds = parseInt(e.target.value)

        //prevent user from setting negative seconds
        if (seconds < 0 || isNaN(seconds)) {
            e.target.value = "0"
        } else {
            setSeconds(seconds)
        }
    }
    useEffect(() => {
        console.log(`Minutes: ${minutes} Seconds: ${seconds}`)
        setTargetTargetTime(minutes * 60 + seconds)
    }, [minutes, seconds])


//=======================IMAGE VIEW==============================
    const [index, setIndex] = useState(0)

    useEffect(() =>{
        //increment index when timer resets back to 0
        if(currentTime === 0){
            setIndex(prevIndex => prevIndex + 1)
        }

        if(index === imageUrls.length){
            setIndex(0)
        }

        console.log(`Index: ${index}`)
    },[running, currentTime])

//=======================DROP ZONE==============================

    const [imageUrls, setImageUrls] = useState<string[]>([])
    const handleDrop = (acceptedFiles: File[]) => {
        console.log(`Files handled in drop: ${acceptedFiles}`)
        acceptedFiles.forEach(file => saveFile(file))

    }
    const saveFile = (file: File) => {
        const imageUrl = URL.createObjectURL(file)
        setImageUrls(prevImageUrls => [...prevImageUrls, imageUrl]);
    }
    useEffect(() => {
        console.log(`Image Url Count: ${imageUrls.length}`)
    }, [imageUrls])



    return (
        <Container>
            <Timer
                setRunning={setRunning}
                setCurrentTime={setCurrentTime}
                handleMinutes={handleMinutes}
                handleSeconds={handleSeconds}
                mins={minutes}
                secs={seconds}
                currentTime={currentTime}
                targetTime={targetTime}
            />
            <ImageView
                imageUrl={imageUrls[index]}
            />
            <DropElement captureDrop={handleDrop}
            />
            {/*<Quote/>*/}
        </Container>
    );
}

export default App;
