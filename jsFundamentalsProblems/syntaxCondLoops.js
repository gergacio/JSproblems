
const syntaxCondLoop = function(){};

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 1.Ages
// Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder. The input comes as single number parameter. The bounders are:
// ·0-2 – baby; 
// ·3-13 – child; 
// ·14-19 – teenager;
// ·20-65 – adult;
// ·>=66 – elder; 
// ·In all other cases - out of bounds
// ·All the values are inclusive.

syntaxCondLoop.prototype.ages = function(x){
        let output;
 
        switch (x) {
            case ((x >= 0 && x <= 2) ? x : -1):
                output = "baby";
                break;
            case ((x >= 3 && x <= 13) ? x : -1):
                output = "child";
                break;
            case ((x >= 14 && x <= 19) ? x : -1):            
                output = "teenager";
                break;
            case ((x >= 20 && x <= 65) ? x : -1):     
                output = "adult";  
                break;      
            case ((x >= 66) ? x : -1):         
                output = "elder";    
                break;  
            default:
                output = `out of bounds`;               
        
    }
    return output;
   
}

module.exports = syntaxCondLoop;