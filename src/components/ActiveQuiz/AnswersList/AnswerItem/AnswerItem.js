import React from 'react';

const AnswerItem = props =>  {
    console.log(props);
    return (
            <div>
                <input type='radio' name='answer'
                       onChange={() => props.onAnswerClick(props.item.id)}
                />{props.item.text}
            </div>
        );
};

export default AnswerItem;
