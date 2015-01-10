describe('App.Models.User', function() {
  it('should have default values', function() {
    var model = new App.Models.User();

    expect(model.get('firstName')).is.equal('Josh');
    expect(model.get('lastName')).is.equal('Bedo');
  });
});