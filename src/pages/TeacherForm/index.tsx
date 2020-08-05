import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PegeHeader';
import Textarea from '../../components/Textarea';
import './styles.css';
import Input from '../../components/input';
import warningIcons from '../../assets/images/icons/warning.svg';
import Select from '../../components/Select';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';



function TeacherForm() {
	const history = useHistory();

	const [name, setName] = useState('');
	const [avatar, setAvatar] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [bio, setBio] = useState('');

	const [subject, setSubject] = useState('');
	const [cost, setCost] = useState('');

	const [scheduleItems, setScheduleItems] = useState([
		{ week_day: 0, from: '', to: '' }
	]);

	function addNewScheduleItem() { }

	function handleCreateClass(e:FormEvent){
	   e.preventDefault();
	   api.post('classe',{
		   name,avatar,whatsapp,bio,subject,cost:Number(cost),schedule:scheduleItems
	   }).then(()=>{
		   alert('Cadastro realizado com sucesso!');
		   history.push('/');
	   }).catch(()=>{
		   alert('Erro no cadastro, tente novamente');
	   })
	}

	function setScheduleValue(position:number,field:string,value:string){
		const updateScheduleItems = scheduleItems.map((scheduleItem,index)=>{
			if(index===position){
				return { ...scheduleItem,[field]:value};
			}

			return scheduleItem;
		});

		setScheduleItems(updateScheduleItems);
	}

	return (
		<div className="container" id="page-teacher-form">
			<PageHeader title="Que bom que você quer dar aula."
				description="O primeiro passo é prencher o formulário." />
			<main>
				<form onSubmit={handleCreateClass}>
					<fieldset>
						<legend>Seus dados</legend>
						<Input name="name" label="Nome Completo" value={name} onChange={(e) => { setName(e.target.value) }} />
						<Input name="avatar" label="avatar" value={avatar} onChange={(e) => { setAvatar(e.target.value) }} />
						<Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} />
						<Textarea name="bio" label="Biografia" value={bio} onChange={(e) => { setBio(e.target.value) }} />
					</fieldset>

					<fieldset>
						<legend>Sobre a Aula</legend>
						<Select name="subject" label="Matéria" value={subject} onChange={(e) => { setSubject(e.target.value) }} options={[
							{ value: 'Artes', label: 'Artes' },
							{ value: 'Biologia', label: 'Biologia' }
						]} />
						<Input name="cost" label="Custo por hora" value={cost} onChange={(e) => { setCost(e.target.value) }} />
					</fieldset>
					<fieldset>
						<legend>
							Horários Disponíveis
						<button type="button" onClick={addNewScheduleItem}>+ Novo Horário</button>
						</legend>
						{scheduleItems.map((scheduleItem,index) => {
							return (
								<div key={scheduleItem.week_day} className="schedule-item">
									<Select name="week_day" label="Dia da semana" value={scheduleItem.week_day} onChange={e=>setScheduleValue(index,'week_day',e.target.value)} options={[
										{ value: '0', label: 'Domingo' },
										{ value: '1', label: 'Segunda-feira' },
										{ value: '2', label: 'Terça-feira' },
										{ value: '3', label: 'Quarta-feira' },
										{ value: '4', label: 'Quinta-feira' },
										{ value: '5', label: 'Sexta-feira' },
										{ value: '6', label: 'Sábado' }
									]} />
									<Input name="from" label="Das" type="time" value={scheduleItem.from} onChange={e=>setScheduleValue(index,'from',e.target.value)}></Input>
									<Input name="to" label="Até" type="time" value={scheduleItem.to}  onChange={e=>setScheduleValue(index,'to',e.target.value)}></Input>
								</div>
							)
						})}

					</fieldset>
					<footer>
						<p>
							<img src={warningIcons}></img>
					Importante<br />
					Preencha todos os dados
					</p>
						<button type="submit">
							Salvar cadastro
					</button>
					</footer>
				</form>
			</main>
		</div>
	)
}

export default TeacherForm;