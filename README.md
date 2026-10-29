# Calcula Obra

Calculadoras de materiales de construcción para Perú. Sitio estático, sin backend y sin registro.

- **Stack:** Astro 7 + TypeScript, CSS propio.
- **GitHub Pages:** https://edumilla1994.github.io/calcula-obra/
- **Cloudflare:** https://calcula-obra.calcula-obra.workers.dev/
- **Cálculos:** en el navegador, con rendimientos típicos de obra.

## Calculadoras

| Ruta | Qué calcula |
|---|---|
| `/ladrillos/` | Unidades de ladrillo o bloque por pared, con junta y desperdicio |
| `/cemento/` | Bolsas de cemento, arena, piedra y agua por m³ de concreto |
| `/pintura/` | Litros, galones y baldes por área y manos |
| `/losetas/` | Unidades y cajas de cerámica o porcelanato |

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321/calcula-obra/
npm run build
npm run preview
```

## Pruebas

```bash
npm run test:e2e
```

El script usa Chromium de Playwright. Si tu ruta es distinta, define `CHROME_PATH` o ajusta `exe` en
`e2e.mjs`.

## Deploy

```bash
npm run deploy      # GitHub Pages
npm run deploy:cf   # Cloudflare Pages
```

## Variables de entorno

Copia `.env.example` como `.env`. El archivo no se sube al repositorio.

| Variable | Uso |
|---|---|
| `PUBLIC_GA_ID` | GA4 opcional, con consentimiento |
| `PUBLIC_GSC_VERIFICATION` | Verificación de Search Console |
| `PUBLIC_ADSENSE_CLIENT` / `PUBLIC_ADSENSE_SLOT` | Anuncios, cuando estén aprobados |

## Documentación

[`HANDOFF.md`](HANDOFF.md): contexto, decisiones y siguientes pasos.

## Aviso

Los cálculos son referenciales. No reemplazan un expediente técnico ni la asesoría de un ingeniero o
maestro de obra.

## Licencia

MIT.
