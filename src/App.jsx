// import { useState } from "react"

// const App = () => {
//   const [time, settime] = useState(new Date().toLocaleTimeString())
   

//   setInterval(() =>{
//     settime(new Date().toLocaleTimeString());
//   }, 1000);
//   return (
//     <div>
//       <h1>{time}</h1>
//     </div>
//   )
// }

// export default App
















import  { useState } from 'react'

const App = () => {

  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")

  const submitHandler = (e) =>{
    e.preventDefault ();
    console.log({username, password})
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="username" onChange={(e) => setusername(e.target.value)} value={username} />
        <input type="text" placeholder="password" onChange={(e) => setpassword(e.target.value)} value={password} />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App

