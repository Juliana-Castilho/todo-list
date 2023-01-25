import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CgChevronLeft } from 'react-icons/cg';


import Button from "../Button";
import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate('/');
    }
    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>
                    <CgChevronLeft />
                </Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur temporibus cumque commodi recusandae, facilis porro.
                </p>
            </div>
        </>
    )
}

export default TaskDetails