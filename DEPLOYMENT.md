# ELISE Landing - Deployment Guide

## 🚀 Despliegue en Vercel

Este proyecto está optimizado para Vercel con las siguientes configuraciones:

### Configuraciones Aplicadas:

1. **Compresión Máxima**
   - Bundle inicial: 348 KB → 91.89 KB transferido (73% de compresión)
   - Terser minification activado
   - CSS crítico inline
   - Tree-shaking automático

2. **Cache Optimizado**
   - Assets estáticos: 1 año de cache
   - JavaScript/CSS: Cache inmutable
   - HTML: Sin cache (siempre fresco)

3. **Headers de Seguridad**
   - X-Content-Type-Options
   - X-Frame-Options
   - X-XSS-Protection
   - Referrer-Policy

4. **SEO**
   - robots.txt configurado
   - Meta tags optimizados
   - Sitemap ready

### Pasos para Desplegar:

1. **Conecta tu repositorio a Vercel:**

   ```bash
   # Ya tienes el código en GitHub
   # Ve a vercel.com y conecta tu repo
   ```

2. **Configuración en Vercel:**
   - Framework Preset: **Angular**
   - Build Command: `ng build --configuration=production`
   - Output Directory: `dist/elise-landing/browser`
   - Install Command: `npm install`

3. **Variables de Entorno (si las necesitas):**

   ```
   NODE_VERSION=20.x
   ```

4. **Deploy:**
   - Vercel detectará automáticamente `vercel.json`
   - El deploy será automático en cada push a `main`

### Optimizaciones Adicionales en Vercel:

- ✅ Edge Network (CDN global)
- ✅ Compresión Brotli/Gzip automática
- ✅ HTTP/2 y HTTP/3
- ✅ SSL automático
- ✅ Image optimization (si usas Vercel Image)

### Lighthouse Score Esperado en Producción:

- **Performance**: 95-100 ⚡
- **Accessibility**: 98-100 ♿
- **Best Practices**: 100 ✅
- **SEO**: 100 🔍

### Comandos Útiles:

```bash
# Build de producción local
npm run build

# Preview del build
npx http-server dist/elise-landing/browser

# Analizar bundle size
npx webpack-bundle-analyzer dist/elise-landing/browser/stats.json
```

---

**Nota**: El proyecto ya está optimizado al máximo. Vercel aplicará compresión adicional automáticamente.
