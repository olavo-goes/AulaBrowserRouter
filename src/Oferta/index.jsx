import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ListarProdutos from "../Components/ListarProdutos";

export default function Oferta(){
    const[Lproduto,setProduto] = useState([
        {
            id:9,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f956bzskzto/gallery/br-galaxy-z-fold6-f956-514097-sm-f956bzskzto-thumb-542639576?$252_252_PNG$",
            preco: "25,90R$",
            vetor:[
                "produto",
                "produto2"
            ]
        },
        {
            id:10,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2407/gallery/br-galaxy-watch7-l300-sm-l300nzgazto-thumb-542363219?$252_252_PNG$",
            preco: "25,90R$",
            vetor:[
                "produto",
                "produto2"
            ]
        },
        {
            id:11,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f956bakkzto/gallery/br-galaxy-z-fold6-f956-sm-f956bakkzto-thumb-542631516?$252_252_PNG$",
            preco: "25,90R$",
            vetor:[
                "produto",
                "produto2"
            ]
        },
        {
            id:12,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2407/gallery/br-galaxy-buds3-pro-r630-sm-r630nzaazto-thumb-542147382?$252_252_PNG$",
            preco: "25,90R$",
            vetor:[
                "produto",
                "produto2"
            ]
        },

        {
            id:13,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2401/gallery/br-galaxy-s24-s928-sm-s928bzvuzto-thumb-539293146?$252_252_PNG$",
            preco: "25,90R$",
            vetor:[
                "produto",
                "produto2"
            ]
        },

        {
            id:50,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2401/gallery/br-galaxy-s24-s928-sm-s928bzyuzto-thumb-539293396?$252_252_PNG$",
            preco: "25,90R$",
            vetor:[
                "produto",
                "produto2"
            ]
        },

        {
            id:14,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2401/gallery/br-galaxy-s24-plus-489205-sm-s926blbkzto-thumb-539318708?$252_252_PNG$",
            preco: "25,90R$",
            vetor:[
                "produto",
                "produto2"
            ]
        },

        {
            id:15,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f741bakjzto/gallery/br-galaxy-zflip6-f741-sm-f741bakjzto-thumb-542629707?$252_252_PNG$",
            preco: "25,90R$",
            vetor:[
                "produto",
                "produto2"
            ]
        },

        {
            id:16,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f956bakkzto/gallery/br-galaxy-z-fold6-f956-sm-f956bakkzto-thumb-542631516?$252_252_PNG$",
            preco: "25,90R$",
            vetor:[
                "produto",
                "produto2"
            ]
        },

        {
            id:17,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f741blbjzto/gallery/br-galaxy-zflip6-f741-513506-sm-f741blbjzto-thumb-542639659?$252_252_PNG$",
            preco: "25,90R$",
            vetor:[
                "produto",
                "produto2"
            ]

        },

        {
            id:18,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f956bzskzto/gallery/br-galaxy-z-fold6-f956-514097-sm-f956bzskzto-thumb-542639576?$252_252_PNG$",
            preco: "25,90R$",
            vetor:[
                "produto",
                "produto2"
            ]
        },

        {
            id:19,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f956bzskzto/gallery/br-galaxy-z-fold6-f956-514097-sm-f956bzskzto-thumb-542639576?$252_252_PNG$",
            preco: "25,90R$",
            vetor:[
                "produto",
                "produto2"
            ]
        },

        {
            id:20,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f956bzskzto/gallery/br-galaxy-z-fold6-f956-514097-sm-f956bzskzto-thumb-542639576?$252_252_PNG$",
            preco: "25,90R$",
            vetor:[
                "produto",
                "produto2"
            ]
        },

        {
            id:21,
            item:"Galaxy Buds3",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2407/gallery/br-galaxy-buds3-r530-sm-r530nzaazto-thumb-542196833?$252_252_PNG$",
            preco: "R$1.529,10",
            vetor:[
                "produto",
                "produto2"
            ]
        },

        {
            id:22,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2407/gallery/br-galaxy-watch7-l315-sm-l315fzsazto-thumb-542363783?$252_252_PNG$",
            preco: "25,90R$",
            vetor:[
                "produto",
                "produto2"
            ]
        },
        
        {
            id:23,
            item:"Galaxy Z Flip6 5G",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f741blgjzto/gallery/br-galaxy-zflip6-f741-513506-sm-f741blgjzto-thumb-542639928?$252_252_PNG$",
            preco: "R$7.199,10",
            vetor:[
                "produto",
                "produto2"
            ]
        },
    ])

  


    return(
        <>

        <div className="cabecalho">
        <h1>Ofertas</h1>
        <Header></Header>
        </div>

        <ListarProdutos Lproduto={Lproduto} />
        

        <div className="rodape">
        <h2>Desenvolvido Por: Olavo Goes</h2>
    </div>
        </>
    )
}