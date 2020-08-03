import React from 'react';
import logoImg from '../../images/icons/logo.svg';
import backIcon from '../../images/icons/back.svg';
import './styles.css';
import { Link } from 'react-router-dom';


interface PageHeaderProps{
	  title:string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) =>{
	return (
	  <header className="page-header">
          <div className="top-bar-container">
             <Link to="/"><img src={backIcon}></img></Link>
			 <img src={logoImg}></img>
		  </div>
		  <div className="header-content">
	        <strong>{props.title}</strong>
		  </div>
		  {props.children}
	  </header>
	);
}

export default PageHeader;