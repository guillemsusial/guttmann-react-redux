



export default function arrCardSequence(numCards,numtimes){
    const positions = []  //numero de Symbolos a usar
    const sequence = []
    let i=0;
   
    while (i<numtimes){
      
       
        let random =Math.floor(Math.random() * numCards);//0-7
        positions.push(random)  
        i++
    }

    sequence.push({
        sequence:  positions 
    }) 
    return sequence
}