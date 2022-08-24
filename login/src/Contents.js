import React,{Component} from 'react';

class Contents extends Component {
  render(){
  return (
    <div><h1>TABLE</h1>
    <table align="center" >
  <tr>
  <th>S.No</th>
    <th>STORE</th>
    <th>Registration number</th>
    <th>STATUS</th>
  </tr>
  <tr>
    <td align="center">1</td>
    <td align="center">WM</td>
    <td align="center">12345</td>
    <td align="center">Pass</td>
  </tr>
  <tr>
    <td align="center">2</td>
    <td align="center">WM</td>
    <td align="center">654667</td>
    <td align="center">Pass</td>
  </tr>
  <tr>
    <td align="center">3</td>
    <td align="center">SM</td>
    <td align="center">254678</td>
    <td align="center">Fail</td>
  </tr>
  <tr>
    <td align="center">4</td>
    <td align="center">WM</td>
    <td align="center">546788</td>
    <td align="center">Pass</td>
  </tr>
  <tr>
    <td align="center">5</td>
    <td align="center">WM</td>
    <td align="center">890765</td>
    <td align="center">Fail</td>
  </tr>
  <tr>
    <td align="center">6</td>
    <td align="center">WM</td>
    <td align="center">875678</td>
    <td align="center">Pass</td>
  </tr>
</table></div>
  );
}}

export default Contents;
