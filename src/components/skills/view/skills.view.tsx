import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { startSkill } from '../viewModel/skills.controller'
import { Card } from 'primereact/card'

export function Skills(props: any) {
    const text = useSelector((state: any) => state.skills.text)
    const dispatch = useDispatch()

    useEffect(() => {
        if (props.canAnimate) {
            setTimeout(() => {
                dispatch(startSkill())
            }, 100)
        }
    }, [text])



    return (
        <div className={props.class} >
            <div className='animation-eu'>
                <div className='firstTitle title'>
                    <p className='component-text'>{text[0]}</p><p className='component-text3'>{text.slice(1, text.length - 2)}</p><p className='component-text2'>{text[text.length - 2]}</p><p className='component-text'>{text[text.length - 1]}</p>
                </div>
            </div>
            <div className='content-2' id='aboutAnimate4'>
                <div className='card'>
                    <div>
                        <div id='aboutAnimate5' className='div-bol'>
                            <div className='bol1'></div>
                            <div className='bol2'></div>
                            <div className='bol3'></div>
                        </div>
                    </div>
                    <div className='text-content'>
                        <div id='aboutAnimate6' className='content-text6'>
                        </div>
                    </div>

                </div>
            </div>

        </div>)
}