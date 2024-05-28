import hangman from '../img/verdugo.png'
import fase1 from '../img/fase1.png'
import fase2 from '../img/fase 2.png'
import fase3 from '../img/fase 3.png'
import fase4 from '../img/fase 4.png'
import fase5 from '../img/fase 5.png'
import fase6 from '../img/fase 6.png'
import fase7 from '../img/fase 7.png'
import "../css/main.css"

interface WelcomeProps{
    palabra:number;
    errorCount:number;
}

export default function Welcome({palabra,errorCount}:WelcomeProps){
    
    const renderImage = () => {
        if (errorCount === 1) {
          return <img src={fase1} alt="Fase 1" />;
        } else if (errorCount === 2) {
          return <img src={fase2} alt="Fase 2" />;
        } else if (errorCount === 3) {
          return <img src={fase3} alt="Fase 3" />;
        } else if (errorCount === 4) {
          return <img src={fase4} alt="Fase 4" />;
        } else if (errorCount === 5) {
          return <img src={fase5} alt="Fase 5" />;
        } else if (errorCount === 6) {
          return <img src={fase6} alt="Fase 6" />;
        } else if (errorCount === 7) {
          return <img src={fase7} alt="Fase 7" />;
        } else {
          return <img src={hangman} alt="Inicio" />;
        }
      };
    
    const adivinanza = () => {
        if(palabra == 0) {
            return <p>Existen de muchos colores, son dulces, de muchos tamaños y aportan nutrientes para el cuerpo.</p>
        } else if(palabra == 1) {
            return <p>Con ellas se pueden fabricar y reparar todo tipo de cosas</p>
        } else if(palabra == 2) {
            return <p>Son una variedad de objetos que existen en nuestro entorno</p>
        } else if(palabra == 3) {
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
                    
                    {renderImage()}
                </div>
            </div>
        </>
    );
};

