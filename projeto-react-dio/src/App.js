import {useState, useEffect} from "react"

function App() {
  const [usuario, setUsuario] = useState("");
  const [usuarios, setUsuarios] = useState(["Pablo", "Kleydson", "Deyvson"]);
  const [count, SetCount] = useState(0)
  
  const handleAddUser = ()=>{
    setUsuarios([...usuarios, usuario]);
    setUsuario("");
  }

  useEffect(()=>{
    SetCount(usuarios.length);
  },[usuarios])
  return (
    <div className="App">
      <h1>Hello Dio</h1>
      <h3>Total {count}</h3>
      <div>
        <input value={usuario} onChange={(event)=>setUsuario(event.target.value)} />
      </div>
      <button onClick={handleAddUser}>Adicionar nome</button>
      {usuarios.map((item)=>(
        <p>{item}, </p>
      ))}

      <h2>Tentando sozinho</h2>
      <div>
        <input value={usuario} onChange={(e)=> setUsuario(e.target.value)} />
      </div>
      <button onClick={handleAddUser}>aprendendo</button>
      {usuarios.map((item)=> 
      <p>{item}, </p>
    )}

    </div>
  );
}

export default App;
