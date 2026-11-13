const modelPrices = {
    gpt45: { input: 75.00, output: 150.00 },
    claude37: { input: 3.00, output: 15.00 },
    geminiPro: { input: 1.25, output: 10.00 },
    geminiFlash: { input: 0.15, output: 0.60 },
    deepseekR1: { input: 0.55, output: 2.19 }
};

const modelSelect = document.getElementById('model-select');
const promptIn = document.getElementById('prompt-input');
const responseIn = document.getElementById('response-input');

function updateAudit() {
    const model = modelSelect.value;
    const tokensIn = Math.ceil((promptIn.value.length) / 3.8);
    const tokensOut = Math.ceil((responseIn.value.length) / 3.8);

    document.getElementById('token-in-est').innerText = tokensIn.toLocaleString();
    document.getElementById('token-out-est').innerText = tokensOut.toLocaleString();

    const price = modelPrices[model];
    const cIn = (tokensIn / 1000000) * price.input;
    const cOut = (tokensOut / 1000000) * price.output;

    renderMoney('cost-in-display', cIn);
    renderMoney('cost-out-display', cOut);
    renderMoney('total-cost-display', cIn + cOut);
}

function renderMoney(id, val) {
    document.getElementById(id).innerText = new Intl.NumberFormat('en-US', {
        style: 'currency', currency: 'USD', minimumFractionDigits: 4
    }).format(val);
}

[modelSelect, promptIn, responseIn].forEach(el => el.addEventListener('input', updateAudit));
updateAudit();