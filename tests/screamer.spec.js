// API stuff
describe("Support:", function() {
  it("should verify if browser supports Notification API", function(){
    scream = new Screamer('hello');
    expect(scream.verifySupport()).toBeTruthy();
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

// Plugin stuff
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

describe('Parameters:', function() {
  it("should instantiate the Screamer object with title", function() {
    screamObj = new Screamer('Hello');
    expect(screamObj.title).toEqual('Hello');
  });
  
  it("should instantiate the Screamer object with body and icon", function() {
    options = {
      'body': 'world',
      'icon': '../example/ico_sucesso.png'
    };
    screamObj = new Screamer('Hello', options);
    expect(screamObj.options).toEqual(options);
  });

  it("should instantiate the Screamer object with fade option", function() {
    options = {
      'fade': 5000 // time in ms
    };
    screamFade = new Screamer('Hello', options);
    
    spyOn(screamFade, 'fadeNotification');
    
    screamFade.fadeNotification();
    expect(screamFade.fadeNotification).toHaveBeenCalled();

  });
});