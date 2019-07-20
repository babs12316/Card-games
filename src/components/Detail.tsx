import * as React from 'react';
import '../css/App.css'
import cardData from '../CardData.json'
import Real_name from '../images/Real_user.png'
import Player_name from '../images/Player_name.png'
import Asset from '../images/Asset.png'

export interface IDetailProps {
    id?:number,
}
export interface IDetailState{ 
  cardData:any,
 }

export default class Detail extends React.Component<IDetailProps, IDetailState> {
  state: Readonly<IDetailState> = {
       cardData:cardData,
   }
  
 handleSubmit = (e:any) => {
  e.preventDefault();
    let clicked_Id= this.props.id===0 ? 1 : this.props.id;
    let clicked_Card = this.state.cardData.filter( (card:any) => card.id === clicked_Id)[0];
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          playerName: clicked_Card.Player_Name,
          realName: clicked_Card.Real_Name,
          Asset: clicked_Card.Asset
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })//Json response to backend
      .then(response => response.json())
      .then(json => console.log(json));
      alert("Data submited to backend in Json format. Check out console to see submitted data");
}
public render() {
   let id= this.props.id===0 ? 1 : this.props.id;
   // eslint-disable-next-line
   let card = this.state.cardData.filter( (card:any) => card.id == id)[0];
   return (
        <React.Fragment>
          <form onSubmit={this.handleSubmit}>
          <h1>Detail View</h1>
         <table>
           <thead>
              <tr>
                <th></th>
                <th>Real Name</th>
                <th></th>
                <th>Player Name</th>
                <th></th>
                <th>Asset</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><img src={Real_name}  title="Real Name" alt="Real Name"/></td>
                <td>{card.Real_Name}</td>
                <td><img src={Player_name} title="Player Name" alt="Player Name"/></td>
                <td>{card.Player_Name}</td>
                <td><img src={Asset} title="Real Name" alt="Real Name"/></td>
                <td>{card.Asset}</td>
              </tr>
              </tbody>
         </table>
         <button>Submit</button>
          </form>
         
    </React.Fragment>
        )
   }
      
}
