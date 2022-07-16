import { useGlobal } from "context/globalContext";
import { useLocation } from "react-router-dom";


export const Answer = ({option,quesNo,answer}) => {
    const {globalState:{answers},globalDispatch} = useGlobal();
    const { pathname } = useLocation()

    const handleOptionClick = (option) => {
        let currQuesScore = 0;
        option === answer ? currQuesScore=5 : currQuesScore=0
        globalDispatch({type:"SET_POINTS",payload:{quesNo,currQuesScore}})
        globalDispatch({type:"SET_ANSWERS",payload:{key:quesNo,value:option}})
        globalDispatch({type:"SET_SCORE"})
    }

    let wrongAnsClass,correctAnsClass ;
    if(pathname === "/result"){
        wrongAnsClass = option===answers[quesNo] && answer !== answers[quesNo]? "option-wrong": "";
        correctAnsClass = option === answer ? "option-correct":"";
    }else {
        correctAnsClass = option === answers[quesNo] ? "option-correct":"";
    }
    
    return (
        <li onClick={()=>handleOptionClick(option)} 
            className={`question-option text-lg text-center ${correctAnsClass} ${wrongAnsClass} ${pathname==="/result"&&"pointer-event-none"} `}
            tabIndex="1" >
            {option}
        </li>
    )
}