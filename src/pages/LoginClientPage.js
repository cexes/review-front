import styles from '../styles/LoginClient.module.css'
import React from 'react'
function LoginPage() {
 return (
   <div className={styles.Container}>
       <h3> Opine aqui! </h3>
      <div className={styles.BoxLogin}>
        <div className={styles.FormLogin}>
        <form>
            <input type='email' placeholder = "EMAIL"></input>
            <br/> <br/>
            <input type='password' placeholder = "SENHA"></input>
            <br/> <br/>
            <input type="submit" value="Enviar" />  

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
