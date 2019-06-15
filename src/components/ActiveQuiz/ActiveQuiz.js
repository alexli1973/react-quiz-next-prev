import React from 'react';
import AnswersList from "./AnswersList/AnswersList";

// const ActiveQuiz = props => (
//     <div className='ActiveQuiz'>
//         <p>ActiveQuiz</p>
//         <p>{props.question}</p>
//     </div>
// );

const ActiveQuiz = props => {
    debugger;
    return (
        <div className='ActiveQuiz'>
            <p>ActiveQuiz</p>
            <p>{props.question}</p>
            <AnswersList
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
    )
};



export default ActiveQuiz;
