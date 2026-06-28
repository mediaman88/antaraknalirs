import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  if (url.pathname.startsWith('/password') || url.pathname.startsWith('/_astro')) {
    return next();
  }
  if (context.cookies.get('auth')?.value !== 'ok') {
    return context.redirect('/password');
  }
  return next();
});
