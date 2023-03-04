import React, {PureComponent} from 'react';

// class Pure extends PureComponent{
//     constructor() {
//         super();
//         this.state = {
//             name:'milad',
//         }
//     }
//
//     change = () => {
//         this.setState({
//             name:'milad',
//         })
//     }
//     render() {
//         console.log('rendered')
//         return(
//             <>
//                 <h1>{this.state.name}</h1>
//                 <button onClick={this.change}>change</button>
//             </>
//
//         )
//     }
// }

const Pure = (props) =>{
    console.log(props.name)
    return(
        <>
            <h1>{props.name}</h1>
            <button onClick={props.change}>change</button>
        </>
    )
}

export default React.memo(Pure) ;