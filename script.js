/**
 * Auditoría de costos de tokens para modelos de lenguaje.
 * Estima los tokens a partir de la cantidad de caracteres y calcula el costo
 * según el precio por millón de tokens de cada modelo.
 */

// Precios en USD por millón de tokens (entrada / salida).
// Son valores de referencia: actualízalos junto con PRICES_UPDATED.
const PRICES_UPDATED = '2025';
const MODEL_PRICES = {
    gpt45: { input: 75.00, output: 150.00 },
    claude37: { input: 3.00, output: 15.00 },
    geminiPro: { input: 1.25, output: 10.00 },
    geminiFlash: { input: 0.15, output: 0.60 },
    deepseekR1: { input: 0.55, output: 2.19 }
};

// Promedio aproximado de caracteres por token en texto en español/inglés
const CHARS_PER_TOKEN = 3.8;
const TOKENS_PER_MILLION = 1_000_000;

const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 4 });
const integer = new Intl.NumberFormat('es-GT');

const el = {
    model: document.getElementById('model-select'),
    prompt: document.getElementById('prompt-input'),
    response: document.getElementById('response-input'),
    tokensIn: document.getElementById('token-in-est'),
    tokensOut: document.getElementById('token-out-est'),
    costIn: document.getElementById('cost-in-display'),
    costOut: document.getElementById('cost-out-display'),
    total: document.getElementById('total-cost-display'),
    note: document.getElementById('pricing-note')
};

const estimateTokens = text => Math.ceil(text.length / CHARS_PER_TOKEN);
const cost = (tokens, pricePerMillion) => (tokens / TOKENS_PER_MILLION) * pricePerMillion;

function updateAudit() {
    const price = MODEL_PRICES[el.model.value];
    if (!price) return;

    const tokensIn = estimateTokens(el.prompt.value);
    const tokensOut = estimateTokens(el.response.value);
    const costIn = cost(tokensIn, price.input);
    const costOut = cost(tokensOut, price.output);

    el.tokensIn.textContent = integer.format(tokensIn);
    el.tokensOut.textContent = integer.format(tokensOut);
    el.costIn.textContent = money.format(costIn);
    el.costOut.textContent = money.format(costOut);
    el.total.textContent = money.format(costIn + costOut);
}

el.note.textContent = `Precios de referencia (${PRICES_UPDATED}) por millón de tokens. Los tokens son una estimación: cada proveedor usa su propio tokenizador.`;
[el.model, el.prompt, el.response].forEach(input => input.addEventListener('input', updateAudit));
updateAudit();
