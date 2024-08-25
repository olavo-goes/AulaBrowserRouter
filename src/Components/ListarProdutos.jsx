import { Link } from "react-router-dom";
import "../globals.css"

export default function ListarProdutos({produto}){
    return(
        <div className="bloco-principal">
        <div className="bloco-produtos">
            {produto.map((item) => <div key={item.id}>
            <img src={item.imagem}/>
            <p>{item.item}</p>
            <p>{item.preco}</p>

            <button onClick={() => adcProduto(item)}>Adicionar</button>
            </div>)}
        </div>
    </div>
    )
}
