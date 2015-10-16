// API stuff
describe("Support:", function() {
    it("should verify if browser supports Notification API", function(){
        scream = new Screamer({'title': 'hello'});
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
        screamObj = new Screamer({'title': 'hello'});
        expect(screamObj instanceof window.Screamer).toBeTruthy();
    });

    it('should call notify without param and throw an error', function() {
        expect(function(){
          screamError = new Screamer();
        }).toThrow();
    });

    it('should call notify with title different than string', function() {
        expect(function(){
          screamError = new Screamer({'title': 123});
        }).toThrow();
    });
});

describe('Parameters:', function() {
    it("should instantiate the Screamer object with title and verify title", function() {
        screamObj = new Screamer({'title': 'Hello'});
        expect(screamObj.options.title).toEqual('Hello');
    });

    it("should instantiate the Screamer object with title with quotes and accents", function() {
        screamObj = new Screamer({'title': 'A matéria "teste" foi publicada.'});
        expect(screamObj.options.title).toEqual('A matéria "teste" foi publicada.');
    });

    it("should instantiate the Screamer object with body and icon", function() {
        options = {
          'title': 'hello',
          'body': 'world',
          'icon': '../example/ico_sucesso.png'
        };
        screamObj = new Screamer(options);
        expect(screamObj.options).toEqual(options);
    });
});
