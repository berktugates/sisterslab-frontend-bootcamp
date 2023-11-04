import Header from "./components/Header"
import CardComponent from "./components/cardComponent";
function App() {
  const customers = [
    {
      name : "Berktug",
      surname : "Ates",
      age : 22
    },
    {
      name : "Zehra",
      surname : "Soykan",
      age : 21
    },
    {
      name : "Sergen",
      surname : "Yalçın",
      age : 50
    }
  ]
  return(
    <div>
        <Header/>
        <div className="flex mx-auto gap-4">
          <CardComponent
            name = {customers[0].name}
            surname = {customers[0].surname}
            age = {customers[0].age}
          />
          <CardComponent
            name = {customers[1].name}
            surname = {customers[1].surname}
            age = {customers[1].age}
          />
          <CardComponent
            name = {customers[2].name}
            surname = {customers[2].surname}
            age = {customers[2].age}
          />
        </div>
    </div>
   
  )
  
}
export default App