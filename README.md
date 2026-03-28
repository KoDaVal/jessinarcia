# Jessi Narcia — RE/MAX Integral

Sitio web inmobiliario profesional con Next.js 14, App Router, SEO completo y diseño de lujo glassmorphism.

## 🚀 Setup Rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Desarrollo local
npm run dev

# 3. Build de producción
npm run build

# 4. Iniciar producción
npm start
```

## 📸 IMÁGENES — Lo que debes agregar

Coloca estos archivos en la carpeta `public/images/`:

| Archivo | Qué es | Tamaño recomendado |
|---|---|---|
| `hero.jpg` | Foto hero del inicio (la casa de lujo) | 2000×1200px min |
| `jessi-narcia.jpg` | Foto de Jessi para la sección "Sobre Mí" | 800×1000px (vertical 4:5) |
| `og-image.jpg` | Imagen para compartir en redes sociales | 1200×630px exacto |
| `placeholder-property.jpg` | Fallback si una propiedad no tiene foto | 1200×900px |
| `apple-touch-icon.png` | Ícono para iOS | 180×180px |
| `favicon.ico` | Favicon del sitio | 32×32px |

### De dónde sacar las imágenes originales:

- **hero.jpg** → Descarga de Unsplash: `https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000`
- **jessi-narcia.jpg** → Descarga de Google Drive: `https://drive.google.com/uc?id=1FCAePAcQ_4xwEy22BZDFkAF4_DYcPLnp`
- **og-image.jpg** → Crea una imagen con el nombre de Jessi + logo RE/MAX (Canva, Figma, etc.)
- **placeholder-property.jpg** → Cualquier foto genérica de casa

## ⚙️ Configuración

Edita `src/lib/constants.js`:

1. **`SITE_URL`** — Cambia a tu dominio real (ej: `https://jessinarcia.com`)
2. **Redes sociales** — Los links de Facebook e Instagram en `Navbar.jsx` y `Footer.jsx` están como `#`, cámbialos por los reales
3. **Google Search Console** — En `src/app/layout.jsx`, descomenta y agrega tu código de verificación

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── layout.jsx          ← Root layout (fonts, metadata, JSON-LD, providers)
│   ├── page.jsx            ← Página de inicio (Server Component)
│   ├── FeaturedGrid.jsx    ← Grid de destacadas (Client Component)
│   ├── globals.css         ← Estilos globales + glassmorphism
│   ├── sitemap.js          ← Sitemap dinámico
│   ├── robots.js           ← robots.txt
│   ├── not-found.jsx       ← Página 404 personalizada
│   ├── portafolio/
│   │   ├── page.jsx        ← Server: metadata + fetch propiedades
│   │   └── PropertiesClient.jsx  ← Client: filtros + grid interactivo
│   ├── sobre-mi/
│   │   └── page.jsx        ← Página Sobre Mí
│   └── contacto/
│       ├── page.jsx        ← Server: metadata
│       └── ContactForm.jsx ← Client: formulario → WhatsApp
├── components/
│   ├── Navbar.jsx          ← Navegación con next/link + usePathname
│   ├── Footer.jsx          ← Footer con links internos
│   ├── PropertyCard.jsx    ← Tarjeta con next/image
│   ├── PropertyModal.jsx   ← Modal detalle con carrusel
│   ├── PropertyModalProvider.jsx ← Context provider compartido
│   ├── FadeIn.jsx          ← Animación IntersectionObserver
│   ├── WhatsAppIcon.jsx    ← Ícono SVG memoizado
│   └── WhatsAppButton.jsx  ← Botón flotante
└── lib/
    ├── constants.js        ← Contacto, URLs, SEO keywords
    ├── parseCSV.js         ← Parser CSV (mismo del original)
    ├── fetchProperties.js  ← Fetch con ISR (revalidate: 300s)
    └── schemas.js          ← JSON-LD: RealEstateAgent, WebSite, ItemList
```

## 🔍 SEO Incluido

- ✅ Metadata por página (title, description, OpenGraph, Twitter Cards)
- ✅ JSON-LD estructurado (RealEstateAgent, WebSite, ItemList)
- ✅ Sitemap dinámico (`/sitemap.xml`)
- ✅ robots.txt (`/robots.txt`)
- ✅ `next/font` — Outfit + Playfair Display con `display: swap`
- ✅ `next/image` — Optimización automática con AVIF/WebP, lazy loading, sizes
- ✅ Canonical URLs
- ✅ Viewport + theme-color
- ✅ ISR — Las propiedades se revalidan cada 5 minutos
- ✅ Semantic HTML + aria-labels

## 🚢 Deploy a Vercel

```bash
# Opción 1: Desde CLI
npm i -g vercel
vercel

# Opción 2: Conecta el repo de GitHub en vercel.com
# Framework: Next.js (auto-detecta)
# Build: npm run build
# Output: .next
```

## 📋 Checklist Pre-Lanzamiento

- [ ] Agregar todas las imágenes a `public/images/`
- [ ] Cambiar `SITE_URL` en `constants.js` al dominio real
- [ ] Agregar links reales de Facebook e Instagram
- [ ] Crear y agregar `favicon.ico` y `apple-touch-icon.png`
- [ ] Agregar código de verificación de Google Search Console
- [ ] Probar build local: `npm run build && npm start`
- [ ] Deploy a Vercel
- [ ] Verificar en Google PageSpeed Insights
- [ ] Enviar sitemap a Google Search Console
