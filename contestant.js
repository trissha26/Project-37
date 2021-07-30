class Contestent{
    constructor(){
        this.index = null;
        this.answer = 0;
        this.name = null;

       
    }
     
    getCount(){
        var contestentCountRef = database.ref('contestentCount');
        contestentCountRef.on("value",function(data){
            contestentCount = data.val();
        })
     }
 
     updateCount(count){
         database.ref('/').update({
            contestentCount:count
         })
     }

     update(){
          var contestentIndex = "contestents/contestent"+this.index;
          database.ref(contestentIndex).set({
              name:this.name,
              answer:this.answer
          })
     }

     static getPlayerInfo(){
         var contestentInfoRef = database.ref('contestents');
         contestentInfoRef.on("value", (data) =>{
             allContestent = data.val();
         });

     }
}