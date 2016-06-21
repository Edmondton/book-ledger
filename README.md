## Book Ledger — "isomorphic" web app

## Build / Run
```
#prereq npm 3, node v6
npm i
npm run start
open browser to http://localhost:3000/
```

## Usage Steps
1.  Bring up webpage
2.  Panel on left states the current balance and account status
3.  Panel on the right shows a journal entry section to enter new journal entries
    Debit account, amount, credit account, amount are required fields
4.  Once all required fields are entered, click submit to enter a new journal entry.
    If not all the required fields are entered, the user is showed error messages to enter the required fields.
5.  Table below shows all entries ordered by date.
6.  User has the ability to delete entries with the delete icon
    If necessary edit ability can come down the road

## Tests
```
npm run test
```

## Architecture
1.  React
2.  Redux
3.  Css modules + postcss
4.  ES6 + Babel
5.  React Test Utils, Enzyme, Mocha, Jasmine

### Learn More
  * [Getting Started with React.js](http://facebook.github.io/react/)
  * [Enzyme — JavaScript Testing utilities for React](http://airbnb.io/enzyme/)
  * [The Future of React](https://github.com/reactjs/react-future)
  * [Learn ES6](https://babeljs.io/docs/learn-es6/), [ES6 Features](https://github.com/lukehoban/es6features#readme)

