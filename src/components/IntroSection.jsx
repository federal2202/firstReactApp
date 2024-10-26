import React, { createElement } from "react"

// export default function IntroSection() {
//     return (
//         <section>
//             <h1 className="centered">Result University</h1>
//             <h3 className="centered" style={{ color: '#666' }}>Front-end development university</h3>
//         </section>
//     )
// }

const e  = React.createElement;


export default function IntroSection() {
    return e('section', null, [
        e('h1', {className: 'centered', key: 1}, "Result University"), 
        e('h3', {className: 'centered', style: {color: '#666'}, key: 2}, "Front-end development university")
    ])

}