# README

Welcome to HackBU's annual hackathon's landing page's README!

This repository constains all the source code for our hackathon's landing page. To cool thing about this website is that it is very easily configurable! Lemme show you how.

## Running the website

Here's just a brief intro to run get started running this website.

Make sure you have `npm` and/or `yarn` installed.

Then make sure you also have NextJS and React installed properly.

After cloning the repo, type `yarn && yarn run dev` to open up the dev environment. Then go to `localhost:3000/2022`, or whatever the open port is. You also need to make sure you're actually inside `/2022`, or whatever it is configured to for that year.

## Theming

Every year, HackBU likes to pick colors for our hackathons, which we use as our branding for the year on t-shirts, sticks, and, well, this website! So to theme our website to match this year's colors, go to the `styles` directory, and open up `globals.css`.

Inside of this file, you will see some CSS that looks something like this:

```css
:root {
  --background-color: #302113;
  --background-color-secondary: rgba(12, 8, 4, 0.75);
  --accent-color: #e2b724;
  --accent-color-transparent: #e2b62442;
  --text-color: white;
  --text-accent-color: #f5eacf;
  --divider-line-color: rgba(255, 255, 255, 0.062);
}
```

To start theming, all you need to do is change the HEX colors and RBG color codes to whatever you like.

If you have the dev environment up and running, you should be able to see you website changing as soon as you hit save!

### Changing content

In the event that no one on the organizer team is comfortable with React, there is also a `constants.js` file, which just uses JSON to store all of the text and images that may change year to year. You can find this file under the `public/constants.js` directly, and can change important details such as the main body text, the frequently asked questions, as well as the sponsors. For images, you may need to update the imports for each sponsor, but it should be fairly self-explanatory if you take a look at the file.

## The End

If any of you organizers do know React or NextJS, please help out by making meaningful updates to the website!
