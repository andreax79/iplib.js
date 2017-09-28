var assert = require('assert');
var iplib = require('../iplib');

describe('CIDR', function() {

    it('constructor and equal', function() {
        var c = new iplib.CIDR("192.168.0.0/24");
        var d = new iplib.CIDR("192.168.0.0/255.255.255.0");
        var e = new iplib.CIDR("192.79.0.0/32");
        var f = new iplib.CIDR("192.168.0.0/11111111111111111111111100000000");
        assert.ok(c.equals(d));
        assert.ok(d.equals(c));
        assert.ok(!d.equals(e));
        assert.ok(d.equals(f));
        c = new iplib.CIDR("1.2.3.4/24");
        d = new iplib.CIDR("16909060/255.255.255.0");
        e = new iplib.CIDR("00000001000000100000001100000100/24");
        f = new iplib.CIDR("00000001000000100000001100000100/11111111111111111111111100000000");
        assert.ok(c.equals(d));
        assert.ok(d.equals(c));
        assert.ok(d.equals(e));
        assert.ok(d.equals(f));
    });

    it('get first ip', function() {
        var c = new iplib.CIDR("192.168.0.0/24");
        var i = new iplib.IPv4Address("192.168.0.1");
        assert.ok(c.getFirstIp().equals(i));
        c = new iplib.CIDR("192.168.0.79/32");
        i = new iplib.IPv4Address("192.168.0.79");
        assert.ok(c.getFirstIp().equals(i));
        c = new iplib.CIDR("192.168.0.0/31");
        i = new iplib.IPv4Address("192.168.0.0");
        assert.ok(c.getFirstIp().equals(i));
    });

    it('get last ip', function() {
        var c = new iplib.CIDR("192.168.0.0/24");
        var i = new iplib.IPv4Address("192.168.0.254");
        assert.ok(c.getLastIp().equals(i));
        c = new iplib.CIDR("192.168.0.79/32");
        i = new iplib.IPv4Address("192.168.0.79");
        assert.ok(c.getLastIp().equals(i));
        c = new iplib.CIDR("192.168.0.0/31");
        i = new iplib.IPv4Address("192.168.0.1");
        assert.ok(c.getLastIp().equals(i));
    });

    it('get ip number', function() {
        var c = new iplib.CIDR("192.168.0.0/24");
        assert.equal(c.getIpNumber(), 254);
        c = new iplib.CIDR("1.2.3.4/8");
        assert.equal(c.getIpNumber(), 16777214);
        c = new iplib.CIDR("1.2.3.4/32");
        assert.equal(c.getIpNumber(), 1);
        c = new iplib.CIDR("1.2.3.4/31");
        assert.equal(c.getIpNumber(), 2);
        c = new iplib.CIDR("1.2.3.4/0");
        assert.equal(c.getIpNumber(), 4294967294);
    });

});
