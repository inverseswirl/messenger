import * as React from 'react'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {IoVideocamOutline,IoCallOutline} from 'react-icons/io5'
import { StaticImage } from "gatsby-plugin-image"
// import personpic from '../images/personpic.jpg'

class  Header extends React.Component{
  constructor(props){
      super(props)
  }





render(){
    return(
      
        <div className="header">
            <div className="header-left">
            <span className="header-left-videocam"><IoVideocamOutline size={30}/></span>
            <span className="header-left-phonecall">< IoCallOutline size={30}/></span>
            </div>
         <StaticImage className="header-pic" src="../images/personpic.jpg" alt="person"  />
           <h1 className="header-name">Chat Person1</h1>
           <span className="header-menu" ><BiDotsVerticalRounded size={40}/></span>
        </div>

     

      
    )
}
}
export default Header;