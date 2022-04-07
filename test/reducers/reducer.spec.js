import globalErrorQueue from '../../src/reducers/reducer.js';
import globalErrorActions from '../../src/actions/actions.js';

describe('globalErrorQueue()', () => {
  it('Should return an array with an error at the bottom of the queue when an error is enqueued', () => {
    const newState = globalErrorQueue(['Error1!'], globalErrorActions.enqueueGlobalError('Error2!'));
    expect(newState).toEqual(['Error1!', 'Error2!']);
  });

  it('Should return an array with an error removed from the top of the queue when an error is dequeued', () => {
    const newState = globalErrorQueue(['Error1!', 'Error2!'], globalErrorActions.dequeueGlobalError());
    expect(newState).toEqual(['Error2!']);
  });

  it('Should always return a completely new array to trigger Redux rerender', () => {
    const oldState = ['Error1', 'Error2', { status: 500, message: 'This is an error' }];

    // dequeue
    let newState = globalErrorQueue(oldState, globalErrorActions.dequeueGlobalError());
    expect(newState).not.toEqual(oldState);

    // enqueue
    newState = globalErrorQueue(oldState, globalErrorActions.enqueueGlobalError('Error2!'));
    expect(newState).not.toEqual(oldState);
  });
});
