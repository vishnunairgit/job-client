import React, { useState } from 'react'
import './test.css';


// function Test() {

//     const [limit, setlimit] = useState(' ')
//     const [evenNumber, setevenNumber] = useState([])

//     const handleChange = (e) => {
//         setlimit(e.target.value)
//     }
//     const handlePrintEvenNumbers = () => {
//         const num = parseInt(limit, 10);
//         if (isNaN(num)) {
//             setevenNumber(['please enter a valid number'])
//         } else {
//             const evens = [];
//             for (let i = 2; i <= num; i += 2) {
//                 evens.push(i)
//             }
//             setevenNumber(evens)
//         }
//     }
//     return (
//         <div>
//             <input type="text"
//                 value={limit}
//                 onChange={handleChange}
//                 placeholder='enter a limit'
//             />
//             <button type="button" onClick={handlePrintEvenNumbers}>print even number</button>
//             <div>
//                 {evenNumber.map((evenNumber, index) => (
//                     <p key={index}>{evenNumber}</p>
//                 ))}
//             </div>

//         </div>
//     )
// }
// export default Test



// function Test() {
//     const [number, setnumber] = useState([])
//     const handleNumber = () => {
//         const numb = [];
//         for (let i = 10; i >= 1; i--) {
//             numb.push(i)
//         }
//         setnumber(numb)
//     }
//     return (

//         <div>
//             <button type="button" onClick={handleNumber}>print number</button>
//             {number.map((number, index) => (
//                 <p key={index} >{number}</p>
//             ))}
//         </div>
//     )
// }
// export default Test





// function Test() {
//     const [input, setinput] = useState('')
//     const [reversed, setreversed] = useState('')
//     const handleChange = (e) => {
//         setinput(e.target.value)
//     }
//     const reversestring = () => {
//         setreversed(input.split('').reverse().join(''))
//     }
//     return (
//         <div>
//             <input type="text"
//                 value={input}
//                 placeholder='enter teh string'
//                 onChange={handleChange}
//             />
//             <button type="button" onClick={reversestring}>Reverse String</button>
//             <div>
//                 <p>{reversed}</p>
//             </div>

//         </div>
//     )
// }

// export default Test




// function Test() {
//     const [letter, setletter] = useState([])
//     const handleAZ = () => {
//         const alphabet = [];
//         for (let i = 97; i <= 122; i++) {
//             alphabet.push(String.fromCharCode(i))
//         }
//         setletter(alphabet)
//     }
//     return (
//         <div>
//             <button type="button" onClick={handleAZ}>Display A-Z</button>
//             {letter.map((letter, index) => (
//                 <p key={index} >{letter}</p>
//             ))}
//         </div>
//     )
// }

// export default Test