import Header from "../Components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../globals.css"
import Footer from "../Components/Footer";


export default function Home(){

    return(
    <>
        <div className="cabecalho">
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


    <div className="rodape">
    <Footer title={"desenvolver"}/>
    <h1>oi</h1>
    </div>

    </>
    )
}