import * as actionType from './actionTypes';

/**
 * @param {*} error can be anything. Should be handled by the error receiver
 */
export const enqueueGlobalError = (error) => ({
  type: actionType.ENQUEUE_GLOBAL_ERROR,
  error,
});

export const dequeueGlobalError = () => ({
  type: actionType.DEQUEUE_GLOBAL_ERROR,
});

export default {
  enqueueGlobalError,
  dequeueGlobalError,
};
