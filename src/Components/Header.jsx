import { Link } from "react-router-dom"


export default function Header(){
    return(
        <>
            <nav>
                <ul>
                    <Link to="/">
                    <li>Home</li>
                    </Link>
                    <Link to="/oferta">
                    <li>Oferta</li>
                    </Link>
                    <Link to="/produts">
                    <li>Produtos</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}