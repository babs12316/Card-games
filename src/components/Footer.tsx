 // eslint-disable-next-line
import React, { Component } from 'react';

export interface IFooterProps {
    year:number
}

export default class Footer extends React.Component<IFooterProps, any> {
  public render() {
    return (
            <div>
                   <nav className="navbar navbar-dark bg-dark">
                    <h2 className="navbar-brand"> Copyright@{this.props.year} Deepak Babhale</h2>
                   </nav>
            </div>
        );
  }
}
