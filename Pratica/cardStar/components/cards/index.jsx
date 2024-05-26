
import "../../styles/cards.css"

export default function Cards(props){
    return(
        <div className='container'>
            <img className='poster' src={props.img} alt="" />
            <div>
                <h2 className='title'>{props.title}</h2>
                <p>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
                <button className='botao'>Comprar agora</button>
            </div>
        </div>
    )
}