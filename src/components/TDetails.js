import { useParams } from "react-router-dom";
const TDetails =()=>{
    const params = useParams();
    return(
        <div>
            <h1>Tutorials Details + {params.title}</h1>
        </div>
    )

}

export default TDetails;