import React from 'react';

const AnswerItem = props =>  {
   // console.log(props);
    return (
            <div>
                <p>CHECKED {JSON.stringify(props.checked === props.item.id)}</p>
                <input type='radio' name='answer'
                       onChange={() => props.onAnswerClick(props.item.id)}
                      // onChange={(e) => props.onAnswerClick(e)}
                       checked={props.checked === props.item.id}
                       value={props.item.id}
                />{props.item.text}
            </div>
        );
};

export default AnswerItem;
