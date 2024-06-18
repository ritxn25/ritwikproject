import react from "react"
import Chartline from "./Chartline";
import Barchart from "./Barchart"

const LineandBar = ()=>{
    return(
        <div style={{ display:"flex", width:"100%"}}>
           <Chartline/>
           <Barchart />
        </div>
    );
};

export default LineandBar;