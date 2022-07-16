import { Answer } from "./answer/answer";
import { v4 as uuid } from "uuid";

export const QuestionCard = ({questionData,quesNo}) => {
    const {question,options,answer} = questionData
    
    return (
        <>
            <p className="question text-xlg text-bold-weight">{question}</p>
            <ul className="list-non-bullet">
                {options.map(option=>
                    <Answer
                        key={uuid()}
                        option={option}
                        quesNo={quesNo}
                        answer={answer} />
                )}
            </ul>
        </>
    )
}
