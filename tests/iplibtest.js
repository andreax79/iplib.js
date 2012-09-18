(function () {
	"use strict";

	hiro.module("IPv4AddressTests", {
		testIPv4AddressConstuctors: function (test) {
			var c = new $.IPv4Address("1.2.3.4");
			test.assertEqual(c.getDec(), 16909060);
			test.assertEqual(c.getBin(), "00000001000000100000001100000100");
			test.assertEqual(c.getDot(), "1.2.3.4");
			var d = new $.IPv4Address("1.2.3.4", $.IP_DOT);
			var e = new $.IPv4Address(16909060, $.IP_DEC);
			var f = new $.IPv4Address("00000001000000100000001100000100", $.IP_BIN);
			test.assertTrue(c.equals(d));
			test.assertTrue(c.equals(e));
			test.assertTrue(c.equals(f));
		},
		
		testIPv4AddressEquals: function (test) {
			var c = new $.IPv4Address("1.2.3.4");
			var d = new $.IPv4Address("1.2.3.4");
			var e = new $.IPv4Address("1.2.3.5");
			test.assertTrue(c.equals(d));
			test.assertTrue(d.equals(c));
			test.assertFalse(e.equals(d));
			test.assertFalse(d.equals(e));			
		},
		
	});
	
	hiro.module("IPv4NetMaskTests", {
		testIPv4NetMaskConstuctors: function (test) {
			var c = new $.IPv4NetMask("255.255.255.0");
			test.assertEqual(c.getDec(), 4294967040);
			test.assertEqual(c.getBin(), "11111111111111111111111100000000");
			test.assertEqual(c.getDot(), "255.255.255.0");
			test.assertEqual(c.getBits(), 24);
			var d = new $.IPv4NetMask("255.255.255.0", $.IP_DOT);
			var e = new $.IPv4NetMask(4294967040, $.IP_DEC);
			var f = new $.IPv4NetMask("11111111111111111111111100000000", $.IP_BIN);
			var g = new $.IPv4NetMask(24, $.IP_BITS);
			var h = new $.IPv4NetMask(24);
			test.assertTrue(c.equals(d));
			test.assertTrue(c.equals(e));
			test.assertTrue(c.equals(f));
			test.assertTrue(c.equals(g));
			test.assertTrue(c.equals(h));
			c = new $.IPv4NetMask("255.255.255.255");
			test.assertEqual(c.getBits(), 32);
			c = new $.IPv4NetMask(8);
			test.assertEqual(c.getBits(), 8);
			c = new $.IPv4NetMask(0);
			test.assertEqual(c.getBits(), 0);
		},		
	});

	hiro.module("CIDRTests", {
		testCIDRConstuctors: function (test) {
			var c = new $.CIDR("192.168.0.0/24");
			var d = new $.CIDR("192.168.0.0/255.255.255.0");
			var e = new $.CIDR("192.79.0.0/32");
			var f = new $.CIDR("192.168.0.0/11111111111111111111111100000000");
			test.assertTrue(c.equals(d));
			test.assertTrue(d.equals(c));
			test.assertFalse(d.equals(e));
			test.assertTrue(d.equals(f));
			c = new $.CIDR("1.2.3.4/24");
			d = new $.CIDR("16909060/255.255.255.0");
			e = new $.CIDR("00000001000000100000001100000100/24");
			f = new $.CIDR("00000001000000100000001100000100/11111111111111111111111100000000");
			test.assertTrue(c.equals(d));
			test.assertTrue(d.equals(c));
			test.assertTrue(d.equals(e));
			test.assertTrue(d.equals(f));
		},

		testFirstIP: function (test) {
			var c = new $.CIDR("192.168.0.0/24");
			var i = new $.IPv4Address("192.168.0.1");
			test.assertTrue(c.getFirstIp().equals(i));
			c = new $.CIDR("192.168.0.79/32");
			i = new $.IPv4Address("192.168.0.79");
			test.assertTrue(c.getFirstIp().equals(i));
			c = new $.CIDR("192.168.0.0/31");
			i = new $.IPv4Address("192.168.0.0");
			test.assertTrue(c.getFirstIp().equals(i));
		},

		testLastIP: function (test) {
			var c = new $.CIDR("192.168.0.0/24");
			var i = new $.IPv4Address("192.168.0.254");
			test.assertTrue(c.getLastIp().equals(i));
			c = new $.CIDR("192.168.0.79/32");
			i = new $.IPv4Address("192.168.0.79");
			test.assertTrue(c.getLastIp().equals(i));
			c = new $.CIDR("192.168.0.0/31");
			i = new $.IPv4Address("192.168.0.1");
			test.assertTrue(c.getLastIp().equals(i));
		},

		testGetIpNumber: function (test) {
			var c = new $.CIDR("192.168.0.0/24");
			test.assertEqual(c.getIpNumber(), 254);
			c = new $.CIDR("1.2.3.4/8");
			test.assertEqual(c.getIpNumber(), 16777214);
			c = new $.CIDR("1.2.3.4/32");
			test.assertEqual(c.getIpNumber(), 1);
			c = new $.CIDR("1.2.3.4/31");
			test.assertEqual(c.getIpNumber(), 2);
			c = new $.CIDR("1.2.3.4/0");
			test.assertEqual(c.getIpNumber(), 4294967294);
		},

	});

})();
