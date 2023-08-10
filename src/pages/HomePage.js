import { json } from 'react-router-dom';
import styles from '../styles/HomePage.module.css'
import axios  from 'axios';
import {useState} from 'react'; 


function HomePage() {
  const [nameUser,   setNameUser] = useState('');
  const [reviews, setReviews] = useState([]);
  window.onload = function() {
  
    async function GetUserReview() {
      try {
        const responseUser = await axios.get('/debug')
         if(responseUser.data.NAME == null) {
           alert('Voce precisa estar logado para continuar')
           window.location.assign("http://localhost:3000");

         }
        const responseReviews = await axios.get('/reviews')
        setNameUser(responseUser.data.NAME)
        setReviews (responseReviews.data);
        
        
        
        
      } catch (error) {
        console.error('Erro durante a requisição:', error.message);
      }
    };
    GetUserReview()
  };


   //End Function GetUserReview

  return (
  <div>
      <div className={styles.ContainerBoxReview}> 
        <h3>Ola,{nameUser}</h3>
           <div>
            <br></br>
            <br></br>
             <h1>Seus Reviews:</h1>
             <br></br>
             
             {reviews.map((review, index) => (
               <div className ={styles.ReviewUserBox} key={index}>
                  <p className ={styles.category}> Name Produto: {review.name_review}</p>
                  <p>category: {review.category}</p>
                  <p>Review: {review.review}</p>
                  <p>Nota: {review.note}</p>
                   <br></br>
                 </div>
             ))}
            
           </div> 
      </div>
   
  </div>
  )
}

export default HomePage;
