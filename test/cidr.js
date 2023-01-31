const assert = require('assert');
const iplib = require('../iplib');

describe('CIDR', function() {

    it('constructor and equal', function() {
        const c = new iplib.CIDR("192.168.0.0/24");
        const d = new iplib.CIDR("192.168.0.0/255.255.255.0");
        const e = new iplib.CIDR("192.79.0.0/32");
        const f = new iplib.CIDR("192.168.0.0/11111111111111111111111100000000");
        assert.ok(c.equals(d));
        assert.ok(d.equals(c));
        assert.ok(!d.equals(e));
        assert.ok(d.equals(f));
        const g = new iplib.CIDR("1.2.3.4/24");
        const h = new iplib.CIDR("16909060/255.255.255.0");
        const i = new iplib.CIDR("00000001000000100000001100000100/24");
        const j = new iplib.CIDR("00000001000000100000001100000100/11111111111111111111111100000000");
        assert.ok(g.equals(h));
        assert.ok(h.equals(g));
        assert.ok(h.equals(i));
        assert.ok(h.equals(j));
    });

    it('get first ip', function() {
        const c = new iplib.CIDR("192.168.0.0/24");
        const i = new iplib.IPv4Address("192.168.0.1");
        assert.ok(c.getFirstIp().equals(i));
        const d = new iplib.CIDR("192.168.0.79/32");
        const j = new iplib.IPv4Address("192.168.0.79");
        assert.ok(d.getFirstIp().equals(j));
        const e = new iplib.CIDR("192.168.0.0/31");
        const k = new iplib.IPv4Address("192.168.0.0");
        assert.ok(e.getFirstIp().equals(k));
    });

    it('get last ip', function() {
        const c = new iplib.CIDR("192.168.0.0/24");
        const i = new iplib.IPv4Address("192.168.0.254");
        assert.ok(c.getLastIp().equals(i));
        const d = new iplib.CIDR("192.168.0.79/32");
        const j = new iplib.IPv4Address("192.168.0.79");
        assert.ok(d.getLastIp().equals(j));
        const e = new iplib.CIDR("192.168.0.0/31");
        const k = new iplib.IPv4Address("192.168.0.1");
        assert.ok(e.getLastIp().equals(k));
    });

    it('get ip number', function() {
        const c = new iplib.CIDR("192.168.0.0/24");
        assert.equal(c.getIpNumber(), 254);
        const d = new iplib.CIDR("1.2.3.4/8");
        assert.equal(d.getIpNumber(), 16777214);
        const e = new iplib.CIDR("1.2.3.4/32");
        assert.equal(e.getIpNumber(), 1);
        const f = new iplib.CIDR("1.2.3.4/31");
        assert.equal(f.getIpNumber(), 2);
        const g = new iplib.CIDR("1.2.3.4/0");
        assert.equal(g.getIpNumber(), 4294967294);
    });

    it('get all valid ip', function() {
        const c = new iplib.CIDR("192.168.0.0/24");
        let count = 0;
        for (const ip of c.getAllValidIp()) {
            if (count == 0) {
                assert.ok(c.getFirstIp().equals(ip));
            } else if (count == c.getIpNumber() - 1) {
                assert.ok(c.getLastIp().equals(ip));
            }
            count++;
        }
        assert.equal(c.getIpNumber(), count);
    });

});
