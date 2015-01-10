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

describe('App.Collections.User', function() {
  beforeEach(function() {
    this.collection = new App.Collections.Users([
      { firstName: 'Josh', lastName: 'Bedo' },
      { firstName: 'Joanne', lastName: 'Daudier' },
      { firstName: 'Peter', lastName: 'Griffin' }
    ]);
  });

  it('should have a populated collection', function() {
    expect(this.collection.length).to.equal(3);
  });

  it('should fire change event when model is changed', function() {
    var spy = sinon.spy(this.collection.prototype, 'onChange');
    var user = this.collection.first();
    user.set('firstName', 'James');

    debugger;
    expect(spy).to.be.calledOnce;
  });

});