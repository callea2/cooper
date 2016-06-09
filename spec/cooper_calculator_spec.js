describe("V02 Max", function(){

  beforeEach(function() {
    person = new Person({distance: 2220, gender: 'male', age: 21});
    calculator = new CPRCalculator();
    calculator.VO2_max(person);
  });

  it("should calculate VO2 max", function() {
    expect(person.VO2Value).toEqual(38.34);
  });

  it("should display custom VO2 message based on gender (female)", function() {
    person = new Person({distance: 2220, gender: 'female', age: 21});
    calculator.VO2_max(person);
    expect(person.VO2Message).toEqual("Average")
  });

  it("should display custom VO2 message based on gender (male)", function() {
    expect(person.VO2Message).toEqual("Below average")
  });

  it("should display custom VO2 message based on age", function() {
    person = new Person({distance: 2200, gender: 'male', age: 65});
    calculator.VO2_max(person);
    expect(person.VO2Message).toEqual("Very good")
  });
});

describe("Cooper Assesment", function(){

});
