import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { textIntro, startAnimate, resetAll, startSkill, android, apple, flutter, angular, SkillsSlice, css, git, html, node, py, react, reset, sql, vue } from '../viewModel/skills.controller'
import { Card } from 'primereact/card'
import '@fortawesome/fontawesome-free/css/all.min.css';
import flutterimg from '../../../assets/images/icon_flutter_wht.png'
import azure from '../../../assets/images/azure_devops-1.png'
import './skills.view.css'
import { Rating } from 'react-simple-star-rating'

export function Skills(props: any) {
    const text = useSelector((state: any) => state.skills.text)
    const text2 = useSelector((state: any) => state.skills.text2)
    const start = useSelector((state: any) => state.skills.canStart)
    const [index, setIndex] = useState(0)
    const dispatch = useDispatch()
    const stars = useSelector((state: any) => state.skills.stars)
    useEffect(() => {
        if (props.canAnimate) {
            setTimeout(() => {
                dispatch(startSkill())
            }, 100)
        }
    }, [text])

    useEffect(() => {
        if (start) {
            setTimeout(() => {
                switch (index) {
                    case 0:
                        dispatch(flutter())

                        break;
                    case 1:
                        dispatch(react())

                        break;
                    case 2:
                        dispatch(angular())

                        break;
                    case 3:
                        dispatch(py())

                        break;
                    case 4:
                        dispatch(node())

                        break;
                    case 5:

                        dispatch(html())
                        break;
                    case 6:

                        dispatch(css())
                        break;
                    case 7:

                        dispatch(vue())
                        break;
                    case 8:
                        dispatch(sql())

                        break;
                    case 9:
                        dispatch(apple())

                        break;
                    case 10:
                        dispatch(android())

                        break;

                    default:
                        dispatch(git())
                        break;
                }
            }, 140)
        }
    }, [text2])



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
                            <div >
                                <p className='component-text4'>{textIntro}</p><br></br><br></br><br></br>
                            </div>
                            <div className='skills-content'>
                                <img onMouseOver={() => { dispatch(startAnimate()); setTimeout(() => dispatch(flutter()), 100); setIndex(0) }} onMouseLeave={() => dispatch(resetAll())} className='imgs-skills' src={flutterimg} />
                                <i onMouseLeave={() => dispatch(resetAll())} onMouseOver={() => { setIndex(1); dispatch(startAnimate()); setTimeout(() => dispatch(react()), 100) }} className="fab fa-react icons-skills"></i>
                                <i onMouseLeave={() => dispatch(resetAll())} onMouseOver={() => { setIndex(2); dispatch(startAnimate()); setTimeout(() => dispatch(angular()), 100) }} className="fab fa-angular icons-skills"></i>
                                <i onMouseLeave={() => dispatch(resetAll())} onMouseOver={() => { setIndex(3); dispatch(startAnimate()); setTimeout(() => dispatch(py()), 100) }} className="fab fa-python icons-skills"></i>

                                <i onMouseLeave={() => dispatch(resetAll())} onMouseOver={() => { setIndex(4); dispatch(startAnimate()); setTimeout(() => dispatch(node()), 100) }} className="fab fa-node-js icons-skills"></i>
                                <i onMouseLeave={() => dispatch(resetAll())} onMouseOver={() => { setIndex(5); dispatch(startAnimate()); setTimeout(() => dispatch(html()), 100) }} className="fab fa-html5 icons-skills"></i>
                                <i onMouseLeave={() => dispatch(resetAll())} onMouseOver={() => { setIndex(6); dispatch(startAnimate()); setTimeout(() => dispatch(css()), 100) }} className="fab fa-css3-alt icons-skills"></i>
                                <i onMouseLeave={() => dispatch(resetAll())} onMouseOver={() => { setIndex(7); dispatch(startAnimate()); setTimeout(() => dispatch(vue()), 100) }} className="fab fa-vuejs icons-skills"></i>
                                <i onMouseLeave={() => dispatch(resetAll())} onMouseOver={() => { setIndex(8); dispatch(startAnimate()); setTimeout(() => dispatch(sql()), 100) }} className="fas fa-database icons-skills"></i>

                                <i onMouseLeave={() => dispatch(resetAll())} onMouseOver={() => { setIndex(9); dispatch(startAnimate()); setTimeout(() => dispatch(apple()), 100) }} className="fab fa-apple icons-skills"></i>
                                <i onMouseLeave={() => dispatch(resetAll())} onMouseOver={() => { setIndex(10); dispatch(startAnimate()); setTimeout(() => dispatch(android()), 100) }} className="fab fa-android icons-skills"></i>
                                <i onMouseLeave={() => dispatch(resetAll())} onMouseOver={() => { setIndex(11); dispatch(startAnimate()); setTimeout(() => dispatch(git()), 100) }} className="fab fa-git-alt icons-skills"></i>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{ height: '7rem' }}>
                                <p className='component-text4'>{text2}</p>
                                <Rating
                                   iconsCount={stars}
                                   fillColor='#ccc'
                                   emptyColor='rgb(219, 128, 17)'
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>)
}