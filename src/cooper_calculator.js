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
  if (obj.gender == 'male' && obj.age >= 18 && obj.age <= 25) {
    if (obj.VO2Value < 30) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 30 && obj.VO2Value <= 36) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 37 && obj.VO2Value <= 41) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 42 && obj.VO2Value <= 46) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 47 && obj.VO2Value <= 51) {
      obj.VO2Message = "Above Average"
    }
    else if (obj.VO2Value >= 52 && obj.VO2Value <= 60) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 60) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.gender == 'male' && obj.age >= 26 && obj.age <= 35) {
    if (obj.VO2Value < 30) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 30 && obj.VO2Value <= 34) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 35 && obj.VO2Value <= 39) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 40 && obj.VO2Value <= 42) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 43 && obj.VO2Value <= 48) {
      obj.VO2Message = "Above Average"
    }
    else if (obj.VO2Value >= 49 && obj.VO2Value <= 56) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 56) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.gender == 'male' && obj.age >= 36 && obj.age <= 45) {
    if (obj.VO2Value < 26) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 26 && obj.VO2Value <= 30) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 31 && obj.VO2Value <= 34) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 35 && obj.VO2Value <= 38) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 39 && obj.VO2Value <= 42) {
      obj.VO2Message = "Above Average"
    }
    else if (obj.VO2Value >= 43 && obj.VO2Value <= 51) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 51) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.gender == 'male' && obj.age >= 46 && obj.age <= 55) {
    if (obj.VO2Value < 25) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 25 && obj.VO2Value <= 28) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 29 && obj.VO2Value <= 31) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 32 && obj.VO2Value <= 35) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 36 && obj.VO2Value <= 38) {
      obj.VO2Message = "Above Average"
    }
    else if (obj.VO2Value >= 39 && obj.VO2Value <= 45) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 45) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.gender == 'male' && obj.age >= 56 && obj.age <= 65) {
    if (obj.VO2Value < 22) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 22 && obj.VO2Value <= 25) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 26 && obj.VO2Value <= 29) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 30 && obj.VO2Value <= 31) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 32 && obj.VO2Value <= 35) {
      obj.VO2Message = "Above Average"
    }
    else if (obj.VO2Value >= 36 && obj.VO2Value <= 41) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 41) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.gender == 'male' && obj.age > 65) {
    if (obj.VO2Value < 20) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 20 && obj.VO2Value <= 21) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 22 && obj.VO2Value <= 25) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 26 && obj.VO2Value <= 28) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 29 && obj.VO2Value <= 32) {
      obj.VO2Message = "Above Average"
    }
    else if (obj.VO2Value >= 33 && obj.VO2Value <= 37) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 37) {
      obj.VO2Message = "Excellent"
    }
  }






  else if (obj.gender == 'female' && obj.age >= 18 && obj.age <= 25) {
    if (obj.VO2Value < 28) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 28 && obj.VO2Value <= 32) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 33 && obj.VO2Value <= 37) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 38 && obj.VO2Value <= 41) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 42 && obj.VO2Value <= 46) {
      obj.VO2Message = "Above Average"
    }
    else if (obj.VO2Value >= 47 && obj.VO2Value <= 56) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 56) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.gender == 'female' && obj.age >= 26 && obj.age <= 35) {
    if (obj.VO2Value < 26) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 26 && obj.VO2Value <= 30) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 31 && obj.VO2Value <= 34) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 35 && obj.VO2Value <= 38) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 39 && obj.VO2Value <= 44) {
      obj.VO2Message = "Above Average"
    }
    else if (obj.VO2Value >= 45 && obj.VO2Value <= 52) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 52) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.gender == 'female' && obj.age >= 36 && obj.age <= 45) {
    if (obj.VO2Value < 22) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 22 && obj.VO2Value <= 26) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 27 && obj.VO2Value <= 30) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 31 && obj.VO2Value <= 33) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 34 && obj.VO2Value <= 37) {
      obj.VO2Message = "Above Average"
    }
    else if (obj.VO2Value >= 38 && obj.VO2Value <= 45) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 45) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.gender == 'female' && obj.age >= 46 && obj.age <= 55) {
    if (obj.VO2Value < 20) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 20 && obj.VO2Value <= 24) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 25 && obj.VO2Value <= 27) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 28 && obj.VO2Value <= 30) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 31 && obj.VO2Value <= 33) {
      obj.VO2Message = "Above Average"
    }
    else if (obj.VO2Value >= 34 && obj.VO2Value <= 40) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 40) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.gender == 'female' && obj.age >= 56 && obj.age <= 65) {
    if (obj.VO2Value < 18) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 18 && obj.VO2Value <= 21) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 22 && obj.VO2Value <= 24) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 25 && obj.VO2Value <= 27) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 28 && obj.VO2Value <= 31) {
      obj.VO2Message = "Above Average"
    }
    else if (obj.VO2Value >= 32 && obj.VO2Value <= 37) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 37) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.gender == 'female' && obj.age > 65) {
    if (obj.VO2Value < 17) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 17 && obj.VO2Value <= 18) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 19 && obj.VO2Value <= 21) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 22 && obj.VO2Value <= 24) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 25 && obj.VO2Value <= 27) {
      obj.VO2Message = "Above Average"
    }
    else if (obj.VO2Value >= 28 && obj.VO2Value <= 32) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 32) {
      obj.VO2Message = "Excellent"
    }
  }
};
