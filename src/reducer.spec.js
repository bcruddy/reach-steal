import reducer, {getListName, getCssClass, getPickRound, init} from './reducer';

describe('src/reducer.js', () => {
    let initialState;
    let initAvailableCount;

    beforeEach(() => {
        initialState = JSON.parse(JSON.stringify(init)); // deep clone, Object.assign only clones top level properties
        initAvailableCount = initialState.available.length = 10; // cut this down to a number we can anticipate
    });

    describe('reducer()', () => {
        it('returns the initial state when given no arguments', () => {
            const state = reducer(initialState);

            expect(state.pick).toBe(1);
            expect(state.round).toBe(1);
            expect(state.overall).toBe(1);
            expect(state.available[0]).toEqual({
                rank: '1',
                name: 'David Johnson',
                team: 'ARI',
                pos: 'RB1',
                bye: '8',
                best: '1',
                worst: '2',
                avg: '1.2',
                stdDev: '0.4',
                ADP: '1.0',
                vsADP: '0.0',
                cssClass: ''
            });
            expect(state.drafted.length).toBe(0);
            expect(state.taken.length).toBe(0);
        });

        it('returns the correct state when drafting a player', () => {
            const state = reducer(initialState, 'PLAYER_DRAFTED', [0]);

            expect(state.pick).toBe(2);
            expect(state.round).toBe(1);
            expect(state.overall).toBe(2);
            expect(state.available.length).toBe(initAvailableCount - 1);
            expect(state.drafted.length).toBe(1);
            expect(state.taken.length).toBe(0);
        });

        it('returns the correct state when a player is taken', () => {
            const state = reducer(initialState, 'PLAYER_TAKEN', [0]);

            expect(state.pick).toBe(2);
            expect(state.round).toBe(1);
            expect(state.overall).toBe(2);
            expect(state.available.length).toBe(initAvailableCount - 1);
            expect(state.drafted.length).toBe(0);
            expect(state.taken.length).toBe(1);
        });
    });
});
