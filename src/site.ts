// Site-wide settings. Change these here; every page reads them.
export const SITE = {
  name: 'Senzz',
  url: 'https://senzz.org',
  supportEmail: 'senzzcorps@gmail.com',
  // Package id from the Android app (com.senzz.keyboard). Check it's live before launch.
  playUrl: 'https://play.google.com/store/apps/details?id=com.senzz.keyboard',
  playSubscriptionsUrl: 'https://play.google.com/store/account/subscriptions',
  description:
    'Senzz is an AI texting keyboard for Android. Suggest replies that fit the chat, Enhance your draft and catch fumbles before you hit send.',
};

export const mailto = (subject: string) =>
  `mailto:${SITE.supportEmail}?subject=${encodeURIComponent(subject)}`;
