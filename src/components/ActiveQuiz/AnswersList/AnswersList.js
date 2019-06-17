import React from 'react';
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => {
        return (
            <div>
                <form className='AnswersList'>
                    {props.answers.map((item, index) => {
                        return <AnswerItem
                            item={item}
                            key={index}
                            onAnswerClick={props.onAnswerClick}
                            checked={props.checked}
                        />
                    })}
                </form>

            </div>
        );
};

export default AnswersList;
