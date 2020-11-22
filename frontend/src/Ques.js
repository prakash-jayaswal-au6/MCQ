import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Progress from './components/Progress';
import Question from './components/Question';
import Answers from './components/Answers';
import './Ques.css'
// import { restart } from 'nodemon';
function Ques() {
    
    const [questionsArray, setQuestionsArray] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [answers, setAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [error, setError] = useState('');
    
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
  
    const question = questionsArray[currentQuestion]
    //  console.log(question)
    const handleClick = e => {
        setCurrentAnswer(e.target.value);
        setError('');
    }

    const renderError = () => {
        if (!error) {
            return;
        }
        return <div className='error'>{ error}</div>
    }

    const renderResultMarks = (question ,ans) => {
        if (question.answer === ans.answer) {
            return <span className="correct">Correct</span>
        }
        return <span className="failed">Failed</span>
    }
    const renderResultsData = () => {
        return answers.map(answer => {
            const question = questionsArray.find(question =>
                question._id === answer.questionId
            );
            return (
                <div key={question._id}>
                    {question.question} - {renderResultMarks(question,answer)}
                </div>
            )
        })
    }

    const restart = () => {
        setAnswers([]);
        setCurrentAnswer('');
        setCurrentQuestion(0);
        setShowResults(false)
    }
    const next = () => {
        const answer = { questionId: question._id, answer: currentAnswer };
        if (!currentAnswer) {
            setError('Please select an option ');
            return;
        }
        answers.push(answer);
        setAnswers(answers);
        setCurrentAnswer('');

        if (currentQuestion + 1 < questionsArray.length) {
            setCurrentQuestion(currentQuestion + 1);
            return;
        }
        setShowResults(true);
    }


    if (showResults) {
        return (
            <div className="container results">
                <h2>Results</h2>
                <ul>{renderResultsData()}</ul>
                <button className="btn btn-primary" onClick={restart}>Restart
                        </button>
            </div>
        )
    } else {
    return (
        <div className='container'>
            {questionsArray.length > 0 ?
                (
                    <>
                        <Progress total={questionsArray.length} current={currentQuestion+1} />
                        <Question question={question.question} />
                        {renderError()}
                        <Answers question={question} currentAnswer={currentAnswer} handleClick={ handleClick}/>
                        <button className="btn btn-primary" onClick={next}>Confirm and Continue
                        </button>
                    </>
                ) : (
                    <h2>Loading...</h2>
            )}
        </div>
    )
}}

export default Ques
