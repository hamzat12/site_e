import logo from './logo.svg';
import './App.css';
import a from './a.png'
import b from './b.png';
import home from './home.png';
import account from './account.png';
import panier from './panier.png';
import aide from './aide.png';
import ch from './ch.jpg';
import e from './e.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {  Link } from "react-router-dom";
function App() {
  return (
    <div className="App"> 
  <Header/> 
    <Dashbord/> 
    
    </div>
  );
}
 export function Article(){
  return(<div className="App"> 
  <Header/> <Dashbord1/> <Footer/> </div>);
}
function Header() {
  return (
    <div className="">   
    <div className='header'>
    <nav>
      <ul className='nb'>
      
        <li className='l'><img src={home} className='logo1'></img><p className='p1'>Home</p></li>
        <li className='l'><img src={account} className='logo1'></img><p className='p1'>se connecter</p></li>
        <li className='l'><img src={panier} className='logo1'></img><p className='p1'>panier</p></li>
        <li className='l'><img src={aide} className='logo1'></img><p className='p1'>aide</p></li>
      </ul>
      <div className='rech'> <img src={a} className='logo'></img><input type='text' className='i' placeholder='chercher un produit'></input><button className='btn'>rechercher</button></div>
      
    </nav></div>
    </div>
  );
}
function Dashbord(){
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
 
  return(
    <body> <div className='hh'>
      <p className='p2'>Nouveautés</p>
      <div className='nou'>   <Slider {...settings}>
      <div>
       <Link to='/article'> <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p></div></Link>
      </div>
      <div >
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p></div>
      </div>
      <div>
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p></div>
      </div>
      <div>
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p></div>
      </div>
      <div>
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p><p className='p3'>- 30 %</p></div>
      </div>
      <div>
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p><p className='p3'>- 30 %</p></div>
      </div>
    </Slider></div>
      
     
      <p className='p4'>les catégories</p>
      <ul className='pag'>
<li className='l1'><img src={e} className='logo3'></img><p className='p3'>telephone & tablettes</p></li>
<li className='l1'><img src={e} className='logo3'></img><p className='p3'>article de sport</p></li>
<li className='l1'><img src={e} className='logo3'></img><p className='p3'>sante & beaute</p></li>
<li className='l1'><img src={e} className='logo3'></img><p className='p3'>electronique</p></li>
<li className='l1'><img src={e} className='logo3'></img><p className='p3'>jeux video & console</p></li>


      </ul>
      <ul className='pag1'>
<li className='l1'><img src={e} className='logo3'></img><p className='p3'>mode </p></li>
<li className='l1'><img src={e} className='logo3'></img><p className='p3'>cuisine & electromenager </p></li>

<li className='l1'><img src={e} className='logo3'></img><p className='p3'>Maison & bureau</p></li>


      </ul>
      <p className='p4'>Nos Meilleures Offres</p>
      
      
      
      <div className='nou'>   <Slider {...settings}>
      <div>
        <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p></div>
      </div>
      <div >
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p></div>
      </div>
      <div>
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p></div>
      </div>
      <div>
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p></div>
      </div>
      <div>
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p><p className='p3'>- 30 %</p></div>
      </div>
      <div>
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p><p className='p3'>- 30 %</p></div>
      </div>
    </Slider></div>
        
     
      <p className='p4'>Les plus demandés</p>
      <div className='nou'>   <Slider {...settings}>
      <div>
        <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p></div>
      </div>
      <div >
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p></div>
      </div>
      <div>
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p></div>
      </div>
      <div>
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p></div>
      </div>
      <div>
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p><p className='p3'>- 30 %</p></div>
      </div>
      <div>
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p><p className='p3'>- 30 %</p></div>
      </div>
    </Slider></div>
      <Footer/></div>
      </body>

  );
}
function Footer() {
  
  
  return (
    <div className="">   
     <div className='footer'><ul className='nou1'>
    
    <li className='cart1'><p className='p6'>BESOIN D'AIDE?</p> <p className='p5'>discuter avec nous</p><p className='p5'>centre d assistance</p><p className='p5'>contacter nous</p></li>
    <li className='cart1'><p className='p6'>A PROPOS</p><p className='p5'> qui sommes nous</p><p className='p5'>carrier</p><p className='p5'>beautiques des marques officielles</p></li>
    <li className='cart1'><p className='p3'>RETROUVEZ-NOUS SUR</p><div className='tel'><img src={e} className='logo3'></img><img src={e} className='logo3'></img><img src={e} className='logo3'></img><img src={e} className='logo3'></img></div></li>
    
    
    
  </ul></div>
  <div className='dr'> <p className='p7'>@ tous les drois reserver pour dme4 </p>
</div>
  
    </div>
  );
}
function Dashbord1(){
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  var settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return(
    <div>
      <div className='gbloc'><div className='bloc'> <Slider {...settings}><img src={ch} className='logo5'></img><img src={ch} className='logo5'></img></Slider></div> <div className='cart2'><p className='p11'>Chemise pour Garçon</p> <p className='p5'>more detailles</p> <p className='p5'>more detailles</p><p className='p5'>more detailles</p> <button className='btn1'>ajouter au panier</button></div></div>
      <p className='p4'>Autre article</p>
      <div className='nou'>   <Slider {...settings1}>
      <div>
        <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p></div>
      </div>
      <div >
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p></div>
      </div>
      <div>
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p></div>
      </div>
      <div>
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p></div>
      </div>
      <div>
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p><p className='p3'>- 30 %</p></div>
      </div>
      <div>
      <div className='cart'><img src={ch} className='logo2'></img><p className='p3'>Chemise pour Garçon <br/> 120 dt</p><p className='p3'>- 30 %</p></div>
      </div>
    </Slider></div>
    </div>

  );

  
}

export default App;
