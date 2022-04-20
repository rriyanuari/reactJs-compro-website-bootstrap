import React, {Component} from "react";

export default class Header extends Component{

  render(){
    return(
      <>
          <header className="masthead" style={{backgroundImage: `url(${this.props.img})`}} >
            <div className="container">
                <div className="masthead-subheading">{this.props.title}</div>
                <div className="masthead-heading text-uppercase">{this.props.subtitle}</div>
                {this.props.isButton && 
                  <a className="btn btn-primary btn-xl text-uppercase" href="#services">{this.props.textButton}</a>
                }
            </div>
        </header>
      </>
    )
  }
}