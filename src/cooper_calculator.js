function CPRCalculator(){
};

CPRCalculator.prototype.VO2_max = function(obj) {
  var distance = obj.distance;
  if (distance > 0) {
    var finalVO2 = (distance - 504.9) / 44.73;
    obj.VO2Value = parseFloat(finalVO2.toFixed(2));
    setVO2Message(obj);
  }
};

function setVO2Message (obj, value){
  if (obj.gender == 'male' && obj.VO2Value < 40) {
    obj.VO2Message = "Poor"
  }
  if (obj.gender == 'female' && obj.VO2Value < 40) {
    obj.VO2Message = "Below average"
  }
};
