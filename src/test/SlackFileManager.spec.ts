import { assert, expect } from "chai";

import SFM from "../index";
import SlackConnection from "../lib/SlackConnection";

describe('Unit Test - SlackFileManager', () => {
    it('should create a new instance of SFM', () => {
        const sfm = new SFM('mytoken');
        assert.instanceOf(sfm, SFM)
    });

    it('should be able to update the token', () => {
        var sfm = new SFM('mytoken');
        expect(sfm.slack.token).to.equal('mytoken');
        sfm.changeToken('my-new-token');
        expect(sfm.slack.token).to.equal('my-new-token');
    });

    it('should be able to return a SlackConnection object', () => {
        var sfm = new SFM('mytoken');
        assert.instanceOf(sfm.slack, SlackConnection);
    });    
});

describe('Integration Test - SlackFileManager', () => {

});