 // eslint-disable-next-line
import React, { Component } from 'react'
import '../css/App.css'
import "bootstrap/dist/css/bootstrap.css"
import Detail from './Detail'
import Sort from './Sort'
import Card from './Card'
import cardData from '../CardData.json'
import { IoIosCloseCircle } from "react-icons/io"
let sortJsonArray = require("sort-json-array")

export interface ICardProps {
    cardId?:number;
}
export interface ICardState{ 
    cardData:any,
    clickedCard:number,
    cardClickedAlert:boolean,
    activeAsc:string,
    activeDesc:string
}

export default class Cards extends React.Component<ICardProps, ICardState> {
    state: Readonly<ICardState> = {
        cardData:cardData,
        clickedCard:0,
        cardClickedAlert:false,
        activeAsc:'',
        activeDesc:''
     };
     handleCardClick = (id:number) =>{
       let currentState = this.state.cardClickedAlert;
       this.setState({
         clickedCard:id,
         cardClickedAlert:!currentState
      })
  }
    handleOpenDetails = () =>{
              this.setState({  cardClickedAlert:true}); 
    }
    handleCloseDetails= () =>{
        this.setState({  cardClickedAlert:false}); 
      }
   handleAscClick = () =>{
    // let active=this.state.activeAsc;
        this.setState({
           cardData:sortJsonArray(this.state.cardData, 'Real_Name','asc'),
           activeAsc:'activeAsc',
           activeDesc:''
       })
    }
    handleDescClick = () =>{
         this.setState({
           cardData:sortJsonArray(this.state.cardData, 'Real_Name','des'),
            activeAsc:'',
           activeDesc:'activeDesc'
          })
    }
   public render() {
        let className= this.state.cardClickedAlert===true ? 'detailview flip-horizontal-bottom container' : 'hidedetailview';
         return ( 
              <div className="container" >
                <Sort
                 ascClicked={this.handleAscClick}
                  activeAscIcon={this.state.activeAsc} 
                  descClicked={this.handleDescClick}
                  activeDescIcon={this.state.activeDesc}/>
                <div className={className} onClick={() => this.handleOpenDetails}><Detail id={this.state.clickedCard}/> <IoIosCloseCircle id="close" onClick={this.handleCloseDetails}/></div>
                 {this.state.cardData.map((value:any, index:any) => {
                 return(
                  <div key={value.id}>
                        <Card id={value.id}
                            Real_Name={value.Real_Name}
                            Player_Name={value.Player_Name}
                            Asset={value.Asset}
                            handleCardClick={this.handleCardClick} />              
                          </div>
                        )
                 })} 
            </div> 
         );
      }
    }
