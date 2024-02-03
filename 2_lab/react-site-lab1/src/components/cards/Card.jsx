import './card.css';

export default function Card({ image, title, text }) {
    return (
        <div class="card">
            <div class="card-container">
                <img src={image} alt="img" />
                    
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
}