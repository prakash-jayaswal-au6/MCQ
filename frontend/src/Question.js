import React,{useEffect,useState} from 'react';
import './Question.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import axios from 'axios'

function Question() {
  const [questionsArray, setQuestionsArray] = useState([]);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState(0);

  useEffect(() => {    
      axios.get('http://localhost:8080/api/questions/')
      .then(function (response) {
        // handle success
        setQuestionsArray(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }, [])

  
    return (
      <div className='box'>
        <h2>Question</h2>
        <button>option</button>
        <button>option</button>
        <button>option</button>
        <button>option</button>
      </div>
    )
}

export default Question





  
{/* // the functon displays the link to the correct answer
  function showCorrectAnswer1() {
    let showAnswer1 = document.createElement('p')
    showAnswer1.innerHTML = 'Show Corrent Answer'
    showAnswer1.style.position = 'relative'
    showAnswer1.style.top = '-180px'
    showAnswer1.style.fontSize = '1.75rem'
    document.getElementById('showanswer1').appendChild(showAnswer1)
    showAnswer1.addEventListener('click', () => {
      document.getElementById('block_1').style.border = '3px solid limegreen'
      document.getElementById('result-11').style.color = 'limegreen'
      document.getElementById('result-11').innerHTML = 'Correct!'
      document.getElementById('showanswer1').removeChild(showAnswer1)
    })
  }
</script> */}