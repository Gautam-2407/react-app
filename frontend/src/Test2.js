import React, {useState} from 'react'
import { phoneValidation } from './services/apis';
 import { useNavigate } from 'react-router-dom';


function Test2() {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [contact, setcontact] = useState("")
           const navigate=useNavigate();
          
           const handleclick= async (e)=>{
            e.preventDefault();
             console.log("button is working");
            try{
                const response = await phoneValidation(username);
                console.log(response);
                if(response){
                    sessionStorage.setItem('key', response.token);
                  console.log("vallied successfully" );
                  navigate("/Test2");
                }
                else{
                    console.log("invalid user");
                }
           }
        catch(error){
            console.log("error");
        }};
  return (
    <div>
      <input type="text" name="username" placeholder="Username" value={username} onChange={(e)=>setusername(e.target.value)} />
      <input type="email" name="email" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} />
       <input type="tel" name="contact" placeholder="Contact" max-length={10} value={contact} onChange={(e)=>setcontact(e.target.value)} />
      <input type="submit" value="submit"  onClick={handleclick}/>
    </div>
  )
}

export default Test2
