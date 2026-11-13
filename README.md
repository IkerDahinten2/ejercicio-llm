# AI Token Audit

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Dashboard web para **estimar el costo de uso de modelos de lenguaje (LLM)** a partir del prompt enviado y la respuesta recibida. Calcula los tokens aproximados de entrada y salida y muestra la inversión en dólares según el modelo seleccionado.

---

## Características

- **Selector de modelos**: GPT-4.5, Claude 3.7 Sonnet, Gemini 1.5 Pro, Gemini 1.5 Flash y DeepSeek R1.
- **Estimación de tokens en tiempo real** mientras se escribe o pega texto (≈ 3.8 caracteres por token).
- **Desglose de costos**: costo de entrada, costo de salida e inversión total, con precisión de 4 decimales.
- **Interfaz moderna** con efecto *glassmorphism* (`backdrop-filter`), fondo con brillo y diseño responsivo.

## Tecnologías

| Capa | Tecnología |
|------|------------|
| Estructura | HTML5 |
| Estilos | CSS3 (variables, Flexbox/Grid, media queries) |
| Lógica | JavaScript (ES6+), `Intl.NumberFormat` |
| Tipografía | Google Fonts (Outfit, Space Grotesk) |

## Estructura del proyecto

```
ejercicio-llm/
├── index.html   # Estructura del dashboard
├── style.css    # Estilos y diseño responsivo
└── script.js    # Tabla de precios y cálculo de tokens/costos
```

## Cómo ejecutarlo

No requiere instalación ni dependencias.

```bash
git clone https://github.com/IkerDahinten2/ejercicio-llm.git
cd ejercicio-llm
```

Abre `index.html` en el navegador, o sirve la carpeta con un servidor local (por ejemplo, la extensión *Live Server* de VS Code).

## Cómo funciona el cálculo

```
tokens  = ceil(caracteres / 3.8)
costo   = (tokens / 1 000 000) × precio_por_millón
```

Los precios por millón de tokens (entrada / salida) están definidos en el objeto `modelPrices` de `script.js` y pueden actualizarse fácilmente.

> **Nota:** la cantidad de tokens es una estimación; cada proveedor usa su propio tokenizador.

## Flujo de ramas

| Rama | Propósito |
|------|-----------|
| `main` | Versión estable |
| `dev` | Integración de cambios |
| `frontend` | Desarrollo de la interfaz |

## Autor

**Iker Dahinten** — [@IkerDahinten2](https://github.com/IkerDahinten2)
