import React from 'react'
import './Cursor.css';

const Cursor = () => {

    const mouseskew = () => {
        var xprev = 0;
        var yprev = 0;


        window.addEventListener('mousemove', (data) => {
            var xdiff = data.clientX - xprev;
            var ydiff = data.clientY - yprev;
            // console.log(data.clientX, data.clientY);
           
            mouseMove(xdiff, ydiff)
        })

    }
    mouseskew();

    const mouseMove = (xdiff, ydiff) => {
        var timeout;
        window.addEventListener('mousemove', (data) => {
            clearTimeout(timeout);
            document.querySelector('#cursor').style = ` display : block`
            document.querySelector('#cursor').style.transform = `translate(${data.clientX - 5}px,${data.clientY - 5}px) skew(clamp(-45deg, ${ydiff}deg, 45deg), clamp(-45deg,  ${xdiff}deg, 45deg))`
            timeout = setTimeout(() => {
                document.querySelector('#cursor').style.transform = `translate(${data.clientX - 5}px,${data.clientY - 5}px) skew(0,0)`
            }, 100);
        })
    }

    return (
        <>
            <div id='cursor' className="cursor"></div>
        </>
    )
}

export default Cursor