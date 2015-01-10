describe('App.Models.User', function() {

  beforeEach(function() {
    this.model = new App.Models.User();
  });

  it('should have default values', function() {
    expect(this.model.get('firstName')).is.equal('Josh');
    expect(this.model.get('lastName')).is.equal('Bedo');
  });

  it('should validate user model', function() {
    this.model.save();
    expect(this.model.validationError).to.be.defined;
  });

});

// describe('App.Collections.User', function() {
// });