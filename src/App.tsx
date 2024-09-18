import './App.css'

function App() {
  const user = {name: "Artem", age: 26, birthday: "18 october", profession: "electrician("};

  return (
    <div>
      <h1>Hello, {user.name}</h1>
      <p>Your age: {user.age}</p>
      <p>Your birthday: {user.birthday}</p>
      <p>Your profession: {user.profession}</p>
    </div>
  )
}

export default App
