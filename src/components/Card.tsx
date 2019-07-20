import * as React from 'react';
import Real_name from '../images/Real_user.png'
import Player_name from '../images/Player_name.png'
import Asset from '../images/Asset.png'

export interface ICardProps {
    id:number,
    Real_Name:string,
    Player_Name:string,
    Asset:string,
    handleCardClick?:any
}

export default class Card extends React.Component<ICardProps> {
 public render() {
   return (
      <React.Fragment>
        <div className="card"  onClick={() => this.props.handleCardClick(this.props.id)} title="Click on card to see detail view" >
        <div className="overflow-ellipsis"><span><img src={Real_name} title="Real Name" alt="Real Name"/></span><span>{this.props.Real_Name}</span></div>
        <div className="overflow-ellipsis"><span><img src={Player_name} title="Player Name" alt="Player Name"/></span><span>{this.props.Player_Name}</span></div>
        <div className="overflow-ellipsis"><span><img src={Asset} title="Real Name" alt="Real Name"/></span><span>{this.props.Asset}</span></div></div>
      </React.Fragment>
    );
  }
}
