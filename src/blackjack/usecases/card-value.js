
/**
this function set the card value 
*@parm carta<string> carta
*@return valor<int> valor return an integer, 
  the value card
*
*/

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
