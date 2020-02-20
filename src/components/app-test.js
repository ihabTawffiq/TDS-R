import React ,{useEffect,useState} from 'react'

export default function Apptest() {
    const [x, setX]=useState('');
    const [y, setY]=useState(0);
    
useEffect(()=>{
    console.log('48aal')

    // setX('lolo')
    // console.log(x)
},[y])

function clicked(){
    setY(Math.random())
    console.log('object')
}
// setX('3mlna set lel x aho bra el use effect l7d man4of a5retha')
    
    return (
        <div>
            <button onClick={clicked}>lolo</button>
        </div>
    )
}
