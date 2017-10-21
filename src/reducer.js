import {standard} from '../data/rankings.json';
import {getListName, getCssClass, getPickRound} from './utils';

export const init = {
    pick: 1,
    round: 1,
    overall: 1,
    available: standard.map(player => {
        const {vsADP} = player;

        player.cssClass = getCssClass(vsADP);

        return player;
    }),
    drafted: [],
    taken: []
};

export default function reducer (state = init, action, args) {
    switch (action) {
        case 'PLAYER_DRAFTED':
        case 'PLAYER_TAKEN':
            let {pick, round, overall, available} = state;
            const [index] = args;
            const [picked] = available.splice(index, 1);
            const listName = getListName(action);

            picked.pick = `${round}-${pick} (${overall})`;

            state[listName].unshift(picked);

            [pick, round] = getPickRound(pick, round);
            overall++;

            return Object.assign({}, state, {pick, round, overall});
        default:
            return state;
    }
}
