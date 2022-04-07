# Redux Global Error Queue

## Installation

```
npm install ValueConnect/redux-global-error-queue
```

## Setup

### Adding reducer to Store

This example uses redux's `createStore()` function to create a store. You should add the `globalErrorQueue` wherever you initialize your reducers.

```javascript
import {combineReducers, createStore} from 'redux';
import {globalErrorQueue} from 'redux-global-error-queue';

const rootReducer = combineReducers({
    globalErrorQueue
});

return createStore(rootReducer, ...);
```

## Usage

### Adding a global error

```javascript
import store from 'store.js'; // Your Redux store
import {enqueueGlobalError} from 'redux-global-error-queue';

store.dispatch(enqueueGlobalError('There is an error!'));
```

### Removing a global error

```javascript
import store from 'store.js'; // Your Redux store
import {dequeueGlobalError} from 'redux-global-error-queue';

store.dispatch(dequeueGlobalError());
```
## Versioning

This package follows [NPM's guide](https://docs.npmjs.com/about-semantic-versioning) on semantic versioning.
