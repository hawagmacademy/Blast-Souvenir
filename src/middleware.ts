import { defineMiddleware } from "astro:middleware";
import { middleware } from "astro:i18n";

export const onRequest = defineMiddleware((context, next) => {
  return middleware({
    prefixDefaultLocale: true,
    redirectToDefaultLocale: false,
  })(context, next);
});
