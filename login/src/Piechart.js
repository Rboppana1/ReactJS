import React,{Component} from 'react';
import Image from 'react-image-resizer';
import piechart from "./Piechart.PNG"

class Piechart extends Component { 
  render(){
  return (<div>
    <Image img src = {piechart} alt = "Logo" 
    height={700}
    width={600}
    className = "center"
    /></div>
  );
}}

export default Piechart;
