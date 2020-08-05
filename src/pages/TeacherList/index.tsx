import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PegeHeader';
import Input from '../../components/input';
import Select from '../../components/Select';
import api from '../../services/api';
import TeacherItem,{Teacher} from '../../components/TeacherItem';



function TeacherList() {
	
	const [teachers, setTeachers] = useState([]);


	const [subject, setSubject] = useState('');
	const [week_day, setWeekDay] = useState('');
	const [time, setTime] = useState('');

	async function searchTeachers(e: FormEvent) {
		e.preventDefault();
		const response = await api.get('classes', {
			params: {
				subject,
				week_day,
				time,
			}
		});


	}

	return (
		<div className="container" id="page-teacher-list">
			<PageHeader title="Estes são os Proffy disponiveis.">
				<form id="search-teachers" onSubmit={searchTeachers}>
					<Select name="subject" label="Matéria" value={subject} onChange={(e) => { setSubject(e.target.value) }} options={[
						{ value: 'Artes', label: 'Artes' },
						{ value: 'Biologia', label: 'Biologia' }
					]} />
					<Select name="week_day" label="Dia da semana" value={week_day} onChange={(e) => { setWeekDay(e.target.value) }} options={[
						{ value: '0', label: 'Domingo' },
						{ value: '1', label: 'Segunda-feira' },
						{ value: '2', label: 'Terça-feira' },
						{ value: '3', label: 'Quarta-feira' },
						{ value: '4', label: 'Quinta-feira' },
						{ value: '5', label: 'Sexta-feira' },
						{ value: '6', label: 'Sábado' }
					]} />
					<Input type="time" name="time" label="Hora" value={time} onChange={(e) => { setTime(e.target.value) }} />
					<button type="submit">Buscar</button>
				</form>
			</PageHeader>
			<main>
				{teachers.map((teacher:Teacher) =>{
					return  <TeacherItem key={teacher.id} teacher={teacher}/>
				})}
			</main>

		</div>
	);
}
export default TeacherList;

