import {pedirCarta,valorCarta,crearcarta} from './';

/**
*@param {}
*
*
*
*/

// turno de la computadora
export const turnoComputadora = (puntosMinimos,deck, puntosHTML,divCartasComputadora ) => {
 
   
     if (!deck) throw new Error("Deck es necesario");
     if (!puntosHTML) throw new Error("Deck es necesario");

      let puntosComputadora=0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearcarta(carta);
        divCartasComputadora.append( imgCarta );

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}


