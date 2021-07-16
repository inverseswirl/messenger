import * as React from 'react';
import {GrChat} from 'react-icons/gr'

class Message extends React.Component{
constructor(props){
    super(props)
this.handleEnter=this.handleEnter.bind(this);
}

handleEnter(e){
    console.log(e)
}
render(){
    return (
        <div className="message">
            <span><GrChat size={25}/></span>
            <input className="message-box" 
            placeholder="Type here"
           
            // maxLength= '10'
           
             onKeyPress=  {this.handleEnter}
            />

        </div>
    )
}
}
export default Message;
