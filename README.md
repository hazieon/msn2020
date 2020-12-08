# Debug Chat App Challenge

## Flow for each bug fix:

1. Recognise that there is bug which stops your app working as intended.
2. Investigate the code to assess where the source of the bug could be.
3. Identify the bug by running the code line by line until it is found.
4. Test fixes by changing code in the debug console and re-running.
5. Fix the bug in VScode and commit change to GitHub.
6. Review the debugged code: how could you refactor the code to make it more maintainable in the future?

## No errors, but things aren't as they should be...

Using debugging tools to inspect what's going on when the app runs, fix the following bugs in the app:

- Message should display in the chat when they are sent, including an alert when a user logs in for the first time.
- When a user logs in, their name should appear with a message that says they've logged in.
- Your own messages should appear on the right side of the chat window, and other users messages should appear on the left side.
- After sending a message that won't fit in the chat window, the app should scroll to the bottom of the chat window so that the message input remains visible.
- The correct date should be displayed as DD/MM/YYYY.
- Chat messages should be generated in descending order (newer messages at the bottom).

## Resources:

https://developers.google.com/web/tools/chrome-devtools/javascript/

https://developers.google.com/web/tools/chrome-devtools/javascript/reference

## Bonus Task:

- Refactor the app in light of the reviews from your debugging session so that it can be more easily tested.

## Bonus Bonus Task:

- Write tests which evidence the bugs have been fixed (make sure the tests fail if the bug appears again!)
