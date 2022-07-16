import trophyImg from "assets/images/trophy.png";
import { QuestionCard } from "components";
import { useGlobal } from "context/globalContext";
import { Link } from "react-router-dom";
import "./result.css"

export const Result = () => {
    const {globalState} = useGlobal();
    const {quizData,score,selectedQuiz} = globalState;
    const questions = quizData[0]?.questions;

    return (
        <main className="p2 flex-c align-center">
        <div className="p2 result-container flex-c align-center">
            <h3 className="m2">Results</h3>
            <img className="m2 result-img" src={trophyImg} alt="Result" />
            <h3 className="m2">Final Score: {score}/{questions.length*5}</h3>
        </div>

        <h4 className="answers">Check Answers</h4>
        <p><i className="fa-solid fa-angles-down"></i></p>

        <main className="flex-c align-center question-section">
            <h3 className="m2-top-bottom">{selectedQuiz}</h3> 
            <div className="p2 question-container">
            {questions.map((question,index)=>{
                return(
                    <div key={index}>
                    <div className="question-header flex-r">
                        <p className="text-xlg">Question: 
                        <span>{Number(index)+1}/{questions.length}</span>
                        </p>
                    </div>
                    <QuestionCard questionData={question} quesNo={index}/>
                    </div>
                )}
            )}
            </div>
        </main>
        <Link to="/"><button className="m1 btn btn-primary-outline">Back to Home</button></Link>
    </main>
    )
}
