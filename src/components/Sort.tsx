import * as React from 'react';
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

export interface ISortProps {
ascClicked?:any,
descClicked?:any,
activeAscIcon:string,
activeDescIcon:string
}

export default class Sort extends React.Component<ISortProps> {
  public render() {
   return (
     <div className="sort">
      <h6>Sort by Real Name</h6>
        <table>
        <tbody>
         <tr>
            <td className={this.props.activeAscIcon} onClick={this.props.ascClicked}><div><FaAngleUp/>  Ascending</div></td>
            <td  className={this.props.activeDescIcon} onClick={this.props.descClicked}><div><FaAngleDown/> Descending</div></td>
        </tr>
        </tbody>
        </table>
      </div>
    );
  }
}
