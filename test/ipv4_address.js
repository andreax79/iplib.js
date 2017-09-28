var assert = require('assert');
var iplib = require('../iplib');

describe('IPv4Address', function() {
    it('constructor and equal', function() {
        assert.equal(-1, [1,2,3].indexOf(4));
        var c = new iplib.IPv4Address("1.2.3.4");
        assert.equal(c.getDec(), 16909060);
        assert.equal(c.getBin(), "00000001000000100000001100000100");
        assert.equal(c.getDot(), "1.2.3.4");
        var d = new iplib.IPv4Address("1.2.3.4", iplib.IP_DOT);
        var e = new iplib.IPv4Address(16909060, iplib.IP_DEC);
        var f = new iplib.IPv4Address("00000001000000100000001100000100", iplib.IP_BIN);
        assert.ok(c.equals(d));
        assert.ok(c.equals(e));
        assert.ok(c.equals(f));
        c = new iplib.IPv4Address("1.2.3.4");
        d = new iplib.IPv4Address("1.2.3.4");
        e = new iplib.IPv4Address("1.2.3.5");
        assert.ok(c.equals(d));
        assert.ok(d.equals(c));
        assert.ok(!e.equals(d));
        assert.ok(!d.equals(e));
    });
});
