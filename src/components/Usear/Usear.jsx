import { useLoaderData } from "react-router-dom";
import Useat from "../Usea/Useat";



const Usear = () => {
const  users = useLoaderData();
    return (
        <div className="flex  flex-row-3 gap-1.5 flex-wrap">
            <h2> Usear :{users.length}</h2>
           {users.map((usear)=><Useat key={usear.id} usear ={usear}></Useat>)}
           
        </div>
    );
};

export default Usear;