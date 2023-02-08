import React from "react";
import { useParams } from "react-router-dom";



function Kullanici(){
    
    const {kullaniciId}= useParams();

    return(
        <h1>
            Kullanici !! {kullaniciId}
         
        </h1>
    )
}
export default Kullanici;