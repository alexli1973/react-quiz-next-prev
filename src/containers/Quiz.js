import React, {Component} from 'react';
import ActiveQuiz from "../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                id: 1,
                question: '2 x 2',
                rightAnswer: 2,
                answers: [
                    {text: 8, id: 1},
                    {text: 4, id: 2},
                    {text: 9, id: 3},
                ]
            },
            {
                id: 2,
                question: '5 + 5',
                rightAnswer: 1,
                answers: [
                    {text: 10, id: 1},
                    {text: 68, id: 2},
                    {text: 33, id: 3},
                ]
            }
        ]
    };
    onAnswerClickHandler = answerId => {
        return (
            alert(answerId)
        )
    }
    render() {
        return (
            <div>
              <h2>Quiz</h2>
                <ActiveQuiz
                    question={this.state.quiz[this.state.activeQuestion].question}
                    answers={this.state.quiz[this.state.activeQuestion].answers}
                    onAnswerClick={this.onAnswerClickHandler}
                />
            </div>
        );
    }
}

export default Quiz;
