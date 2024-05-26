


const word = "React"


function sum(a,b) {
  return a+b
}

export default function App() {
  return(
    <div>
      <h1>Hello World</h1>
      <h2>{word} is awesome!</h2>
      <h3>A soma de 5+5 é {sum(5,5)}</h3>
    </div>
  )
}