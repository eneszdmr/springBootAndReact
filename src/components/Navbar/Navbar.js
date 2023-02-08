import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    let kullaniciId=5;
    return(
        <div>
            <ul>
                      
                <li><Link to="/">Home</Link></li>
                <li><Link to={{pathname : '/kullanicilar/' + kullaniciId}}>Kullanicilar</Link></li>
            </ul>
        </div>
    )

}

export default Navbar;