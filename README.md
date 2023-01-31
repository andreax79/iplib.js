# iplib.js

IPlib.js is a JavaScript library very inspired by the IPlib python module useful
to convert amongst many different notations and to manage couples of
address/netmask in the CIDR notation.

# Copyright
    Copyright (c) 2012-2017 Endian S.p.A. <info@endian.com>
    Endian S.p.A.
    via Pillhof 47
    39057 Appiano (BZ)
    Italy

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

## CIDR

Create CIDR instances, same address, different styles:

```js
const c = new iplib.CIDR("192.168.0.0/24");
const d = new iplib.CIDR("192.168.0.0/255.255.255.0");
const e = new iplib.CIDR("11000000101010000000000000000000/24");
const f = new iplib.CIDR("11000000101010000000000000000000/255.255.255.0");
const g = new iplib.CIDR("11000000101010000000000000000000/11111111111111111111111100000000");

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
const c = new iplib.CIDR("192.168.0.0/24");
c.isValidIp("192.168.0.2");
```

Check if one CIDR is contained in another one.

```js
const c = new iplib.CIDR("192.168.0.0/24");
c.isValidIp("192.168.0.0/29");
```

Get all the IP addresses.

```js
const c = new iplib.CIDR("192.168.0.0/24");
for (const ip of c.getAllValidIp()) {
  console.log(ip);
}
```

## IPv4Address

Create IPv4Address instances, same address, different styles:
```js
const c = new iplib.IPv4Address("172.16.20.2");
const d = new iplib.IPv4Address("172.16.20.2", iplib.IP_DOT);
const e = new iplib.IPv4Address("10101100000100000001010000000010");
const f = new iplib.IPv4Address("10101100000100000001010000000010", iplib.IP_BIN);
const g = new iplib.IPv4Address(2886734850);
const h = new iplib.IPv4Address(2886734850, iplib.IP_DEC);

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
