import React, {Component} from 'react';
import Services from './Services';
import Header from './common/Header';
import ImgBackground from '../../img/header-bg.jpg'
import Portofolio from './Portofolio';

class Home extends Component{
  render(){
    return(
      <>
        <Header 
          img={ImgBackground}
          title="Welcome To Our Studio!" 
          subtitle="It's Nice To Meet You"
          isButton={true}
          textButton="Tell Me More"
        />
        <Services />
        <Portofolio />
      </>
    )
  }
}

export default Home;

