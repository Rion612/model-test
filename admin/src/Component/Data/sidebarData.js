import React from 'react'

import { GiGraduateCap } from 'react-icons/gi';
import { AiOutlineDashboard } from "react-icons/ai";
import { BsQuestionOctagonFill } from 'react-icons/bs';
import { FaCcMastercard } from 'react-icons/fa';

export const sidebarData = [
    {
        title :'Dashboard',
        path :'/',
        icon :<AiOutlineDashboard/>,
        cName :'nav-text'
    },
    {
        title :'Courses',
        path :'/courses',
        icon :<GiGraduateCap/>,
        cName :'nav-text'
    },
    {
        title :'Questions',
        path :'/modeltest/questions',
        icon :<BsQuestionOctagonFill/>,
        cName :'nav-text'
    },
    {
        title :'Payments',
        path :'/user/payments',
        icon :<FaCcMastercard/>,
        cName :'nav-text'
    }

]
    
