import {standard} from '../data/rankings.json';

const init = {
    available: standard,
    drafted: [],
    taken: []
};

export default function reducer (_state = init, action, args) {
    const state = Object.assign({}, _state);
    let index, picked;

    switch (action) {
        case 'PLAYER_DRAFTED':
            [index] = args;
            [picked] = state.available.splice(index, 1);

            state.drafted.push(picked);

            return state;
        case 'PLAYER_TAKEN':
            [index] = args;
            [picked] = state.available.splice(index, 1);

            state.taken.push(picked);

            return state;
        default:
            return state;
    }
}
