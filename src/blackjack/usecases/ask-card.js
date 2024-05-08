/**
this function returns card value "2C CJ"
*@param{deck<string>} deck
*@return{carta<string>}
*/

export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}