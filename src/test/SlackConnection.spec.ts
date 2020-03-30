import {assert} from 'chai';
import SlackConnection from '../lib/SlackConnection';

describe('Unit Test - SlackConnection', () => {
    it('should assert obj is an instance of SlackConnection', () => {
        var obj = new SlackConnection('test-token');
        assert.instanceOf(obj, SlackConnection);
    });

    it('should always have a token set', () => {
        var obj = new SlackConnection('token');
        assert.isNotEmpty(obj.token);
    });

    it('should have a token of type String', () => {
        
    })
});