import { useState , useEffect } from "react"

const Card = ({title})=>{
  const [hasLiked, setHasLiked] = useState(false);
  const [count,setCount] = useState(0);

  useEffect(()=>{
    console.log(`${title} has been liked : ${hasLiked}`)
  }, [hasLiked])

  return(
    <div className="card" onClick={()=>setCount(count+1)}>
      <h2>{title} <br /> {count}</h2>
      <button onClick={()=>{
        setHasLiked(!hasLiked );}}>
          {hasLiked ? '😂' : '🫠'}
      </button>
    </div>
  )
}
 const App = () => {
   return(
     <div className="card-countainer">
        <h1>App Component</h1>
        <Card title = "lili"/>
        <Card title = "avatar"/>
        <Card title = "king kong"/>
        
     </div>
   )
  
}




export default App