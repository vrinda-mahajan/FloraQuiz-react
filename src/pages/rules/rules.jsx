import ruleBookImg from "assets/images/book.png"
import { Link, useParams } from "react-router-dom"
import "./rules.css"

export const Rules = () => {
    const {id} = useParams()
    return(
        <main className="p2 rules-container flex-c align-center">
        <img className="m2 rules-img" src={ruleBookImg} alt="Rule Book Img" />
        <div>
            <p className="rules"><i className="fa-solid fa-seedling"></i> This quiz consist of 5 questions.</p>
            <p className="rules"><i className="fa-solid fa-seedling"></i> Each question will have one correct answer.</p>
            <p className="rules"><i className="fa-solid fa-seedling"></i> Each question carries 5 marks.</p>
            <p className="rules"><i className="fa-solid fa-seedling"></i> To win the quiz you need to score more than 70%.</p>
        </div>
        <Link to={`/question/${id}/${0}`}><button className="m1 btn btn-primary">Start the Quiz</button></Link>
    </main>
    )
}