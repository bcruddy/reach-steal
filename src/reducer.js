import {standard} from '../data/rankings.json';

const init = {
    available: standard,
    drafted: [],
    taken: []
};

export default function reducer (_state = init, action, args) {
    const state = Object.assign({}, _state);

    switch (action) {
        case 'PLAYER_DRAFTED':
        case 'PLAYER_TAKEN':
            const [index] = args;
            const picked = state.available.splice(index, 1);

            state[action === 'PLAYER_DRAFTED' ? 'drafted' : 'taken'].concat(picked);

            return state;
        default:
            return state;
    }
}
