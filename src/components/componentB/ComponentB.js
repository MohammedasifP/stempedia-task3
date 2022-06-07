import { useDispatch } from "react-redux";
import { dataaction } from "../Redux/Dataredux/dataaction";
import './componentb.css'


export const Componentb=()=>{
const dispatch=useDispatch()    

const handlechange=(e)=>{
 const {id,value}=e.target;
   dispatch(dataaction({[id]:value}))
}

    return(
        <div className="inp">
            <input type="text" placeholder="Enter your Name" id="name" onChange={handlechange} />
        </div>
    )
}