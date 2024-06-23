document.addEventListener('DOMContentLoaded', () => {
    const addRangeButton = document.getElementById('add-range');
    const analyzeButton = document.getElementById('analyze-ranges');
    const ipRangeInputs = document.getElementById('ip-range-inputs');
    const resultsTableBody = document.querySelector('#results-table tbody');

    addRangeButton.addEventListener('click', addIpRangeInput);
    analyzeButton.addEventListener('click', analyzeIpRanges);

    ipRangeInputs.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-range')) {
            event.target.parentElement.remove();
        }
    });

    function addIpRangeInput() {
        const div = document.createElement('div');
        div.classList.add('ip-range');
        div.innerHTML = `
            <input type="text" class="ip-range-input" placeholder="Enter IP range (e.g., 192.168.1.0/24)">
            <button class="remove-range">&times;</button>
        `;
        ipRangeInputs.appendChild(div);
    }

    function analyzeIpRanges() {
        const ipRanges = Array.from(document.querySelectorAll('.ip-range-input')).map(input => input.value);
        const results = ipRanges.map(range => getIpRangeInfo(range));
        displayResults(results);
    }

    function getIpRangeInfo(cidr) {
        const [range, bits] = cidr.split('/');
        const [a, b, c, d] = range.split('.').map(Number);
        const ip = (a << 24) | (b << 16) | (c << 8) | d;
        const mask = ~((1 << (32 - bits)) - 1);
        const firstIP = ip & mask;
        const lastIP = firstIP | ~mask;
        const size = Math.pow(2, (32 - bits));

        return {
            range: cidr,
            firstIP: formatIp(firstIP),
            lastIP: formatIp(lastIP),
            size: size
        };
    }

    function formatIp(ip) {
        return `${(ip >>> 24) & 255}.${(ip >>> 16) & 255}.${(ip >>> 8) & 255}.${ip & 255}`;
    }

    function displayResults(results) {
        resultsTableBody.innerHTML = '';
        results.forEach(result => {
            const tr = document.createElement('tr');
            const overlap = checkOverlap(result, results);

            tr.innerHTML = `
                <td>${result.range}</td>
                <td>${result.firstIP}</td>
                <td>${result.lastIP}</td>
                <td>${result.size}</td>
                <td>${overlap ? 'Yes' : 'No'}</td>
            `;
            resultsTableBody.appendChild(tr);
        });
    }

    function checkOverlap(current, results) {
        for (let result of results) {
            if (result === current) continue;
            if (ipToNumber(current.firstIP) <= ipToNumber(result.lastIP) &&
                ipToNumber(current.lastIP) >= ipToNumber(result.firstIP)) {
                return true;
            }
        }
        return false;
    }

    function ipToNumber(ip) {
        return ip.split('.').reduce((ipInt, octet) => {
            return (ipInt << 8) + parseInt(octet, 10);
        }, 0);
    }
});
