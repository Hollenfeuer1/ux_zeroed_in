import React from "react";
import TimelinePiece from "./TimelinePiece";

function Timeline() {
    return (
        <div className="timeline-grid">
            <div className="one">
                <TimelinePiece
                    year={"1972"}
                    title="y1972"
                    optionalImage="/ux_timeline_building.png"
                    optionalImage2="/Umarex1972_Logo.png"
                    className1="oneImgBg"
                    className2="oneImg"
                    text={"Wulf-Heinz Pflaumer & Franz Wonisch are working on a venture that would come to be called Umarex."} />
            </div>

            <div className="two">
                <TimelinePiece
                    year={"1993"}
                    title="y1993"
                    text={"Umarex acquires world renowned arms manafacturer, Carl Walther"} />
            </div>
            <div className="three">
                <TimelinePiece
                    year={"2006"}
                    title="y2006"
                    optionalImage2="/UmarexUSA_Logo.png"
                    className2="threeImg"
                    text={"RUAG Ammotec USA, a US distributor of RWS air rifles, is purchased by PW Intl GmbH, moved to Fort Smith, Arkansas and renamed to Umarex USA."} />
            </div>
            <div className="four">
                <TimelinePiece
                    year={"2008"}
                    title="y2008"
                    text={"Umarex USA expands air rifle line with the introduction of Ruger, Walther and Hammerli."} />
            </div>
            <div className="five">
                <TimelinePiece
                    year={"2009"}
                    title="y2009"
                    text={"Umarex USA continues to grow doubling sales over 2008 and breaks ground on a new facility"} />
            </div>
            <div className="six">
                <TimelinePiece
                    year={"2010"}
                    title="y2010"
                    text={"Umarex USA moves into a new manafacturing and warehouse facility at Chaffee Crossing in Fort Smith, Arkansas."} />
            </div>
            <div className="seven">
                <TimelinePiece
                    year={"2013"}
                    title="y2013"
                    text={"Umarex USA welcomes Walther Arms to their campus in Fort Smith, Arkansas, and breaks ground on a 7 million dollar warehouse expansion."} />
            </div>
            <div className="eight">
                <TimelinePiece
                    year={"2014"}
                    title="y2014"
                    optionalImage2="/ux_airguns_stacked.jpg"
                    className2="eightImg"
                    text={"Umarex USA introduces the UX mark. The UX is incorporated into airguns and marketing materials creating a powerful mark that is eye-catching and memorable."} />
            </div>
            <div className="nine">
                <TimelinePiece
                    year={"TODAY"}
                    title="today"
                    text={"While Umarex remains the \"King of Replicas\" in airguns, its patented technology like the safety system and dual round magazine of the Umare Hammer couple with modern-day air filling solutions and unique optic intellectual properties insures Umarex continues to be zeroed in."} />
            </div>
        </div>
    )
}

export default Timeline;