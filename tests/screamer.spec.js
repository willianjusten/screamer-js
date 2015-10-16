// API stuff
describe("Support:", function() {
    it("should verify if browser supports Notification API", function(){
        expect(Screamer.verifySupport()).toBeTruthy();
    });
});

describe('Permissions:', function() {
    it("should checkPermission and it's granted", function(){
        expect(Screamer.checkPermission('granted')).toBeTruthy();
    });

    it("should checkPermission and it's denied", function(){
        expect(Screamer.checkPermission('denied')).toBeFalsy();
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

    it('should call notify with title different than string and throw an error', function() {
        expect(function(){
          screamError = new Screamer({'title': 123});
        }).toThrow();
    });
});

// test parameters
describe('Parameters:', function() {
    it("should instantiate the Screamer object with title and verify title", function() {
        screamObj = new Screamer({'title': 'Hello'});
        expect(screamObj.options.title).toEqual('Hello');
    });

    it("should instantiate the Screamer object with title with quotes and accents", function() {
        screamObj = new Screamer({'title': 'A matéria "teste" foi publicada.'});
        expect(screamObj.options.title).toEqual('A matéria "teste" foi publicada.');
    });

    it("should instantiate the Screamer object with many options and wait same options", function() {
        options = {
          'title': 'hello',
          'body': 'world',
          'icon': '../example/ico_sucesso.png'
        };
        screamObj = new Screamer(options);
        expect(screamObj.options).toEqual(options);
    });
});
