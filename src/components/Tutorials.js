import { Link,useMatch ,Routes ,Route} from "react-router-dom";
import TDetails from "./TDetails";
const Tutorials=()=>{
    const {matcher, paramNames}= useMatch();
    console.log(`pathpath`,matcher);
    return(
        <div>
            <h1>Tutorials Page</h1>
            <ul>
            <li> <Link to={`${paramNames}/regex`}>Javascript Marathon interview question</Link>
                
            </li>
            <li><Link to={`${paramNames}/js`}> Mastering Typescript _ interview questions</Link>
               
            </li>
            <li><Link to={`${paramNames}/Ts`}> Mastering React17 +  interview question</Link>
               
            </li>
            </ul>
            <Routes>
      <Route path={`${matcher}/:title`} element={<TDetails/>}>
      </Route>
      </Routes>
        </div>
    )
}
export default Tutorials;