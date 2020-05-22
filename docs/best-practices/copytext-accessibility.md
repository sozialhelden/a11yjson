# Copytext accessibility, the opportunity you likely missed

If you design user interfaces, you know that written text in your product has a significant impact on its user experience: Crafting concise copytext is tricky, but worth it. Vice-versa: mediocre copytext or typography ruins an app's credibility. If your app plays a vital role for somebody, faulty wording might have consequences that ruin their day.

Even if you know a tad about accessibility labels, you might have missed the following simple opportunity to improve your copytext.

## Increase variance in titles

Product titles, service names, anything with a title: These words in your app can be the most crucial piece of information. Yet, most database models represent each name with one single string. Either this tring has a lot of details and keywords (if the SEO department won an argument), or is very short (if the UX/UI department wins).

For image uploads, alternative text input fields are beginning to appear. For example, on Twitter, you can add a caption text for an image you upload. Added captions make images more accessible - to humans and machines alike.

But why don't we routinely create multiple variants of a title itself? In the data model?

If you design the software for authoring this title content, nobody holds you back from displaying some input fields more. So if something in your data (let's say, a product) has a `title` attribute, how about letting your editors add variants of this `title`, too?

## Three fresh alternative strings for your consideration

### 1. Visually polished alternative text: `shortTitle`

This shortened name contains a shortcut, visually improved version of the original string. If you are lucky, there is a chance to auto-generated from the original extended title.

Go wild! Use Unicode or Emojis to shorten this version as much as possible, for example.

Having a short version of everything allows to fit more content on viewports. It yields uncluttered list UIs that are easy to parse visually. As you have variants, you can still show the variant with higher level of detail when needed.

### 2. Alternative text for text-to-speech: `ttsTitle`

This alternative text variant is made for text-to-speech assistants and search. Abbreviations are forbidden. You can't control the input data, but know the domain? Let the computer produce this alternative text: by replacing the most frequently used abbreviations from your business field with written words.

Why does this matter?

Abbreviations like the `shortTitle` proposal above make your UI easier to parse – but only visually. They break it for voice assistant users, though: While assistants do come with built-in intelligence to produce speech with a human-sounding intonation, they [lack awareness of meaning](https://accessibility.blog.gov.uk/2017/02/08/advice-for-creating-content-that-works-well-with-screen-readers/). To them, a full-stop character can look like a sentence end. Imagine a 'sentence end' intonation and spoken pause in the middle of a product name, or an actual sentence. The text won't make any sense.

If you want to realize a search feature or make your content accessible to a search engine, non-abbreviated content works much better. You can reuse the speakable alternative text as a tooltip. This helps your seeing users to understand what your abbreviations mean.

Including fully speakable variants of your text makes your content useful and discoverable for [Google Assistant](https://developers.google.com/search/docs/data-types/speakable), Amazon Alexa, Microsoft Cortana, Apple Siri, and [even for search engines in general](https://www.thedrum.com/news/2019/03/05/voice-search-optimisation-alexa-siri-and-cortana).

### 3. Plain language alternative text: `plainLanguageTitle`

Not everybody has the same level of language comprehension.

If you have titles describing complicated things: Do they exclude people who are no native speakers, have a learning impairment, or can't read? It can be a good idea to add a plain language variant in your data.

Alternatively, add a review step to your content authoring workflow to ensure that your strings are understandable.

## What does non-optimized copytext sound like?

Imagine you'd design a web-based, magic, but entirely realistic railway departures display.

The HTML code could look like this:

```html
<h1>King’s Cross</h1>
<ul>
    <li>Pl. 9 3/4 -> Hogsmeade</li>
    <li>Pl. 10 -> Eaglescliffe</li>
</ul>
```

Do you have a working sense of hearing? Then listen to a voice assistant reading this sign aloud. If you are near a Mac, open your Terminal app and enter this:

`say -v Dan "Pl. 9 3/4 -> Hogsmeade"`

Then press Enter. Experience the cringy but mystifying situation of a British passenger listening to their VoiceOver assistant, which states aloud: "Pee Ell Nine. Three Stroke Four to Hogsmeade." It sounds like an intriguing riddle! The pronunciation "Platform nine three quarters to Hogsmeade" would make more sense, however. It would assist the rider to reach the picturesque little village in time. 🧙‍♀️

With some typographic polishing and [accessibility labels](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute), we achieve a visual and auditory improvement:

```html
<h1>King’s Cross</h1>
<ul>
    <!-- Uses the `ttsTitle` field mentioned above -->
    <li aria-label="Platform Nine and Three Quarters, to Hogsmeade">
        <!-- Uses the `shortTitle` field mentioned above -->
        Pl. 9 3⁄4 → Hogsmeade
    </li>
    <li aria-label="Platform 10, to Eaglescliffe">
        Pl. 10 → Eaglescliffe
    </li>
</ul>
```

Of course, the data behind this has to be entered manually. Entering text twice or three times costs a more time for each entered title. But compare this to your other UX-related efforts: This change is reasonable and straightforward, and those seconds can save the day for a user!

By the way: A transit app developer building a *real* display like the one above would probably source the data from a public GTFS dataset (GTFS is the most common data format for public transit information). Did you know this data format supports text-to-speech variants of names and titles. A good idea to copy!

For voice assistants, there is [SSML, a markup language to describe how synthetic speech should sound like](https://developer.amazon.com/en-US/docs/alexa/custom-skills/speech-synthesis-markup-language-ssml-reference.html). A W3C task force wants to [bring pronunciation features to HTML](https://github.com/w3c/pronunciation/wiki). Both markup languages even allow to fine-tune the voice's emotion.

If voice assistants are about to play a bigger role in our daily lives, getting emotional tonality right could turn out to be a competitive advantage.

Now is a good time to prepare for this.
