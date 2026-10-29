# Privacy Policy

Version 1.1 · Effective 29 October 2026 · Last updated 29 October 2026

This policy explains what Senzz Keyboard ("Senzz", "we") does with your information: what is processed, why, where it is kept, for how long, and how you control it. It covers the Senzz Android app, including the Senzz keyboard and its AI features. Please also read the [Terms of Service](terms).

## The short version

- What you type with Senzz stays on your phone. Your draft is sent to our server only when you tap Enhance or when Fumble Protection checks it as you press Send.
- Senzz takes a screenshot of the chat only when you tap Suggest or Fumble check, only if you have turned on Conversation analysis, and only of the app you are typing in.
- Senzz does not store or log the text or screenshots you send for AI. They go to our AI provider for that one request.
- No ads, no analytics or tracking tools, and we do not sell your data.
- You can delete your account and its data in the app at any time.

## 1. Your account

To use the AI features you need a Senzz account. Accounts are run by our backend provider, Supabase.

- **Email sign-up:** your email address and password. The password is stored only as a secure hash, never in readable form. We email you 6-digit codes to confirm your address and to reset your password.
- **Google sign-in:** your Google account's email address, its account identifier, and the basic profile details Google shares when you sign in, such as your name and profile picture link.
- **Sign-in records:** when your account was created and last signed in. For each signed-in session Supabase keeps the IP address and device/browser description it saw.

Why: to create your account, sign you in, keep it secure and attach your credits and subscription to it.

## 2. Credits and Senzz Pro

- **Credit records:** your plan (Free or Pro), when Pro ends, and a record of each credit change: the amount, the reason (for example the welcome grant, an AI action, a refund or a Pro refill), which feature was used (Suggest, Enhance or Fumble check) and when. These records never contain the text you sent.
- **Request records:** a random ID for each AI request, whether it was charged or refunded, and when. These let us charge each request exactly once and refund failures. They contain no text.
- **Welcome credits:** to give the 20 free credits only once per email inbox, we keep a one-way hash of your normalised email address (for example, ignoring "+tags" and, for Gmail, dots).
- **Subscriptions:** payment is handled entirely by Google Play. We never see your card or payment details. When you buy or restore Senzz Pro, the app sends us the purchase token Google Play gives it. Our server checks it with Google and stores the token, product, order ID, expiry time and whether it is active. Your Senzz account ID is attached to the purchase in Google Play so that it can't be used by another account.

Why: to run the credit system, to prevent abuse of free credits and to provide the Pro subscription you paid for.

## 3. Text you send for AI

The AI features run only when you tap them. Nothing is sent as you type, and no AI request is ever made for a single keystroke. AI is turned off in password fields, incognito fields (fields that ask the keyboard not to learn), number, phone and date fields, and email address fields.

When you tap an action, the app sends our server the following, along with your chosen tone, reply language and number of replies:

- **Suggest:** a screenshot of the chat you are replying in (see section 4). It shows everything visible in that app at that moment: both people's messages, names and profile pictures shown in the chat, and any draft in its text box.
- **Enhance:** the draft in the text field (at most 4,000 characters).
- **Fumble check (the shield):** a screenshot of the chat, as for Suggest, so the whole visible conversation can be reviewed.
- **Fumble Protection (when you press Send with it on):** the draft in the text field (at most 4,000 characters).

