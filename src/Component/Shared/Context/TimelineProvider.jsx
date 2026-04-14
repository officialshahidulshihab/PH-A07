"use client"
import { useState } from "react";
import TimelineContext from "./TimlineContext";


const TimelineProvider = ({ children }) => {
    const [checkCall, setCheckCall] = useState([]);
    const [checkText, setCheckText] = useState([]);
    const [checkVideo, setCheckVideo] = useState([]);

    return (
        <TimelineContext.Provider value={{ checkCall, setCheckCall, checkText, setCheckText, checkVideo, setCheckVideo }}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineProvider;