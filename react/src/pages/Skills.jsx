import { Component } from "react";

// class Skills extends Component {
//     render(){
//         return (
//             <div>Skills</div>
//         )
//     }
// }
// export default Skills

const Skills = () =>{
    const user = {name: 'Pooja', phn: '9873827489'};
    return (
        <div>
            <h1>{user.name}</h1>
            <h1>{user.phn}</h1>
        </div>
    )
}
export default Skills