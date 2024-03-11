# REQBRO

👋 Welcome to Reqbro!

## What is Reqbro?

Reqbro is a NodeJS app built to make interval requests to Render apps (or any service of your choosing) to prevent them from spinning down.

Consider Reqbro a friendly utility function to improve the user experience of your free tier apps using Render's services.

## Getting Started

Call the `reqbro` function and make sure you enter appropriate parameters.

### Parameters

1. url - The URL to the app you'd like to fetch.
2. interval - The interval (in ms) that you'd like between each request. A good number is 840000 as that would be 14 minutes. Render typically spins down your free tier apps after 15 minutes without a request 😉.

### Example Request

`reqbro('https://gcr-7rlp.onrender.com/', 3600000)`
