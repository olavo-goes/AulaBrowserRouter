import { Link } from "react-router-dom";
import "../globals.css"

export default function ListarProdutos({Lproduto}){
    return(
        <div className="bloco-principal">
        <div className="bloco-produtos">
            {Lproduto.map((item) => <div key={item.id}>
            <img src={item.imagem}/>
            <p>{item.item}</p>
            <p>{item.preco}</p>
            {item.vetor.map((vetor) => (
            <p key={vetor}>{vetor}</p>
        ))}

            <button onClick={() => Lproduto(item)}>Adicionar</button>
            
            </div>)}
        </div>
    </div>
    )
}
