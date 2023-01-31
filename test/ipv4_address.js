const assert = require('assert');
const iplib = require('../iplib');

describe('IPv4Address', function() {
    it('constructor and equal', function() {
        assert.equal(-1, [1,2,3].indexOf(4));
        const c = new iplib.IPv4Address("1.2.3.4");
        assert.equal(c.getDec(), 16909060);
        assert.equal(c.getBin(), "00000001000000100000001100000100");
        assert.equal(c.getDot(), "1.2.3.4");
        const d = new iplib.IPv4Address("1.2.3.4", iplib.IP_DOT);
        const e = new iplib.IPv4Address(16909060, iplib.IP_DEC);
        const f = new iplib.IPv4Address("00000001000000100000001100000100", iplib.IP_BIN);
        assert.ok(c.equals(d));
        assert.ok(c.equals(e));
        assert.ok(c.equals(f));
        const g = new iplib.IPv4Address("1.2.3.4");
        const h = new iplib.IPv4Address("1.2.3.4");
        const i = new iplib.IPv4Address("1.2.3.5");
        assert.ok(g.equals(h));
        assert.ok(h.equals(g));
        assert.ok(!i.equals(h));
        assert.ok(!h.equals(i));
        const j = new iplib.IPv4Address("192.168.0.1");
        assert.equal(j.getDec(), 3232235521);
        const k = new iplib.IPv4Address(j.getDec(), iplib.IP_DEC);
        assert.ok(j.equals(k));
    });
});
