import * as React from 'react'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import { StaticImage } from "gatsby-plugin-image"
// import personpic from '../images/personpic.jpg'

const  Header=()=>{
    return(
        <div>
         <StaticImage src="../images/personpic.jpg" alt="person"  width={700}
          height={1000} />
           <h1>Shriya</h1>
           <span><BiDotsVerticalRounded /></span>
        </div>
    )
}
export default Header;