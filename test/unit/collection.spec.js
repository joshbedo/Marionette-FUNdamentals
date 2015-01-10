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

    expect(spy).to.be.calledOnce;
  });

});