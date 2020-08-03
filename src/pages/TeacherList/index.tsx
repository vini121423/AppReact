import React from 'react';
import wppIcon from '../../images/icons/whatsapp.svg';
import PageHeader from '../../components/PegeHeader';



function TeacherList(){
	return(
	  <div className="container" id="page-teacher-list">
		  <PageHeader title="Estes são os Proffy disponiveis.">
			  <form id="search-teachers">
                <div className="input-block">
					<label htmlFor="subject">
						Matéria
					</label>
					<input type="text" id="subject"></input>
				</div>
				<div className="input-block">
				    <label htmlFor="week_day">
						Dia da Semana
			     	</label>
					 <input type="text" id="week_day"></input>
				</div>
				<div className="input-block">
				     <label htmlFor="time">
						Hora
					 </label>
					 <input type="text" id="time"></input>
				</div>
			  </form>
		  </PageHeader>
		  <main>
			  <article className="teacher-item">
                  <header>
					  <img src=""></img>
					  <div>
						  <strong>Professor</strong>
						  <span>Matemática</span>
					  </div>
				  </header>
				  <p>Professor a mais de 80 anos</p>
			  </article>
			  <footer>
                 Preço/Hora <strong>RS100,00</strong>
				 <button type="button"><img src={wppIcon}></img>Entrar em contato</button>
			  </footer>
		  </main>

	  </div>
	);
}
export default TeacherList;

