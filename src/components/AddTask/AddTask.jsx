import React, { useState } from 'react';
import Button from '../Button';
import { CgMathPlus } from 'react-icons/cg';

import './AddTask.css'

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () =>{
        handleTaskAddition(inputData)
        setInputData('')
    }
    
    return (
        <div className='add-task-container'>
            <input
                onChange={handleInputChange}
                value={inputData}
                className='add-task-input'
                type="text"
            />
            <div className='add-task-button-container'>
                <Button onClick={handleAddTaskClick}>
                <CgMathPlus />
                </Button>
            </div>
        </div>
    );
}

export default AddTask;