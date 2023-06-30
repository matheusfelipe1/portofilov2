import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { start, fullText2 } from '../viewModel/about-me.viewModel'
import { Card } from 'primereact/card'
import './about-me.view.css'

export function AboutMe(props: any) {
    const text = useSelector((state: any) => state.aboutMe.text)
    const finished = useSelector((state: any) => state.aboutMe.finished)
    const dispatch = useDispatch()

    useEffect(() => {
        if (props.canAnimate) {
            setTimeout(() => {
                dispatch(start())
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
            <div className='content-2' id='aboutAnimate1'>
                <div className='card'>
                    <div>
                        <div id='aboutAnimate2' className='div-bol'>
                            <div className='bol1'></div>
                            <div className='bol2'></div>
                            <div className='bol3'></div>
                        </div>
                    </div>
                    <div className='text-content'>
                        <div id='aboutAnimate3' className='content-text6'>
                            <p className='component-text4'>{fullText2}</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>)
}