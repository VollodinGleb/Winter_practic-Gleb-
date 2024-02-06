import { Children } from 'react';
import './card.css';

export default function Card({ image, date, title, text, children }) {
    return (
        <div class="card">
            <div class="card-container">
                <div className="conteiner-image">
                    <img src={image} alt="img" />
                </div>
                <div className="card-description">
                    {date && (<h4>{date}</h4>)}           
                    <h3>{title}</h3>
                    <p>{text}</p>
                    
                    {children}

                </div>
            </div>
        </div>
    );
}