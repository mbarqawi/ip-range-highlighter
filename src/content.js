// content.js

function highlightIPRanges() {
    const ipRangeRegex = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,2}\b/g;
    const bodyText = document.body.innerHTML;
    const matches = bodyText.match(ipRangeRegex);
  
    if (matches) {
      matches.forEach(ipRange => {
        const ipInfo = getIPRangeInfo(ipRange);
        const span = document.createElement("span");
        span.className = "ip-range";
        span.title = `First IP: ${ipInfo.firstIP}, Last IP: ${ipInfo.lastIP}`;
        span.textContent = ipRange;
  
        document.body.innerHTML = document.body.innerHTML.replace(ipRange, span.outerHTML);
      });
    }
  }
  
  function getIPRangeInfo(cidr) {
    const [range, bits] = cidr.split('/');
    const [a, b, c, d] = range.split('.').map(Number);
    const ip = (a << 24) | (b << 16) | (c << 8) | d;
    const mask = ~((1 << (32 - bits)) - 1);
    const firstIP = ip & mask;
    const lastIP = firstIP | ~mask;
    
    return {
      firstIP: `${(firstIP >>> 24) & 255}.${(firstIP >>> 16) & 255}.${(firstIP >>> 8) & 255}.${firstIP & 255}`,
      lastIP: `${(lastIP >>> 24) & 255}.${(lastIP >>> 16) & 255}.${(lastIP >>> 8) & 255}.${lastIP & 255}`
    };
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlightIPRanges);
  } else {
    highlightIPRanges();
  }
  