import React from 'react';
import { IoMdClose } from "react-icons/io";

function handleMessageClick(e) {
    e.target.parentNode.remove();
}

const ErrorBox = (props) => {
    return (
        <p className="p-2 text-red-500 bg-red-100 border border-red-500 rounded-lg font-bold relative">{props.message}
        	<IoMdClose className="absolute top-2 right-2 cursor-pointer" onClick={handleMessageClick}/>
        </p>
    );
};

const SuccessBox = (props) => {
    return (
        <p className="p-2 text-green-500 bg-green-100 border border-green-500 rounded-lg font-bold relative">{props.message}
        	<IoMdClose className="absolute top-2 right-2 cursor-pointer" onClick={handleMessageClick}/>
        </p>
    );
};

const InfoBox = (props) => {
    return (
        <p className="p-2 text-orange-500 bg-orange-100 border border-orange-500 rounded-lg font-bold relative">{props.message}
        <IoMdClose className="absolute top-2 right-2 cursor-pointer" onClick={handleMessageClick}/>
        </p>
    );
};

export { ErrorBox, SuccessBox, InfoBox };