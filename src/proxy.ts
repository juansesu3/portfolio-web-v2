import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const supportedLocales = ['en', 'es', 'fr', 'de'];
const defaultLocale = 'en';

const intlMiddleware = createMiddleware({
  locales: supportedLocales,
  defaultLocale,
});

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Redirigir desde la raíz '/' al locale predeterminado
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}/`, req.url));
  }

  // Permitir el acceso a recursos estáticos y rutas internas de Next.js (_next)
  const staticFiles = ['/favicon.ico', '/_next', '/static', '/fonts', '/images', '/messages'];
  if (staticFiles.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Usa el middleware de internacionalización para manejar el resto de las rutas
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    '/', // Redirigir la raíz
    '/:locale(en|es|fr|de|it)', // Locales principales
    '/:locale(en|es|fr|de|it)/shop', // Específicamente para /shop
    '/:locale(en|es|fr|de|it)/:path*', // Todas las subrutas
  ],
};