Our server (a Supabase Edge Function) forwards the text or screenshot to [OpenRouter](https://openrouter.ai/privacy), which routes it to the AI model we use, currently provided by OpenAI. The answer comes back to your keyboard. Senzz does not save the text or screenshot in its database or on your phone, and our server logs record only the type of action, the result code and how long it took, never the content. OpenRouter and the model provider process it under their own terms and privacy policies, which may include temporary retention, for example for abuse monitoring.

Why: to write the replies, improvements, reviews or warnings you asked for.

## 4. Conversation analysis (Accessibility)

Suggest and Fumble check can see the chat you are replying to. This uses an Android Accessibility service called "Senzz chat reading". It is off until you allow it. Senzz first explains it in the app, then Android asks you to switch it on.

When it is on:

- It takes a screenshot only at the moment you tap Suggest or Fumble check, and only if the window on screen belongs to the app you are typing in. It does not watch the screen in the background.
- The screenshot covers only that app's window above the keyboard. On Android 14 and newer, Android captures that one window, so the keyboard, other apps, notifications and the status bar are never in it. On Android 11 to 13, Android captures the whole screen and Senzz crops it to that app's window above the keyboard before sending it.
- Apps that block screenshots (for example banking apps) can't be captured, and Senzz says so. Suggest and Fumble check are not available while you type in password, number, phone or email fields, or in fields that ask the keyboard not to learn.
- The screenshot is shrunk, kept in memory only while your replies are open (so Regenerate and tone changes don't take a new one), and sent only as described in section 3. It is discarded when you switch fields or apps, and is never saved to your phone's storage or our servers.
- A Fumble check's screenshot is used for that one review only.
- Suggest and Fumble check need Android 11 or newer.

You can turn it off at any time in Senzz Settings › Conversation analysis or in Android's Accessibility settings. Senzz still works as a keyboard without it.

## 5. Data kept only on your phone

- **Keystrokes:** typing, autocorrect and the dictionary all work on your phone and are not sent anywhere.
- **Clipboard history:** text you copy while Senzz is your keyboard, encrypted with a key held by Android's Keystore. Clips marked sensitive, and clips copied while an incognito field is open, are never saved. Unpinned clips are deleted after 1 hour (at most 20 are kept). Pinned clips (up to 50) stay until you delete them. You can clear everything in Settings › Clear clipboard history. Clipboard history is excluded from Android backups.
- **Learned words:** when you undo an autocorrection, Senzz remembers that word so it isn't corrected again (never from incognito fields). It also stores your recent emoji.
- **Settings:** your preferences (tone, language, theme, keyboard options and your Conversation analysis consent). These may be included in your Android device backup if backups are on.
- **Sign-in session:** a token that keeps you signed in.

## 6. Who we share data with

We share data only with the service providers needed to run Senzz:

- **Supabase** (accounts, database and server functions): [Supabase Privacy Policy](https://supabase.com/privacy)
- **OpenRouter** and the AI model provider it routes to, currently OpenAI (the text and screenshots from AI actions, as in section 3): [OpenRouter Privacy Policy](https://openrouter.ai/privacy), [OpenAI Privacy Policy](https://openai.com/policies/privacy-policy)
- **Google** (Google sign-in, if you use it, and Google Play billing): [Google Privacy Policy](https://policies.google.com/privacy)

We don't sell your data, share it with advertisers or use it for ads. We may disclose information if the law requires it.

## 7. Where your data is stored

Account and credit data is stored in a Supabase database hosted on Amazon Web Services. Our AI providers may process text in other countries, including the United States. Data is sent over encrypted (HTTPS) connections.

## 8. How long we keep it

- **Account, credit, request and subscription records:** until you delete your account.
- **Text and screenshots sent for AI:** not stored by Senzz. Our providers keep them only as their own policies allow (section 3).
- **The welcome-credit email hash and the account ID it was claimed by:** kept after deletion so the free credits can't be claimed again.
- **Server logs:** kept for the period set by our hosting provider. Database backups may contain deleted data until they expire.
- **Google Play:** keeps its own purchase records under Google's policies.
- **On your phone:** as described in section 5, until you delete it or uninstall Senzz.

## 9. Your choices and rights

- **Delete your account:** in Settings › Data controls › Delete your account. This immediately and permanently deletes your account, your credits, and your request, subscription and billing records from our servers. On your phone it signs you out and clears clipboard history and settings. Learned words and recent emoji stay on the phone until you clear Senzz's storage or uninstall it. Deleting your account does not cancel a Google Play subscription: cancel it in Google Play.
- **Stop chat screenshots:** turn off Conversation analysis at any time.
- **Clear clipboard history:** Settings › Clear clipboard history.

## 10. Security

Our AI and database keys stay on our servers and are never in the app. Each account can read only its own credit records, and only our server can change credits. The clipboard history on your phone is encrypted. No system is perfectly secure, but we work to protect your information.

## 11. Changes to this policy

When we change this policy, we will update the version and date above and, for significant changes, tell you in the app.
