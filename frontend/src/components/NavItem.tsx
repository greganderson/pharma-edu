import Nav from "react-bootstrap/Nav";
interface NavItemProps {
    dirName: string;
    path: string;
}

const NavItem: React.FC<NavItemProps> = ({ dirName, path }) => {
    return (
        <Nav.Item >
            <Nav.Link eventKey={`link-${path}`} href={path} style={{display: "flex", height: "75px",  justifyContent: "center" , alignItems: "center"}} className="navItem link-light">
                <h3>{dirName}</h3>
            </Nav.Link>
        </Nav.Item>
    );
};

export default NavItem;
