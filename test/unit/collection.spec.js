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

  // it('should return model when #findWhere is called', function() {
  //   var model = new App.Models.User();
  //   sinon.stub(this.collection, 'findWhere').returns(model)

  //   var user = this.collection.findWhere();
  //   expect(user).to.equal(model);
  // });

  it('should fire change event when model is changed', function() {
    var spy = sinon.spy();
    this.collection.on('change', spy);

    var user = this.collection.first();
    user.set('firstName', 'James');

    expect(spy).to.be.called;
  });

});