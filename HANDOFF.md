# Handoff — Calcula Obra

> Documento para continuar el proyecto en una sesión nueva. Viene de la sesión de **Calcula Perú**
> del 28 de octubre de 2026.

## Qué es

Calculadoras de materiales de construcción para Perú. Sitio estático, sin backend, con los cálculos
en el navegador. Cuatro herramientas iniciales:

- **Ladrillos:** unidades por pared según tipo de ladrillo, junta y desperdicio.
- **Cemento y concreto:** bolsas, arena, piedra y agua por volumen y resistencia.
- **Pintura:** litros, galones y baldes por área y manos.
- **Losetas:** unidades y cajas por área y tamaño de loseta.

## De dónde viene

En la sesión de Calcula Perú se construyeron 10 calculadoras financieras, 21 páginas de ejemplos por
sueldo, GA4 con consentimiento y Search Console. El sitio quedó online en GitHub Pages y Cloudflare
Pages, pero **sin dominio propio y sin AdSense** (AdSense no aprueba `github.io`).

La conclusión de esa sesión fue:

1. AdSense necesita dominio propio; se compra cuando el nicho demuestre tracción.
2. Un solo sitio fuerte vale más que cinco dominios flojos.
3. El crecimiento real es SEO programático + difusión, no bots.
4. El siguiente nicho recomendado es **construcción y materiales** por su demanda long-tail real en
   Perú, baja competencia local y menor riesgo que salud o finanzas.

## Decisiones tomadas

- **Nicho:** construcción y materiales.
- **Modelo:** activo propio (contenido + AdSense/afiliados), no servicios ni freelance.
- **Carpeta:** `C:\Users\edumi\OneDrive\Desktop\Devue\PEnt\users\Code\calcula-obra`.
- **Stack:** Astro 7 estático, mismo patrón que Calcula Perú.
- **Deploy:** GitHub Pages (`/calcula-obra/`) y Cloudflare Pages (`calcula-obra.pages.dev`).
- **Diseño:** misma base que Calcula Perú, paleta terracota/marrón.
- **Dominio:** no comprar todavía. Validar con Search Console y comprar solo si hay impresiones.

## Estado actual

- Proyecto creado y con dependencias por instalar (`npm install`).
- Home con calculadora rápida de pintura, buscador y filtros.
- 4 calculadoras funcionando.
- Páginas legales: sobre, privacidad y contacto.
- Componentes de AdSense y consentimiento copiados y adaptados.
- **Pendiente:** instalar, compilar, probar y desplegar.

## Siguientes pasos, en orden

1. `npm install` y `npm run build` en esta carpeta.
2. Correr `npm run test:e2e` (ajustar la ruta de Chromium en `e2e.mjs` si hace falta).
3. Crear el repo `calcula-obra` en GitHub y desplegar con `npm run deploy`.
4. Crear el proyecto en Cloudflare Pages y desplegar con `npm run deploy:cf`.
5. Crear la propiedad en Search Console y enviar el sitemap.
6. Sumar 20–30 páginas de ejemplos por medida (`/ejemplos/ladrillos-20/`, `/ejemplos/pintura-40/`,
   etc.) con el mismo patrón de Calcula Perú.
7. Sumar las calculadoras que faltan: drywall, mortero, arena y piedra, presupuesto de obra.
8. Evaluar afiliados de ferreterías y una plantilla digital de presupuesto.
9. Recién entonces: dominio propio y AdSense.

## Cómo trabajar

```bash
cd C:\Users\edumi\OneDrive\Desktop\Devue\PEnt\users\Code\calcula-obra
npm install
npm run dev        # http://localhost:4321/calcula-obra/
npm run build
npm run test:e2e
npm run deploy     # GitHub Pages
npm run deploy:cf  # Cloudflare Pages
```

## Relación con Calcula Perú

- **Calcula Perú** queda online y estable, midiendo con GA4 y Search Console.
- **Calcula Obra** es un proyecto independiente, con su propio repo, su propio dominio futuro y su
  propia cuenta de Search Console.
- La plantilla (Astro + componentes + estilos) se reutiliza, pero los contenidos y las fórmulas son
  distintos.
- No mezclar cambios de un proyecto en el otro.

## Variables de entorno

Copiar `.env.example` como `.env` cuando existan las credenciales:

```bash
PUBLIC_GA_ID=
PUBLIC_GSC_VERIFICATION=
PUBLIC_ADSENSE_CLIENT=
PUBLIC_ADSENSE_SLOT=
```

## Aviso

Los cálculos son referenciales. No reemplazan un expediente técnico ni la asesoría de un ingeniero o
maestro de obra.
