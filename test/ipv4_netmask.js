var assert = require('assert');
var iplib = require('../iplib');

describe('IPv4NetMask', function() {
    it('constructor and equal', function() {
        var c = new iplib.IPv4NetMask("255.255.255.0");
        assert.equal(c.getDec(), 4294967040);
        assert.equal(c.getBin(), "11111111111111111111111100000000");
        assert.equal(c.getDot(), "255.255.255.0");
        assert.equal(c.getBits(), 24);
        var d = new iplib.IPv4NetMask("255.255.255.0", iplib.IP_DOT);
        var e = new iplib.IPv4NetMask(4294967040, iplib.IP_DEC);
        var f = new iplib.IPv4NetMask("11111111111111111111111100000000", iplib.IP_BIN);
        var g = new iplib.IPv4NetMask(24, iplib.IP_BITS);
        var h = new iplib.IPv4NetMask(24);
        assert.ok(c.equals(d));
        assert.ok(c.equals(e));
        assert.ok(c.equals(f));
        assert.ok(c.equals(g));
        assert.ok(c.equals(h));
        c = new iplib.IPv4NetMask("255.255.255.255");
        assert.equal(c.getBits(), 32);
        c = new iplib.IPv4NetMask(8);
        assert.equal(c.getBits(), 8);
        c = new iplib.IPv4NetMask(0);
        assert.equal(c.getBits(), 0);
    });
});
