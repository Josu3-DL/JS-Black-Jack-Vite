/**
*@param <string> name card
*@returns <htmlelement> returns the image
*/

export const crearcarta =(carta) =>{
   const imgCarta = document.createElement('img');
   imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
   imgCarta.classList.add('carta');
   return imgCarta;
}