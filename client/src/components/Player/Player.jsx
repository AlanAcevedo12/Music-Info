import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Player.module.css";

function Player() {
    const trackId = useSelector(state => state.playerTrack)
    const trackQueue = useSelector(state => state.tracks)
    const [input, setInput] = useState(0);
    const [volume, setVolume] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [trackIndex, setTrackIndex] = useState(0);

    let interval = null;

    const [audio, setAudio] = useState(new Audio(trackQueue[trackIndex]?.preview))

    useEffect(() => {
        audio.src = trackQueue[trackId] ? trackQueue[trackId].preview : null;
        playAndPauseMusic(true);
        setTrackIndex(trackId);
    }, [trackId])

    function onChangeHandler(e) {
        audio.pause();
        setInput(e.target.value);
        audio.currentTime = e.target.value;
        audio.play();
    }

    function playAndPauseMusic(isNew) {
        if (playing === false || isNew) {
            interval = setInterval(() => {
                setInput(audio.currentTime);
            }, 1000);
            console.log("playing")
            audio.play();
            setPlaying(true);
        }
        else {
            clearInterval(interval);
            audio.pause();
            setPlaying(false);
        }
    }

    function volumeHandler(e) {
        setVolume(e.target.value);
        audio.volume = e.target.value;
    }

    function nextHandler(e) {
        if (trackIndex >= trackQueue.length - 1) return;
        audio.pause();
        audio.src = trackQueue[trackIndex + 1].preview;
        setTrackIndex(trackIndex + 1);
        audio.play();
    }

    function prevHandler(e) {
        if (trackIndex <= 0) return;
        audio.pause();
        audio.src = trackQueue[trackIndex - 1].preview;
        setTrackIndex(trackIndex - 1);
        audio.play();
    }

    return (
        <div className={styles.Player}>
            <div id={styles.playerContainer}>
                <div id={styles.buttonsContainer}>
                    <div id={styles.divButtonSmall}>
                        <button className={styles.buttonSmall} type="button" onClick={prevHandler}>
                            <svg viewBox="0 0 16 16" focusable="false" className={styles.svgSmall} data-testid="PlayIcon">
                                <path d="M15 0v16L2 8.802V16H1V0h1v7.198L15 0z"></path>
                            </svg>
                        </button>
                    </div>
                    <div id={styles.divButton}>
                        <button className={styles.button} type="button" onClick={() => { playAndPauseMusic(false) }}>
                            <svg viewBox="0 0 16 16" focusable="false" className={styles.svg} data-testid="PlayIcon">
                                {
                                    playing === false ? <path d="m3 1 12 7-12 7V1z"></path> :
                                        <path d="M6 0H2v16h4V0zm8 0h-4v16h4V0z"></path>
                                }
                            </svg>

                        </button>
                    </div>
                    <div id={styles.divButtonSmall}>
                        <button className={styles.buttonSmall} type="button" onClick={nextHandler}>
                            <svg viewBox="0 0 16 16" focusable="false" className={styles.svgSmall} data-testid="PlayIcon">
                                <path d="M1 1v14l11-6.217V15h1V1h-1v6.217L1 1z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div id={styles.sliderContainer}>
                    {/* <span>00:00</span> */}
                    <div id={styles.trackContainer}>
                        <div id={styles.trackHead}></div>
                        <div id={styles.trackRange}>
                            <div id={styles.counterCurrent}>{audio.currentTime ? secondsToString(audio.currentTime) : "00:00"}</div>
                            <div id={styles.trackSlider}></div>
                            <div id={styles.trackSliderProgress} style={{ width: (audio.currentTime * 100 / 30) + "%" }}></div>
                            <input type="range" value={input} min="0" max="30" step="0.1" onChange={onChangeHandler} id={styles.range} />
                            <div id={styles.counterMax}>{audio.duration ? "00:30" : "00:00"}</div>
                        </div>
                    </div>
                    {/* <span>00:00</span> */}
                </div>
                <div id={styles.extraOptions}>
                    <div id={styles.volumeButtonContainer}>
                        <div id={styles.volumeSliderContainer}>
                            <div id={styles.volumeSlider}></div>
                            <div id={styles.volumeSliderProgress} style={{ width: (volume * 90 / 1) + "%" }}></div>
                            <input type="range" value={volume} min="0" max="1" step="0.01" onChange={volumeHandler} id={styles.volumeRange} />
                            <div id={styles.volumeSliderContainerDrop}></div>
                        </div>
                        <button id={styles.volumeButton}>
                            <svg viewBox="0 0 16 16" focusable="false" className={styles.svgSmall} data-testid="PlayIcon">
                                <path d="M5.894 9.8H2V6.2h3.894L9 3.301V12.7L5.894 9.8zM1 10.8h4.5L10 15V1L5.5 
                                5.2H1v5.6zm14-3.145a5.117 5.117 0 0 1-1.504 3.63l-.687-.728A4.118 4.118 0 0 0 14 
                                7.655a4.116 4.116 0 0 0-1.013-2.71l.708-.708A5.112 5.112 0 0 1 15 7.655zm-2.094.108c0 
                                .784-.33 1.49-.857 1.99l-.687-.727a1.734 1.734 0 0 0 .036-2.491l.707-.707a2.73 2.73 0 0 
                                1 .801 1.935z"></path>
                            </svg>
                        </button>
                    </div>
                    <div id={styles.albumContainer}>
                        <div id={styles.imgContainer}>
                            <img src="https://e-cdns-images.dzcdn.net/images/cover/1effbd752f7efc00ba33cbd8fbb4102b/28x28-000000-80-0-0.jpg" />
                        </div>
                        <span id={styles.albumTitle}>
                            Titulo Album
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player;

function secondsToString(seconds) {
    let minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10) ? '0' + minute : minute;
    let second = seconds % 60;
    second = (second < 10) ? '0' + second : second;
    return minute + ':' + (second < 10 ? "0" + Math.floor(second) : Math.floor(second));
}