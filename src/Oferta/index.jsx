import { useState } from "react";



export default function Oferta(){
    const[promocao,setPromocao] = useState([
        {
            id:1,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f956bzskzto/gallery/br-galaxy-z-fold6-f956-514097-sm-f956bzskzto-thumb-542639576?$252_252_PNG$",
            preco: "25,90R$"
        },
        {
            id:1,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2407/gallery/br-galaxy-watch7-l300-sm-l300nzgazto-thumb-542363219?$252_252_PNG$",
            preco: "25,90R$"
        },
        {
            id:1,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f956bakkzto/gallery/br-galaxy-z-fold6-f956-sm-f956bakkzto-thumb-542631516?$252_252_PNG$",
            preco: "25,90R$"
        },
        {
            id:1,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2407/gallery/br-galaxy-buds3-pro-r630-sm-r630nzaazto-thumb-542147382?$252_252_PNG$",
            preco: "25,90R$"
        },

        {
            id:1,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2401/gallery/br-galaxy-s24-s928-sm-s928bzvuzto-thumb-539293146?$252_252_PNG$",
            preco: "25,90R$"
        },

        {
            id:1,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2401/gallery/br-galaxy-s24-s928-sm-s928bzyuzto-thumb-539293396?$252_252_PNG$",
            preco: "25,90R$"
        },

        {
            id:1,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2401/gallery/br-galaxy-s24-plus-489205-sm-s926blbkzto-thumb-539318708?$252_252_PNG$",
            preco: "25,90R$"
        },

        {
            id:1,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f741bakjzto/gallery/br-galaxy-zflip6-f741-sm-f741bakjzto-thumb-542629707?$252_252_PNG$"
        },

        {
            id:1,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f956bakkzto/gallery/br-galaxy-z-fold6-f956-sm-f956bakkzto-thumb-542631516?$252_252_PNG$",
            preco: "25,90R$"
        },

        {
            id:1,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f741blbjzto/gallery/br-galaxy-zflip6-f741-513506-sm-f741blbjzto-thumb-542639659?$252_252_PNG$",
            preco: "25,90R$"
        },

        {
            id:1,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f956bzskzto/gallery/br-galaxy-z-fold6-f956-514097-sm-f956bzskzto-thumb-542639576?$252_252_PNG$",
            preco: "25,90R$"
        },

        {
            id:1,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f956bzskzto/gallery/br-galaxy-z-fold6-f956-514097-sm-f956bzskzto-thumb-542639576?$252_252_PNG$",
            preco: "25,90R$"
        },
        
    ])

    const [listaOfertas, setOfertas] = useState ([])
    const adcOferta = (item) => {
        setOfertas([...listaOfertas,item])
    }


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


            {
            listaOfertas.map((item) => <div key={item.id}>
                <table>
                    <tr>
                        <td><img src={item.imagem}></img></td>
                        <td>{item.item}</td>
                        <td>{item.preco}</td>
                        <td>
                        <button onClick={() => adcOferta(item)}>adc</button>
                        </td>
                    </tr>
                </table>
            </div>)
        }
        </div>
    )
}