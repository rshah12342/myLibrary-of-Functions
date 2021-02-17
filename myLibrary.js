//function to bounce off objects
function bounceOff(object1, object2) {
    //to bounce them off in the x-direction  
    if (object1.x - object2.x < object1.width/2 + object2.width/2 
      && object2.x - object1.x < object1.width/2 + object2.width/2){
        object1.velocityX = object1.velocityX *(-1);
        object2.velocityX = object2.velocityX *(-1);
      }
  
    //to bounce them off in the y-direction  
    if (object2.y - object1.y < object1.height/2 + object2.height/2
      && object1.y - object2.y < object1.height/2 + object2.height/2) {
        object1.velocityY = object1.velocityY *(-1);
        object2.velocityY = object2.velocityY *(-1);
      }
      
      
}

//funtion to check isTouching between two sprites

//whatever general values you are passing in order to take input from the user
//you pass them as ARGUMENTS inside the () of function.
function isTouching(object1,object2) {
    //to change their color to black when the two touch each other
    if (object1.x - object2.x < object1.width/2 + object2.width/2 
     && object2.x - object1.x < object1.width/2 + object2.width/2
     && object2.y - object1.y < object1.height/2 + object2.height/2
     && object1.y - object2.y < object1.height/2 + object2.height/2){
      
      return true;
    
    }
    else{
      return false;
      
    }
   // BOOLEAN values = true/false
   }