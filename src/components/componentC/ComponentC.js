import { useSelector } from "react-redux"
import './componentc.css'

export const Componentc=()=>{

const data=useSelector(store=>store.data);

    return(
        <div className="name-container">
           <h1>{data.name}</h1> 
        </div>
    )
}