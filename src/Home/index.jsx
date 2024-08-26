import Header from "../Components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../globals.css"
import Footer from "../Components/Footer";
import { useState } from "react";
import ListarProdutos from "../Components/ListarProdutos";


export default function Home(){
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
    ])



   



    return(
    <>
        <div className="cabecalho">
        <h1>$$tore</h1>
        <Header></Header>
        </div>
        
        <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        dynamicHeight
     >
        <div>
            <img src="https://images.samsung.com/is/image/samsung/assets/br/offer/14924_New-Offer_PF_Desk_1440x344.png?imwidth=1366" alt="Slide 1"/>
        </div>
        <div>
            <img src="https://images.samsung.com/is/image/samsung/assets/br/offer/15299_01_New-Offer_PF_Desk_1440x344asefd.jpg?imwidth=1366" alt="Slide 2"/>
        </div>
        <div>
            <img src="https://images.samsung.com/is/image/samsung/assets/br/offer/watches/New-Offer_PF_Desk_4.jpg?imwidth=1366" alt="Slide 3"/>
        </div>        
    </Carousel>

        <ListarProdutos Lproduto={Lproduto}/>

        <div className="rodape">
        <Footer title={"Desenvolvido Por: Olavo Goes"}/>
        </div>
    </>
    )
}