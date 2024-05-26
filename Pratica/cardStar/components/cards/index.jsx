
import posterimg from '../../assets/star.jpg'
import "../../styles/cards.css"

export default function Cards(){
    return(
        <div className='container'>
            <img className='poster' src={posterimg} alt="" />
            <div>
                <h2 className='title'>Poster: Star Wards</h2>
                <p>Texto do poster</p>
                <button className='botao'>Comprar agora</button>
            </div>
        </div>
    )
}