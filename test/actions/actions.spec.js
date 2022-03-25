import actions from '../../src/actions/actions.js';
import * as actionType from '../../src/actions/actionTypes.js';

describe('enqueueGlobalError()', () => {
    it('Should return an object with ' + actionType.ENQUEUE_GLOBAL_ERROR, () => {
        const result = actions.enqueueGlobalError('Error');

        expect(result).toEqual(
            expect.objectContaining({
                type: actionType.ENQUEUE_GLOBAL_ERROR
            })
        );
    });

    it('Should return an object with an error', () => {
        const result = actions.enqueueGlobalError('Error');

        expect(result).toEqual(
            expect.objectContaining({
                error: 'Error'
            })
        );
    });
});

describe('dequeueGlobalError()', () => {
    it('Should return an object with ' + actionType.DEQUEUE_GLOBAL_ERROR, () => {
        const result = actions.dequeueGlobalError('Error');

        expect(result).toEqual(
            expect.objectContaining({
                type: actionType.DEQUEUE_GLOBAL_ERROR
            })
        );
    });
});
