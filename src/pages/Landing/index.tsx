import React,{ useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import api from '../../services/api';


import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function Landing(){
	const [totalConnections, setTotalConnections] = useState(0);
    useEffect(()=> {
		api.get('/connections').then(response=>{
			const {total} = response.data;
			setTotalConnections(total);
		})
	},[]);

    return (
     <div id="page-landing">
		 <div id="page-landing-content" className="container">
            <div className="logo-container">
               <img src={logoImg}></img>
			   <h2>Sua plataforma de estudos!</h2>
			</div>
			<img src={landingImg} className="hero-image"></img>
		 </div>

		 <div className="buttons-container">
			 <Link to="/study" className="study">
               <img src={studyIcon}></img>
               Estudar
			 </Link>
			 <Link to="/give-classes" className="give-classes">
				 <img src={giveClassesIcon}></img>
				 Ensinar
			 </Link>
		 </div>
		 <span className="total-connections">Total de {totalConnections} conexões <img src={purpleHeartIcon}></img></span>
	 </div>
	);
	}
    export default Landing;