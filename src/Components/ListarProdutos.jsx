import { Link } from "react-router-dom";


export default function ListarProdutos({adcOferta,promocao}){
    return(
        <div className="bloco-principal">
        <div className="bloco-produtos">
            {promocao.map((item) => <div key={item.id}>
            <img src={item.imagem}/>
            <p>{item.item}</p>
            <p>{item.preco}</p>
            <button onClick={() => adcOferta(item)}>Adicionar</button>
            </div>)}
        </div>
    </div>
    
    )
}
