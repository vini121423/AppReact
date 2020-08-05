import React from 'react';
import './styles.css';
import wppIcon from '../../images/icons/whatsapp.svg';


export interface Teacher{
        id:number;
        avatar:string;
        bio:string;
        cost:number;
        name:string;
        subject:string;
        whatsapp:string;
      
}
interface TeacherItemProps{
    teacher:Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> =({teacher})=>{
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar}></img>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>{teacher.bio}</p>
            <footer>
                <p>
                    Preço/Hora <strong>{teacher.cost}</strong></p>
                <a href={`https://wa.me/${teacher.whatsapp}`}><img src={wppIcon}></img>Entrar em contato</a>
            </footer>
        </article>
    );
}

export default TeacherItem;