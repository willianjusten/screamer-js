// Test the instanciation
describe("A suite", function() {

  beforeEach(function(){
    scream = new Screamer();
  });

  it("should instanctiate the Screamer object", function() {
    expect(scream instanceof window.Screamer).toBeTruthy();
  });

  it("should verify if browser supports Notification API", function(){
    expect(Screamer.verifySupport()).toBeTruthy();
  });

  it("should checkPermission", function(){
    expect(Screamer.checkPermission()).toBeTruthy();
  });


  it("should start Nofitication", function(){
    
  });
});