import React from "react";
import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
} from "reactstrap";
function TimelinePiece({ year, title, optionalImage, optionalImage2, text, className1, className2 }) {
    return (
        <div className="border-4">
                <img className={className1} src={optionalImage} />
                    <h1 className={title}>{year}</h1>
                    <img className={className2} variant="bottom" src={optionalImage2} />
            <p className="border-t-2 border-[#ed1c24] sm: text-sm">
                        {text}
                    </p>
        </div>
    )
}

export default TimelinePiece;