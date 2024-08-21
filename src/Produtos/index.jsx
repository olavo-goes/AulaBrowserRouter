import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


export default function Produtos(){
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

        {
            id:1,
            item:"celular",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f956bzskzto/gallery/br-galaxy-z-fold6-f956-514097-sm-f956bzskzto-thumb-542639576?$252_252_PNG$",
            preco: "25,90R$"
        },
        
    ])

return(<>
<div className="cabecalho">
        <Header></Header>
        <h1>$$tore</h1>
        </div>


    <div className="rodape">
    <Footer title={""}/>
    <h1>rodape</h1>
    </div>
    </>
    )
}

