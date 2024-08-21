import NavItem from "./NavItem"
import links from "../Routes";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";



function Navigation(){

    return ( 
        <Navbar fixed="top" variant="underline" className="nav nav-tabs nav-justified" style={{color: "white", fontFamily: 'Hind Siliguri', fontWeight: "bold", backgroundColor: "#2e3f59"}}> 
            {links.map((obj, index) => <NavItem key={index} dirName={obj.link} path={obj.path}/>)}
            
            <Image src="src/assets/Dixietech_Logo.png" style={{height: "75px"}} />
        </Navbar>
    )
}

export default Navigation