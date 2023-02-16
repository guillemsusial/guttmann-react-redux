export class Player{
   
    constructor(round,userPosition,totalRounds,sequence,speed,blockedButtons,fallos,userSequence,userObject,trial) {
        this.round = round;
        this.userPosition = userPosition;
        this.totalRounds = totalRounds;
        this.sequence = sequence;
        this.speed = speed;
        this.blockedButtons = blockedButtons;
        this.fallos = fallos;
        //this.laSequencia_error=false;
        this.userSequence= userSequence;
        this.userObject= userObject;
        this.display = {
          round
        }
        this.trial=trial;
  
      }
  
  
    //crea el objeto dond alojaremos los datos del usuario segun la ronda
  
    createUserData(){
  
      for(let i = 0;i<this.totalRounds;i++) {
  
        this.userSequence.push(this.userObject={"Round":i,"Options":[],"Sequence":[]});
  
      }
    }
  }
  