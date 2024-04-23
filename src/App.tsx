import Welcome from './components/Welcome';
import Hangman from './components/Hangman';

const frutas= ['apple', 'banana', 'cherry', 'date','fig', 'grape', 'kiwi'];
const herramienta= ['desarmador', 'martillo', 'sierra', 'tubo','cincel', 'pinzas', 'llave'];
const objeto= ['tapete', 'carro', 'mesa', 'silla','bandera', 'casa', 'volcan'];
const juguetes= ['pelota', 'robot', 'lanzador', 'carritos','patineta', 'trampolin', 'resbaladilla'];
const cocina= ['olla', 'cucharon', 'vaso', 'plato','casuela', 'licuadora', 'tostadora'];
//Agregar mas listas y hacer una implementacion para pasra una losta aleatoria
//Agregar una pista en el componente welcome para darle una pista sobre la lista que se selecciono
const palabras = [frutas, herramienta, objeto, juguetes, cocina];
const palabras_mandar = Math.floor(Math.random() * palabras.length);
function App(){


  return(
    <div className='App'>
      <Welcome palabra = {palabras_mandar}/>
      <Hangman words_props={palabras[palabras_mandar]}/>
    </div>
  );
};

export default App;