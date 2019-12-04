/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
        result = eval((input.match(/^[\d\.\/]+(\d+)?/)||[]).join(""));
    console.log(1,result);
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    let unitSet = ['mi', 'km', 'gal', 'l', 'lbs', 'kg']
        if (unitSet.indexOf((input.match(/[a-zA-Z]+$/i)||[]).join("")) >= 0){
          result = (input.match(/[a-zA-Z]+$/i)||[]).join("");
        };
    console.log(2, result);
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    if(initUnit){
    var result;
    let unitSet = { mi: "km",
                    km: "mi",
                    l: "gal",
                    gal: "l",
                    kg: "lb",
                    lb: "kg"
                  }
    result = unitSet[initUnit];
    console.log(3, result);
    return result;
  }};

  this.spellOutUnit = function(unit) {
    var result;
    let unitSet = { km: "kilometers",
                    mi: "miles",
                    l: "liters",
                    gal: "galons",
                    lb: "pounds",
                    kg: "kilogams"
                  }
    result = unitSet[unit];
    console.log(4, result);
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if (initNum){
    if (initUnit === "gal"){
      result = initNum*galToL;
    }
    else if (initUnit === "l"){
      result = initNum/galToL;
    }
    else if (initUnit === "lbs"){
      result = initNum*lbsToKg;
    }
    else if (initUnit === "kg"){
      result = initNum/lbsToKg;
    }
    else if (initUnit === "mi"){
      result = initNum*miToKm;
    }
    else if (initUnit === "km"){
      result = initNum/miToKm;
    }
    console.log(5, result);
    return result;
  }};
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
    //{"initNum":initNum, "initUnit":initUnit, "returnNum": returnNum, "returnUnit": returnUnit,"string":"3.1 miles converts to 4.98895 kilometers"}
    return result;
  };
  
}

module.exports = ConvertHandler;
