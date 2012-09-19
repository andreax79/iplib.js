# iplib.js

IPlib.js is a JavaScript library very inspired by the IPlib python module useful
to convert amongst many different notations and to manage couples of
address/netmask in the CIDR notation.

jQuery isn't required for this plugin, because nothing internal uses any jQuery methods.
jQuery is just used as a namespace under which these class can exist.

# Copyright
    Copyright (c) 2012 Endian
    Endian GmbH/Srl
    Bergweg 41 Via Monte
    39057 Eppan/Appiano
    ITALIEN/ITALIA
    info@endian.com

  IPlib.js is free software: you can redistribute it and/or modify
  it under the terms of the GNU Lesser General Public License as published
  by the Free Software Foundation, either version 2.1 of the License, or
  (at your option) any later version.

  IPlib.js is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public License
  along with IPlib.js.  If not, see <http://www.gnu.org/licenses/>. 

  Author: Andrea Bonomi <a.bonomi@endian.com>

# Usage

Include the JavaScript library in your HTML markup:

```
<script type="text/javascript" src="iplib.js"></script>
```

Optionally include jQuery. If you include jQuery, you have to use the $. prefix
before the iplib.js classes names.
All the examples assume you are using jQuery.

## CIDR

Create CIDR instances, same address, different styles:

```js
var c = new $.CIDR("192.168.0.0/24");
var d = new $.CIDR("192.168.0.0/255.255.255.0");
var e = new $.CIDR("11000000101010000000000000000000/24");
var f = new $.CIDR("11000000101010000000000000000000/255.255.255.0");
var g = new $.CIDR("11000000101010000000000000000000/11111111111111111111111100000000");

```

Compare the two CIDR object:

```js
c.equals(d)
```

Get the network IP, netmask, first IP, last IP, and broadcast address:

```js
c.getNetworkIp()
c.getNetmask()
c.getFirstIp()
c.getLastIp()
c.getBroadcastIp()
```

Get the number of IPs of the network:

```js
c.getIpNumber()
```

Get the CIDR IP address and netmask in different styles:
```js
c.ip.getDec() // e.g. 3232235520
c.ip.getDot() // e.g. 192.168.0.0
c.ip.getBin() // e.g. 11000000101010000000000000000000
c.nm.getDec() // e.g. 4294967040
c.nm.getDot() // e.g. 255.255.255.0
c.nm.getBit() // e.g. 11111111111111111111111100000000
c.nm.getBits() // e.g. 24
```

Check if the given address in amongst the usable addresses.

```js
var c = new $.CIDR("192.168.0.0/24");
c.isValidIp("192.168.0.2");
```

Check if one CIDR is contained in another one.

```js
var c = new $.CIDR("192.168.0.0/24");
c.isValidIp("192.168.0.0/29");
```

## IPv4Address

Create IPv4Address instances, same address, different styles:
```js
var c = new $.IPv4Address("172.16.20.2");
var d = new $.IPv4Address("172.16.20.2", $.IP_DOT);
var e = new $.IPv4Address("10101100000100000001010000000010");
var f = new $.IPv4Address("10101100000100000001010000000010", $.IP_BIN);
var g = new $.IPv4Address(2886734850);
var h = new $.IPv4Address(2886734850, $.IP_DEC);

```

Compare the two IPv4Address object:

```js
c.equals(d)
```

Get the IP address in different styles:
```js
c.ip.getDec() // e.g. 2886734850
c.ip.getDot() // e.g. 172.16.20.2
c.ip.getBin() // e.g. 10101100000100000001010000000010
```