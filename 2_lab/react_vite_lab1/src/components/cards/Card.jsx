import './card.css';

export default function Card({ image, date, title, text }) {
    return (
        <div class="card">
            <div class="card-container">
                <div className="conteiner-image">
                    <img src={image} alt="img" />
                </div>
                <div>
                    {date && (<h4>{date}</h4>)}           
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}