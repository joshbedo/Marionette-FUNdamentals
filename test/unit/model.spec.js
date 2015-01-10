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
    expect(this.model.validationError).to.equal('Needs a username and email');
  });

  it('should call the #fullName method', function() {
    sinon.spy(this.model, 'fullName');
    var fullName = this.model.fullName(),
        firstName = fullName.split(" ")[0],
        lastName = fullName.split(" ")[1];

    expect(this.model.fullName).to.be.defined;
    expect(this.model.fullName).to.be.calledOnce;
    expect(this.model.get('firstName')).to.equal('Josh');
    expect(this.model.get('lastName')).to.equal('Bedo');
  });

});