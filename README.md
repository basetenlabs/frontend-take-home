# BaseTen Frontend Take-Home Challenge

For this challenge we are looking to implement a quick-search functionality that mimics
the macOS Spotlight feature. In case you are not familiar with this feature; it is a neat
little UI component that allows you to quickly search for relevant content based on a
search term you input.

Here is a screenshot of it in action.

<img width="792" alt="spotlight-1" src="https://user-images.githubusercontent.com/981800/137999694-d703e8e4-82c8-4b34-ae85-60ec732a0901.png">

For our challenge we are looking to replicate a similar functionality but in the browser
with React that searches against a predetermined list of objects.

## Setup

You will need to ensure you have `node` installed. If you need to install you can visit
https://nodejs.org/en/ and just download the LTS version.

You can then run `npm install` to install all dependencies required to run the app.

Once all dependencies are installed, you can start your dev process using

```
npm start
```

This should have taken you to the landing page with requirements/instructions required
to complete the challenge.

## API.js

To simulate API responses that you would receive from a server, there is an included
`API.js` file. This file includes a `search(<term>)` function that will return an array
of results given a `term`.

The dataset is just a simple collection of popular ML models. For your implementation
you can aim to represent the data in your implementation in something similar to this:

```
.-----------------------------------------------.
| <id> - by: <author>                    <type> |
| Updated: <modified date>                      |
`-----------------------------------------------`
```

This challenge is meant to be somewhat open-ended. Feel free to make assumptions and
unblock yourself. Just make sure to make a note of all the assumptions as code comments.