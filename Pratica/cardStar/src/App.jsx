import Cards from '../components/cards'
import posterimg from '../assets/star.jpg'
import posterimg2 from '../assets/star2.jpg'
import posterimg3 from '../assets/star3.jpg'


export default function App(){
  return (
    <div className="app">
      <Cards
       title="Pôster: Star Wars (1977)"
       img={posterimg}           
       />
      <Cards
       title="Pôster: Empire Strikes Back (1980)"
       img={posterimg2}          
       />
      <Cards
       title="Pôster: Return of the Jedi (1983)"
       img={posterimg3}           
        />
    </div>
  )
} 