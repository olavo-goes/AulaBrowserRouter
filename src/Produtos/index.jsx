import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ListarProdutos from "../Components/ListarProdutos";


export default function Produtos(){
    const[Lproduto,setProduto] = useState([
        {
            id:1,
            item:"Galaxy Z Fold6",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f956bzskzto/gallery/br-galaxy-z-fold6-f956-514097-sm-f956bzskzto-thumb-542639576?$252_252_PNG$",
            preco: "R$ 12.199,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 256GB",
                "Cor: Cinza"
            ]
        },
        {
            id:2,
            item:"Galaxy Watch7",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2407/gallery/br-galaxy-watch7-l300-sm-l300nzgazto-thumb-542363219?$252_252_PNG$",
            preco: "R$2.249,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 32GB",
                "Cor: Verde"
            ]
            
        },
        {
            id:3,
            item:"Galaxy Z Fold6",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f956bakkzto/gallery/br-galaxy-z-fold6-f956-sm-f956bakkzto-thumb-542631516?$252_252_PNG$",
            preco: "R$ 12.199,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 256GB",
                "Cor: Preto"
            ]
        },
        
        {
            id:4,
            item:"Galaxy Buds3",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2407/gallery/br-galaxy-buds3-pro-r630-sm-r630nzaazto-thumb-542147382?$252_252_PNG$",
            preco: "R$1.529,10",
            vetor:[
                "Marca: Sansung",
                "Bateria: 2000mAh",
                "Cor: Prata"
            ]
        },

        {
            id:5,
            item:"Galaxy S24 Ultra",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2401/gallery/br-galaxy-s24-s928-sm-s928bzvuzto-thumb-539293146?$252_252_PNG$",
            preco: "R$ 8.999,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 256GB",
                "Cor: Cinza"
            ]
        },

        {
            id:6,
            item:"Galaxy S24 Ultra",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2401/gallery/br-galaxy-s24-s928-sm-s928bzyuzto-thumb-539293396?$252_252_PNG$",
            preco: "R$ 8.999,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 256GB",
                "Cor: Laranja"
            ]
        },

        {
            id:7,
            item:"Galaxy A25 5G",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2401/gallery/br-galaxy-s24-plus-489205-sm-s926blbkzto-thumb-539318708?$252_252_PNG$",
            preco: "R$1.889,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 256GB",
                "Cor: Azul"
            ]
        },

        {
            id:8,
            item:"Galaxy Z Flip6",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f741bakjzto/gallery/br-galaxy-zflip6-f741-sm-f741bakjzto-thumb-542629707?$252_252_PNG$",
            preco: "R$ 7.199,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 256GB",
                "Cor: preto"
            ]
        },
        {
            id:9,
            item:"Galaxy A35 5G ",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-a356ezkbzto/gallery/br-galaxy-a35-5g-sm-a356-sm-a356ezkbzto-thumb-540316163?$252_252_PNG$",
            preco: "R$ 1.399,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 256GB",
                "Cor: Preto"
            ]
        },
        {
            id:10,
            item:"Galaxy Watch7",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2407/gallery/br-galaxy-watch7-l300-sm-l300nzgazto-thumb-542363219?$252_252_PNG$",
            preco: "R$2.249,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 32GB",
                "Cor: Verde"
            ]
        },
        {
            id:11,
            item:"Galaxy Z Fold6",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f956bakkzto/gallery/br-galaxy-z-fold6-f956-sm-f956bakkzto-thumb-542631516?$252_252_PNG$",
            preco: "R$ 13.799,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 556GB",
                "Cor: Preto"
            ]
        },
        {
            id:12,
            item:"Galaxy Buds3",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2407/gallery/br-galaxy-buds3-pro-r630-sm-r630nzaazto-thumb-542147382?$252_252_PNG$",
            preco: "R$1.529,10",
            vetor:[
                "Marca: Sansung",
                "Bateria: 2000mAh",
                "Cor: Prata"
            ]
        },

        {
            id:13,
            item:"Galaxy S24 Ultra",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2401/gallery/br-galaxy-s24-s928-sm-s928bzvuzto-thumb-539293146?$252_252_PNG$",
            preco: "R$ 7.999,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 256GB",
                "Cor: Cinza"
            ]
        },

        {
            id:50,
            item:"Galaxy S24 Ultra",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2401/gallery/br-galaxy-s24-s928-sm-s928bzyuzto-thumb-539293396?$252_252_PNG$",
            preco: "R$ 7.999,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 256GB",
                "Cor: Dourado"
            ]
        },

        {
            id:14,
            item:"Galaxy a55",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2401/gallery/br-galaxy-s24-plus-489205-sm-s926blbkzto-thumb-539318708?$252_252_PNG$",
            preco: "R$ 1.699,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 256GB",
                "Cor: Branco"
            ]
        },

        {
            id:15,
            item:"Galaxy Z Flip6 5G",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f741bakjzto/gallery/br-galaxy-zflip6-f741-sm-f741bakjzto-thumb-542629707?$252_252_PNG$",
            preco: "R$ 6.499,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 256GB",
                "Cor: Preto"
            ]
        },

        {
            id:16,
            item:"Galaxy Z Fold6",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f956bakkzto/gallery/br-galaxy-z-fold6-f956-sm-f956bakkzto-thumb-542631516?$252_252_PNG$",
            preco: "R$ 10.799,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 128GB",
                "Cor: Preto"
            ]
        },

        {
            id:17,
            item:"Galaxy Z Flip6 5G",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f741blbjzto/gallery/br-galaxy-zflip6-f741-513506-sm-f741blbjzto-thumb-542639659?$252_252_PNG$",
            preco: "R$ 6.499,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 256GB",
                "Cor: Azul"
            ]
        },

        {
            id:18,
            item:"Galaxy M15 5G",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-m156bdbjzto/gallery/br-galaxy-m15-5g-sm-m156-sm-m156bdbjzto-thumb-540932974?$252_252_PNG$",
            preco: "R$978,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 128GB",
                "Cor: Azul Escuro"
            ]
        },

        {
            id:19,
            item:"Galaxy Z Fold6",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f956bzskzto/gallery/br-galaxy-z-fold6-f956-514097-sm-f956bzskzto-thumb-542639576?$252_252_PNG$",
            preco: "R$ 10.799,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 128GB",
                "Cor: Cinza"
            ]
        },

        {
            id:20,
            item:"Galaxy Z Fold6",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f956bzskzto/gallery/br-galaxy-z-fold6-f956-514097-sm-f956bzskzto-thumb-542639576?$252_252_PNG$",
            preco: "R$ 11.799,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 256GB",
                "Cor: Cinza"
            ]
        },

        {
            id:21,
            item:"Galaxy Buds3",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2407/gallery/br-galaxy-buds3-r530-sm-r530nzaazto-thumb-542196833?$252_252_PNG$",
            preco: "R$1.129,10",
            vetor:[
                "Marca: Sansung",
                "Bateria: 2000mAh",
                "Cor: Prata"
            ]
        },

        {
            id:22,
            item:"Galaxy Watch7",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2407/gallery/br-galaxy-watch7-l315-sm-l315fzsazto-thumb-542363783?$252_252_PNG$",
            preco: "R$1.949,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 32GB",
                "Cor: Branco"
            ]
        },
        
        {
            id:23,
            item:"Galaxy Z Flip6 5G",
            imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f741blgjzto/gallery/br-galaxy-zflip6-f741-513506-sm-f741blgjzto-thumb-542639928?$252_252_PNG$",
            preco: "R$ 6.199,10",
            vetor:[
                "Marca: Sansung",
                "Armazenamento: 256GB",
                "Cor: Verde"
            ]
        },      
        
    ])



 
   


return(

    <>
        <div className="cabecalho">
        <h1>Todos os Produtos</h1>
        <Header></Header>
        </div>

        <ListarProdutos Lproduto={Lproduto}/>


        <div className="rodape">
        <Footer title={"Desenvolvido Por: Olavo Goes"}/>
        </div>
    </>
    )
}

