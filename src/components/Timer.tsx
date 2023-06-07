import React, {useState, useEffect, useRef, MutableRefObject} from "react";
import {useStopwatch} from 'react-timer-hook';
import {ProgressBar, Button, Stack, FormControl} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

interface Props {
    currentTime: number
    setCurrentTime: React.Dispatch<React.SetStateAction<number>>
    setRunning: React.Dispatch<React.SetStateAction<boolean>>
    targetTime: number
    handleMinutes: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSeconds: (e: React.ChangeEvent<HTMLInputElement>) => void
    mins: number
    secs: number
}

export const Timer = ({setRunning, currentTime, setCurrentTime, targetTime, handleMinutes, handleSeconds, mins, secs}: Props) => {
    //const [currentTime, setCurrentTime] = useState(0)

    const {
        seconds,
        isRunning,
        start,
        pause,
    } = useStopwatch({autoStart: false})


    useEffect(() => {
        // console.log(seconds)
        setRunning(isRunning)

        if (isRunning) {
            updateTimer()
        }
        resetTimer()
        console.log()
    }, [isRunning, seconds])
    const updateTimer = () => {
        setCurrentTime(prev => prev + 1)
    }
    const resetTimer = () => {
        if (currentTime === targetTime) {
            setCurrentTime(0)
        }
    }
    const refresh = () => {
        window.location.reload()
    }

    const isTimeSet = mins !== 0 || secs !== 0

    return (
        <Container>
            <Col className="m-1">
                <Stack direction="horizontal" gap={1}>
                    <Button className={isTimeSet ? "" : "disabled"} onClick={start}>Start</Button>
                    <Button className={isRunning ? "" : "disabled"} onClick={pause}>Pause</Button>
                    <Button onClick={refresh}>Reset</Button>
                    <FormControl type="number" placeholder="minutes" onChange={handleMinutes}></FormControl>
                    <FormControl type="number" placeholder="seconds" onChange={handleSeconds}></FormControl>
                </Stack>
            </Col>
            <ProgressBar now={currentTime} max={targetTime}></ProgressBar>
            {/*<Button onClick={reset}>Reset</Button>*/}
            <div className="d-flex justify-content-evenly">
                <p>currentTime: {currentTime}</p>
                <p>targetTime: {targetTime}</p>
            </div>
        </Container>
    )
}

