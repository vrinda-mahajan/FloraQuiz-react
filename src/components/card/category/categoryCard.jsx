import { useGlobal } from "context/globalContext"
import { Link } from "react-router-dom"

export const CategoryCard = ({category:{type,img,id}}) => {
    const {globalDispatch} = useGlobal()
    
    return (
        <div className="card card-vertical-container1 flex-c align-center">
            <img className="card-img" src={img} alt={type} />
            <h5>{type}</h5>
            <Link to={`/rules/${id}`} onClick={()=>globalDispatch({type:"SET_SELECTED_QUIZ",payload:type})}><button className="m1 btn btn-primary">Play Now</button></Link> 
        </div>
    )
}