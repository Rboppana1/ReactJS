import React,{Component} from 'react';
import Image from 'react-image-resizer';
import barchart from "./Barchart.PNG"

class Barchart extends Component { 
  render(){
    return (<div>
      <Image img src = {barchart} alt = "Logo" 
      height={700}
      width={600}
      className = "center"
      /></div>
    );
  }}

export default Barchart;
