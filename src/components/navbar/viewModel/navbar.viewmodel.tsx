import { useEffect, useState } from "react"

export const NavBarViewModel = () => {

    useEffect(() => {
        listening()
    }, []);
    
    const listening = () => {
        // const father = document.getElementById('div-father');
        // const element = document.getElementById('network');
        // const image = document.getElementById('image');
        // father?.addEventListener('mouseover', () => {
        //     element!.style.opacity = '1.0';
        //     element!.style.transition = '0.6s';
        //     image!.style.opacity = '0.0';
        //     image!.style.transition = '0.6s';
        // })
        // father?.addEventListener('mouseleave', () => {
        //     element!.style.opacity = '0.0';
        //     element!.style.transition = '0.6s';
        //     image!.style.opacity = '1.0';
        //     image!.style.transition = '0.6s';
        // })
    }
}