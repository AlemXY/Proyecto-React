import { CardPersonaje } from './components/CardPersonaje'
import { Navbar } from './components/Navbar'
import {personajes} from "./utils/personajesData"

export const Principal = () => {

    console.log("personajes", personajes)

    return(
        <section>
            <Navbar/>
            <article className='container'>
                <h1>Primer Aplicativo en React: Alex Cabana</h1>
                <div className='contenedor-personajes'>
                    {personajes.map((personaje) => (
                        // <CardPersonaje
                        //     nombre = {personaje.nombre}
                        //     edad = {personaje.edad}
                        // />
                        <CardPersonaje key = {personaje.nombre} {...personaje}/>
                    ))}
                </div> 
            </article>
        </section>
    )
}