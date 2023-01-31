const assert = require('assert');
const iplib = require('../iplib');

describe('IPv4NetMask', function() {
    it('constructor and equal', function() {
        const c = new iplib.IPv4NetMask("255.255.255.0");
        assert.equal(c.getDec(), 4294967040);
        assert.equal(c.getBin(), "11111111111111111111111100000000");
        assert.equal(c.getDot(), "255.255.255.0");
        assert.equal(c.getBits(), 24);
        const d = new iplib.IPv4NetMask("255.255.255.0", iplib.IP_DOT);
        const e = new iplib.IPv4NetMask(4294967040, iplib.IP_DEC);
        const f = new iplib.IPv4NetMask("11111111111111111111111100000000", iplib.IP_BIN);
        const g = new iplib.IPv4NetMask(24, iplib.IP_BITS);
        const h = new iplib.IPv4NetMask(24);
        assert.ok(c.equals(d));
        assert.ok(c.equals(e));
        assert.ok(c.equals(f));
        assert.ok(c.equals(g));
        assert.ok(c.equals(h));
        const i = new iplib.IPv4NetMask("255.255.255.255");
        assert.equal(i.getBits(), 32);
        const j = new iplib.IPv4NetMask(8);
        assert.equal(j.getBits(), 8);
        const k = new iplib.IPv4NetMask(0);
        assert.equal(k.getBits(), 0);
    });
});
