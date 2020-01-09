const assert = require('chai').assert;
const expect = require('chai').expect;

const SlackConnection = require('../lib/SlackConnection');

describe('Testing SlackConnection', () => {
    it('should assert obj is an instance of SlackConnection', () => {
        var obj = new SlackConnection('test-token');
        assert.instanceOf(obj, SlackConnection);
    });

    it('should be able to update the token after instantiation', () => {
        var obj = new SlackConnection('my-token');
        expect(obj.token).to.equal('my-token');
        obj.token = 'my-second-token'
        expect(obj.token).to.equal('my-second-token');
    });
});