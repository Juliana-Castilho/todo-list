import React from 'react';
import CurrentDate from '../CurrentDate/CurrentDate';
import Divider from '../Divider/Divider';
import ResumeTasks from '../ResumeTasks';
import './Header.css';

const Header = () => {
    return (
        <>
            <h3 className='header-title'>Minhas Tarefas</h3>
            <CurrentDate />
            <ResumeTasks />
            <Divider />
        </>
    );
}

export default Header;