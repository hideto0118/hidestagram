import Raven from 'raven-js';

const sentry_key = 'de55e50ed890411fa91f088b1d44a910';
const sentry_app = '145445';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
