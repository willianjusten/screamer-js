// Test the instanciation
describe("A suite", function() {

  beforeEach(function(){
    scream = new Screamer();
  });

  it("should instanctiate the Screamer object", function() {
    expect(scream instanceof window.Screamer).toBeTruthy();
  });
});