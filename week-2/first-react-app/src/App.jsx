import Header from "./components/Header"
import CardComponent from "./components/cardComponent";
function App() {
  const customer = {
    name : "Berktug",
    surname : "Ates",
    age : 22
  }
  return(
    <div>
      <Header/>
      <CardComponent
        name = {customer.name}
        surname = {customer.surname}
        age = {customer.age}
      />
    </div>
   
  )
  
}

export default App
