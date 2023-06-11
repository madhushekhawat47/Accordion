import React, { useState } from 'react';
import {questions} from './api';
import './index.css';
import MyAccordian from './MyAccordian';

const Accordian =()=>
{
    const[data,setdata]=useState(questions);
    return(
        <>
        <section className='main-div'>
        <h1>Interview Questions & Answers</h1>
          {
            data.map((curElement)=>
            {
                const {id,question,answer}=curElement;
               return <MyAccordian key={id} {...curElement}/>
            })
          }
          </section>
        </>
    )
}
export default Accordian;