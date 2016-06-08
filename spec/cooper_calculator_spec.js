describe("V02 Max", function(){

  beforeEach(function() {
    person = new Person({distance: 2200, gender: 'female'});
    calculator = new CPRCalculator();
    calculator.VO2_max(person);
  });

  it("should calculate VO2 max", function() {
    expect(person.VO2Value).toEqual(37.9);
  });

  it("should display custom VO2 message based on gender (female)", function() {
    expect(person.VO2Message).toEqual("Below average")
  });

  it("should display custom VO2 message based on gender (male)", function() {
    person = new Person({distance: 2200, gender: 'male'});
    calculator.VO2_max(person);
    expect(person.VO2Message).toEqual("Poor")
  });
});

describe("Cooper Assesment", function(){

});
