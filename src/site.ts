// Site-wide settings. Change these here; every page reads them.
export const SITE = {
  name: 'Senzz',
  supportEmail: 'senzzcorps@gmail.com',
  // Package id from the Android app (com.senzz.keyboard). Check it's live before launch.
  playUrl: 'https://play.google.com/store/apps/details?id=com.senzz.keyboard',
  playSubscriptionsUrl: 'https://play.google.com/store/account/subscriptions',
  description:
    'Senzz is an AI texting keyboard for Android. Suggest replies that fit the chat, Enhance your draft and catch fumbles before you hit send.',
};

// Internal link or public/ file under the site's base path: url('/faq') -> '/SenzzKEYBOARDWEB/faq'.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => BASE + path;

export const mailto = (subject: string) =>
  `mailto:${SITE.supportEmail}?subject=${encodeURIComponent(subject)}`;
