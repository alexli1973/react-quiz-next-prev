import React, {Component} from 'react';
import ActiveQuiz from "../components/ActiveQuiz/ActiveQuiz";
import Button from "../components/UI/Button/Button";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        isFinished: false,
        results:[],
        answerState: null,
       // checkedRadio: null,
        selectedAnswer: null,
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
            },
            {
                id: 3,
                question: '2 - 2',
                rightAnswer: 1,
                answers: [
                    {text: 0, id: 1},
                    {text: 68, id: 2},
                    {text: 33, id: 3},
                ]
            }
        ]
    };
    isQuizFinished() {
        return this.state.activeQuestion +1 === this.state.quiz.length
    }
    onAnswerClickHandler = answerId => {
        const question = this.state.quiz[this.state.activeQuestion];
        let results = this.state.results;
        if(results[question.id] !== question.id) {
            results.push({[question.id]: answerId})
        }

        return (
            this.setState({
                selectedAnswer: answerId,
                answerState: {[question.id]: answerId},
                results: results
            })
        )

        // if (this.state.quiz[this.state.activeQuestion].rightAnswer === answerId) {
        //     return (
        //     this.setState({
        //     })
        //     )
        // } else {
        //     return (
        //         alert ('Wrong')
        //     )
        // }

    };
    onClickPrevHandler = (e) => {
        e.preventDefault();
        return (
            this.setState({
                activeQuestion: this.state.activeQuestion - 1
            })
        )
    };
    onClickNextHandler = (e) => {
        e.preventDefault();
        if(this.isQuizFinished()) {
            return alert('finish');
        } else {
            return (
                this.setState({
                    activeQuestion: this.state.activeQuestion + 1,
                    selectedAnswer: null
                })
            )
        }
    };
    render() {
        return (
            <div>
              <h2>Quiz</h2>
                <p>STATE: {JSON.stringify(this.state.answerState)}</p>
                <p>RESULTS: {JSON.stringify(this.state.results)}</p>
                <p>SELECTED ANSW: {this.state.selectedAnswer}</p>
                <ActiveQuiz
                    question={this.state.quiz[this.state.activeQuestion].question}
                    answers={this.state.quiz[this.state.activeQuestion].answers}
                    onAnswerClick={this.onAnswerClickHandler}
                    checked={this.state.selectedAnswer}
                />
                <div>
                    {/*<button onClick={this.onClickPrevHandler}>test</button>*/}
                    <Button
                        onClick={this.onClickPrevHandler}
                        disabled={this.state.activeQuestion === 0}
                    >
                        Prev
                    </Button>
                    <Button
                        onClick={this.onClickNextHandler}
                        disabled={this.isQuizFinished()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        );
    }
}

export default Quiz;
