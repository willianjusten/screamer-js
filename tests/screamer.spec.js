// Test the instanciation
describe("A suite", function() {

  beforeEach(function(){
    scream = new Screamer();
  });

  it("should verify if browser supports Notification API", function(){
    expect(scream.verifySupport()).toBeTruthy();
  });

  it("should checkPermission and it's granted", function(){
    expect(scream.checkPermission('granted')).toBeTruthy();
  });

  it("should checkPermission and it's denied", function(){
    expect(scream.checkPermission('denied')).toBeFalsy();
  });

  it("should instanctiate the Screamer object", function() {
    expect(scream instanceof window.Screamer).toBeTruthy();
  });
});

