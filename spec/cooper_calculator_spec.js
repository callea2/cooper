describe("CPRCalculator", function(){
  var person;
  var cpr_calculator;

  beforeEach(function() {
    person = new Person({distance: 2200, gender: 'male', age: 20});
    calculator = new CPRCalculator();
  });

  it("calculates VO2", function() {
    calculator.VO2_max(person);
    expect(person.VO2Value).toEqual(37.9);
  });
});
