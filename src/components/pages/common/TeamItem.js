import React, {Component} from "react";

class TeamItem extends Component{
  render(){
    return(
      <>
        <div class="col-lg-4">
            <div class="team-member">
                <img class="mx-auto rounded-circle" src={this.props.img} alt="..." />
                <h4>{this.props.name}</h4>
                <p class="text-muted">{this.props.position}</p>
                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label={`${this.props.name} Twitter Profile`}><i class="fab fa-twitter"></i></a>
                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label={`${this.props.name} Facebook Profile`}><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label={`${this.props.name} Linkedin Profile`}><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
      </>
    )
  }
}

export default TeamItem