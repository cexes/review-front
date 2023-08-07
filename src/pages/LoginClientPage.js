import styles from '../styles/LoginClient.module.css'
import React from 'react'
import axios  from 'axios';
import {useState} from 'react'; 

function LoginPage() {

  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const HandleEmail = (e) => {setEmail(e.target.value)};
  const HandlePass = (e) => {setPassword(e.target.value)};
  const SendFormValues = async (e) => { e.preventDefault(); 
  try {
      const response = await axios.post('login', { email, pass })
       if(response.date = true) {
        window.location.assign("http://localhost:3000/home");
       }
    } catch (error) {
      console.error('Erro durante a requisição:', error.message);
    }
  };

  

 return (
   <div className={styles.Container}>
       <h3> Opine aqui! </h3>
      <div className={styles.BoxLogin}>
        <div className={styles.FormLogin}>
        <form onSubmit ={SendFormValues} >
            <input type='email' onChange = {HandleEmail} placeholder = "EMAIL"></input>
            <br/> <br/>
            <input type='password' onChange = {HandlePass} placeholder = "SENHA"></input>
            <br/> <br/>
            <input type="submit" value="Entrar" />  

         </form>
          <br/> <br/> 
          <p> Ainda não possui cadastro? </p>
          <a href="/">Cadastre-se aqui</a>
        </div>
      </div>
   </div>
 );
};

export default LoginPage;
