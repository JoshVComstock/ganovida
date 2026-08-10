# GanoVida — contexto del proyecto

- E-commerce Next.js 14 (App Router) + TypeScript + Tailwind, **mobile-first**.
- Tienda de un **distribuidor DXN independiente en Bolivia**. NO es el sitio oficial de DXN.
- Objetivo real del sitio: **captar afiliados** para la red, además de vender producto.
- Pedidos por **WhatsApp**; pago por **QR o contra entrega (COD)**. Sin pasarela de pago.
- El **precio afiliado NO se muestra** abierto: solo el "ahorro" como gancho (`Afíliate y ahorra Bs. XX`, en dorado).
- **Sin afirmaciones médicas** en ningún texto (hablar de bienestar, energía, hábitos).
- Datos en arrays tipados (`src/data`); capa de datos abstraída en `src/lib/data.ts` para migrar a backend luego.
- Config del negocio en `src/lib/config.ts` (lee de `.env.local`; ver `.env.local.example`).
- Helpers de WhatsApp en `src/lib/whatsapp.ts`.
- Imágenes: placeholder gris hasta cargar fotos reales en `/public/images/products/`. Componente `<ProductImage />` con fallback.
- Stubs de API en `src/app/api/{affiliates,orders,upload}` listos para Fase 2 (backend).

## Estructura

- `src/app` → rutas: `/`, `/productos`, `/productos/[slug]`, `/afiliados`, `/como-comprar`, `/nosotros`, `/api/*`.
- `src/components/{layout,ui,home,product,affiliate}` → componentes.
- `src/data` → `products.ts`, `navigation.ts`. `src/lib` → `config.ts`, `data.ts`, `whatsapp.ts`.

## Antes de commitear

- `npm run build` debe pasar sin errores.
