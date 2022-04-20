import React, {Component} from 'react';
import ServiceItem from './common/ServiceItem';

class Services extends Component{
  items = [
    {icon: "fa-shopping-cart", title: "E-Commerce", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
    {icon: "fa-laptop", title: "Responsive Design", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
    {icon: "fa-lock", title: "Web Security", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
  ]

  render(){
    return(
      <>
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row text-center">
                  {this.items.map( (item, key) => {
                    return <ServiceItem {...item} key={key} />
                  })}
                </div>
            </div>
        </section>
      </>
    )
  }
}

export default Services;

