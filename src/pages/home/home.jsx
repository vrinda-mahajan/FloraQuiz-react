import "./home.css"
import { CategoryCard } from "components"
import landingImg from "assets/images/gardening.jpg"
import { collection, getDocs } from "firebase/firestore"
import { db } from "firebaseConfig"
import { useState,useEffect } from "react"
import { TailSpin } from  'react-loader-spinner'

export const Home = () => {
    const [categories,setCategories] = useState([])

    useEffect(() => {
        const categoryColRef = collection(db,"categories");
        (async () => {
            try {
                const data = await getDocs(categoryColRef);
                const allCategories = data.docs.map(doc=>({id:doc.id,...doc.data()}));
                setCategories(allCategories);
            } catch (err) {
                console.log(err);
            }
        })();
    },[])

    return(
        <>
        <div className="header-container">
            <img className="header-img responsive-img" src={landingImg} alt="Gardening" />
            <div className="header-img-overlay">
                <p className="header-img-text text-bold-weight">Are you a true garderner?</p>
                <a href="#category" className="btn btn-primary text-lg text-decor-none">Explore Quizes</a>
            </div>
        </div>
        <h3 id="category" className="category-text text-center">Categories</h3>
        <div className="category-container flex-r">
        {categories.length>0?
            <>
            {categories.map((category)=>(
                <CategoryCard key={category.id} category={category} />
            )).reverse()}</>
            :<TailSpin
            height="100"
            width="100"
            color='grey'
            ariaLabel='loading'/>
        }
        </div>
    </>
    )
}