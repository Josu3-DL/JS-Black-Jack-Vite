import _ from 'underscore';

/**
JSDoc comments
*@param {array<string>} tipos 
*@param {array<string>} especiales
*@return {array<string>}
*/

// Esta función crea un nuevo deck
export const crearDeck = (tipos, especiales) => {
    

   let deck =[];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}