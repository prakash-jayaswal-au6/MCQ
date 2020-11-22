import React from 'react'
import Answer from './Answer'
function Answers(props) {
    return (
        <div>
            <Answer
                letter="A"
                answer={props.question.options[0]}
                selected={props.currentAnswer == props.question.options[0]}
                handleClick ={props.handleClick}
            />
            <Answer
                letter="B"
                answer={props.question.options[1]}
                selected={props.currentAnswer == props.question.options[1]}
                handleClick ={props.handleClick}

            />
            <Answer
                letter="C"
                answer={props.question.options[2]}
                selected={props.currentAnswer == props.question.options[2]}
                handleClick ={props.handleClick}

            />
            <Answer
                letter="D"
                answer={props.question.options[3]}
                selected={props.currentAnswer == props.question.options[3]}
                handleClick ={props.handleClick}
            />
        </div>
    )
}

export default Answers
