
import {useState} from 'react'

function GreetCard(){
  const [name,setName] = useState('xxx');
  const [msg,setMsg] = useState('pls. input message!');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(msg);
    genmsg({name,msg});
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) =>setName(e.target.value)} />
      <input value={msg} onChange={(e) =>setMsg(e.target.value)} />
      <button type="submit">Create Card</button>
    </form>
    <p>{name}</p>
    <p>{msg}</p>
    </>
  )
  }

  function genmsg({name,msg}){
    console.log("xxx",name,msg);
    return(<>
    <p>{name}</p>
    </>
    )
  }
export default GreetCard;
