var d = new Date();
var h = d.getHours();

const ProxyDay   = ' 利刃';
const ProxyNight = ' 搬瓦工';

if (h >= 21 || h <1) {
    var ProxyNewPolicy = ProxyNight;
} else {
    var ProxyNewPolicy = ProxyDay;
}

$surge.setSelectGroupPolicy(' 🐈 自建节点', ProxyNewPolicy);
$notification.post("Script called", "ProxySwitch.js", "' 🐈 自建节点' switched to '" + ProxyNewPolicy + "'");
console.log("ProxySwitch.js script: ' Proxy' switched to '" + ProxyNewPolicy + "'");

$done();