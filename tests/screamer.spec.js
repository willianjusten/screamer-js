describe("Support:", function() {
  it("should verify if browser supports Notification API", function(){
    scream = new Screamer('hello');
    expect(scream.verifySupport()).toBeTruthy();
  });
});

describe('Instantiation:', function() {
  it("should instantiate the Screamer object", function() {
    screamObj = new Screamer('Hello');
    expect(screamObj instanceof window.Screamer).toBeTruthy();
  });

  it('should call notify without param', function() {
    expect(function(){
      screamError = new Screamer();
    }).toThrow();
  });
});

describe('Permissions:', function() {
  it("should checkPermission and it's granted", function(){
    expect(scream.checkPermission('granted')).toBeTruthy();
  });

  it("should checkPermission and it's denied", function(){
    expect(scream.checkPermission('denied')).toBeFalsy();
  });
});