import React from 'react'
import './Cursor.css';

const Cursor = () => {

    const mouseskew = () => {
        var xprev = 0;
        var yprev = 0;




        document.addEventListener('mousemove', (data) => {
            var xdiff = data.clientX - xprev;
            var ydiff = data.clientY - yprev;
            // console.log(data.clientX, data.clientY);


            // console.log("mouse move Y : " + data.clientY);   

            mouseMove(xdiff, ydiff)
            xprev = data.clientX
            yprev = data.clientY
        })

    }
    mouseskew();

    const mouseMove = (xdiff, ydiff) => {
        var timeout;
        document.addEventListener('mousemove', (data) => {
            clearTimeout(timeout);
            document.querySelector('#cursor').style = ` display : block`
            document.querySelector('#cursor').style.transform = `translate(${data.clientX - 5}px,${data.clientY - 5}px) scale(clamp(0.8, ${ydiff}/2, 1.2), clamp(0.8,  ${xdiff}/2, 1.2)) rotate(clamp(-20deg,  ${data.movementX}deg, 20deg))`
            timeout = setTimeout(() => {
                document.querySelector('#cursor').style.transform = `translate(${data.clientX - 5}px,${data.clientY - 5}px) scale(1,1) rotate(0deg)`
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