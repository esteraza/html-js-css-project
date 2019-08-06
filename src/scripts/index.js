/*
*
* Use the following endpoint using the window.fetch api to get a collection of jobs back
* http://api.dataatwork.org/v1/jobs/autocomplete?contains=engineer
*
* The query part should come from an input you have in your html
* (need to attach an event to it using window.addEventListener)
* 1. keep first 10 results and add them to your page
* 2. every request/response should replace the current results
* 3. Build your layout using what we have learned about flex layout
* 	and even absolute positioning. use sass and you can get inspirations for design from dribble.com
* 	don't hang on to design so much.
* 4. Bonus - use a debounce mechanism that takes care if rapid requests being sent
* (i.e don't send a request on each key stroke)
* */
