import symbols from "./symbols";

// 0 - > trial
// 1 -> Game

export default function arrCardRand(numCards){
    const halfCards = numCards  //numero de Symbolos a usar
    const arr = []
    let i=0, j=0;
    
    while (i<numCards){
        if(j===halfCards){
            j=0
        }
        let random =Math.floor(Math.random() * numCards);//0-7
       
        if(!arr.some(item => item.id===random)){
           
            arr.push({
                id:random,
                symbol: symbols[j],
                bind :j,
                rotate: false,   
                validating:0,
                set : 0
            
            })
            i++
            j++
        }
    }
    //console.log(arr)
    return arr
}