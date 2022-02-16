import {useEffect, useState} from "react";
import HorizontalNavbar from "./HorizontalNavbar";
import VerticalNavbar from "./VerticalNavbar";

const Navbar = (props: PropTypes) => {
    const [smallScreen, setSmallScreen] = useState(window.innerWidth < 650);

    useEffect(() => {
        const handleResize = () => {
            setSmallScreen(window.innerWidth < 845);
        }

        window.addEventListener('resize', handleResize)
    }, [])

    return (
        <>
            {smallScreen && (
                <>
                <HorizontalNavbar openKey={props?.openKey}/>
                    {props.children}
                </>
            )}
            {!smallScreen && (
                <VerticalNavbar openKey={props?.openKey}>
                    {props.children}
                </VerticalNavbar>
            )}
        </>
    )
}

interface PropTypes {
    openKey?: Array<string>,
    children?: string | JSX.Element,
}

export default Navbar;