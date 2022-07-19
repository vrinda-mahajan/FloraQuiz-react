import { useGlobal } from "context/globalContext"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "firebaseConfig"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { TailSpin } from  'react-loader-spinner'
import { QuestionCard } from "components"
import "./questions.css"

export const Questions = () => {
    const navigate = useNavigate();
    const {id,quesNo} = useParams();

    const [loading,setLoading] = useState(true);

    const {globalState,globalDispatch} = useGlobal();
    const {quizData,score,selectedQuiz} = globalState;

    useEffect(()=>{
        const quizColRef = collection(db,"quizzes");
        const quizCategory = query(quizColRef,where("category","==",selectedQuiz));
        (async()=>{
            try {
                const data = await getDocs(quizCategory);
                const allQuizzes = data.docs.map(doc=>({id:doc.id,...doc.data()}));
                globalDispatch({type:"SET_QUIZ_DATA",payload:allQuizzes})
                setLoading(false)
            } catch (err) {
                console.error(err)
            }
        })();
    },[globalDispatch,selectedQuiz])

    const category = quizData[0]?.category
    const questions = quizData[0]?.questions

    const handleNextQues = () => {
        if (Number(quesNo)<quizData[0]?.questions.length-1){
            navigate(`/question/${id}/${Number(quesNo)+1}`);
        }else{
            navigate("/result")
        }
    }

    return(
        <main className="flex-c align-center question-section">
            {loading?(
                <TailSpin
                height="100"
                width="100"
                color='grey'
                ariaLabel='loading'/>
            ):(
            <>
                <h3 className="m2-top-bottom">{`${category} Quiz`}</h3>

                <div className="p2 question-container">
                    <div className="question-header flex-r">
                        <p className="text-xlg">Question: 
                        <span>{Number(quesNo)+1}/{questions.length}</span>
                        </p>
                        <p className="text-xlg">Score: {score}</p>
                    </div>
                    <QuestionCard 
                        questionData={questions[quesNo]} 
                        handleNextQues={handleNextQues}
                        quesNo={quesNo}
                    />
                    <div className="flex-c align-center">
                            <button onClick={handleNextQues} className="m1 btn btn-secondary">Next Question</button>
                    </div>
                </div>
            </>
        )}
        </main>
    )
}
