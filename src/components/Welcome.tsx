import hangman from '../img/verdugo.png'
import "../css/main.css"

interface WelcomeProps{
    palabra:number;
}

export default function Welcome({palabra}:WelcomeProps){
    
    const adivinanza = () => {
        if(palabra == 1) {
            return <p>Existen de muchos colores, son dulces, de muchos tamaños y aportan nutrientes para el cuerpo.</p>
        } else if(palabra == 2) {
            return <p>Con ellas se pueden fabricar y reparar todo tipo de cosas</p>
        } else if(palabra == 3) {
            return <p>Son una variedad de objetos que existen en nuestro entorno</p>
        } else if(palabra == 4) {
            return <p>Son divertidos y son normalmente preferidos por los niños, existen de muchas variedades</p>
        } else{
            return <p>Son importantes para hacer alimentos y se usan en un lugar especifico</p>
        }

    }

    return(
        <>
            <div className="wrapper">
                <div className='tittles'>
                    <div className='pista'>
                        {adivinanza()}
                    </div>
                    <h1>Hangman Game *o*</h1>
                    <h2>The favorite classic game everybody</h2>
              
                
                    <img src={hangman} alt='Hangman image' width={200} height={200}/>
                </div>
            </div>
        </>
    );
};

