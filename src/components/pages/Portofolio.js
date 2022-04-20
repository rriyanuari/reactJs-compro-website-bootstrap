import React, {Component} from "react";
import PortofolioItem from "./common/PortofolioItem";

import ImgPortofolio1 from '../../img/portfolio/1.jpg'
import ImgPortofolio2 from '../../img/portfolio/2.jpg'
import ImgPortofolio3 from '../../img/portfolio/3.jpg'
import ImgPortofolio4 from '../../img/portfolio/4.jpg'
import ImgPortofolio5 from '../../img/portfolio/5.jpg'
import ImgPortofolio6 from '../../img/portfolio/6.jpg'

class Portofolio extends Component{
  portofolios = [
    {
      id: 1, 
      img: ImgPortofolio1, 
      client: 'Threads', 
      category: 'Illustration', 
      name: 'Project 1', 
      intro: 'Lorem ipsum dolor sit amet consectetur.', 
      description: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'  
    },
    {
      id: 2, 
      img: ImgPortofolio2, 
      client: 'Explore', 
      category: 'Graphic Desain', 
      name: 'Project 2', 
      intro: 'Lorem ipsum dolor sit amet consectetur.', 
      description: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'  
    },
    {
      id: 3, 
      img: ImgPortofolio3, 
      client: 'Finish', 
      category: 'Identity', 
      name: 'Project 3', 
      intro: 'Lorem ipsum dolor sit amet consectetur.', 
      description: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'  
    },
    {
      id: 4, 
      img: ImgPortofolio4, 
      client: 'Lines', 
      category: 'Branding', 
      name: 'Project 4', 
      intro: 'Lorem ipsum dolor sit amet consectetur.', 
      description: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'  
    },
    {
      id: 5, 
      img: ImgPortofolio5, 
      client: 'Southwest', 
      category: 'Website Design', 
      name: 'Project 5', 
      intro: 'Lorem ipsum dolor sit amet consectetur.', 
      description: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'  
    },
    {
      id: 6, 
      img: ImgPortofolio6, 
      client: 'Window', 
      category: 'Photography', 
      name: 'Project 6', 
      intro: 'Lorem ipsum dolor sit amet consectetur.', 
      description: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'  
    },
  ]  

  render(){
    return(
      <>
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                  {
                    this.portofolios.map( (portofolio, index) => {
                      return <PortofolioItem {...portofolio} key={index} />
                    })
                  }
                </div>
            </div>
        </section>
      </>
    )
  }
}

export default Portofolio