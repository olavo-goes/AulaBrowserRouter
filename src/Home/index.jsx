import Header from "../Components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../globals.css"


export default function Home(){

    return(
    <>
        <div className="cabecalho">
            <h1>minha Home</h1>
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
            <img src="https://th.bing.com/th?id=OIP.rQuMMWCET4ggc19D3UzsDQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Slide 1"/>
        </div>
        <div>
            <img src="https://th.bing.com/th?id=OIP.rQuMMWCET4ggc19D3UzsDQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Slide 1"/>
        </div>
        <div>
            <img src="https://th.bing.com/th?id=OIP.rQuMMWCET4ggc19D3UzsDQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Slide 1"/>
        </div>
    </Carousel>
    </>
    )
}