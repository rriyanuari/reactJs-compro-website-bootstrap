import React, {Component} from "react";
import TeamItem from "./common/TeamItem";

import ImgTeam1 from "../../img/team/1.jpg"
import ImgTeam2 from "../../img/team/2.jpg"
import ImgTeam3 from "../../img/team/3.jpg"

class Team extends Component{
  persons = [
    {id: 1, img: ImgTeam1, name: 'Parveen Anand', position: 'Lead Engineer'},
    {id: 2, img: ImgTeam2, name: 'Diana Petersen', position: 'Lead Marketer'},
    {id: 3, img: ImgTeam3, name: 'Larry Parker', position: 'Lead Developer'},
  ]

  render(){
    return(
      <>
        <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                    {
                      this.persons.map( (person, index) => {
                        return <TeamItem {...person} key={index} />
                      })
                    }
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
      </>
    )
  }
}

export default Team