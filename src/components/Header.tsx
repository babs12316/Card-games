 // eslint-disable-next-line
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import card from '../images/card.png'
export interface IHeaderProps {
    userName:string
}

export default class Header extends React.Component<IHeaderProps, any> {
  public render() {
   return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/App.tsx">
              <img src={card} width="50" height="50" className="d-inline-block align-top" alt=""/>
                 <span className="title">Card Games</span> 
            </a>
            <h2 className="navbar-brand">Hello {this.props.userName} </h2>
       </nav>
    </div>
    );
  }
}
