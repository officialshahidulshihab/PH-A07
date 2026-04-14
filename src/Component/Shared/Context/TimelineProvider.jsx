"use client"
import { useEffect, useState } from "react";
import TimelineContext from "./TimlineContext";


const TimelineProvider = ({ children }) => {
    const [checkCall, setCheckCall] = useState([]);
    const [checkText, setCheckText] = useState([]);
    const [checkVideo, setCheckVideo] = useState([]);
    
    useEffect(()=>{
        const savedCall = localStorage.getItem("Call");
        const savedText = localStorage.getItem("Text");
        const savedVideo = localStorage.getItem("Video");

        if (savedCall) setCheckCall(JSON.parse(savedCall));
        if (savedText) setCheckText(JSON.parse(savedText));
        if (savedVideo) setCheckVideo(JSON.parse(savedVideo));
    }, [])

    return (
        <TimelineContext.Provider value={{ checkCall, setCheckCall, checkText, setCheckText, checkVideo, setCheckVideo }}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineProvider;