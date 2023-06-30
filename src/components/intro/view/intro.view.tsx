import { useEffect, useState } from "react"
import { start, introSlice, reset } from '../viewModel/intro.viewModel'
import { useSelector, useDispatch } from 'react-redux'
import './intro.view.css'

export function Intro(props: any) {
    
    const text = useSelector((state: any) => state.intro.text)
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(start())
        }, 50)
    }, [text])
    return (
        <div className={props.class} >
            <div className='animation-eu'>
                <div id='image' className='front'></div>
                <div className='firstTitle title'>
                    <p className='component-text'>{'<'}</p><p className='component-text3'>{text}</p><p className='component-text2'>/</p><p className='component-text'>{'>'}</p>
                </div>
            </div>
        </div>)
}