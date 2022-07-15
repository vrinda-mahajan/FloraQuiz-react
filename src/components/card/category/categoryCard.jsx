import { Link } from "react-router-dom"

export const CategoryCard = ({category}) => {
    const {type,img} = category
    return (
        <div className="card card-vertical-container1 flex-c align-center">
            <img className="card-img" src={img} alt={type} />
            <h5>{type}</h5>
            <Link to={`/rules`}><button className="m1 btn btn-primary">Play Now</button></Link> 
        </div>
    )
}