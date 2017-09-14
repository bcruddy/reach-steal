import {standard} from '../data/rankings.json';

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

export function getCssClass (vsADP) {
    let cssClass = '';

    if (vsADP.includes('+')) {
        cssClass = 'steal';
    }
    else if (vsADP.includes('-')) {
        cssClass = 'reach';
    }

    return cssClass;
}

export function getListName (action) {
    let listName = '';

    if (action === 'PLAYER_DRAFTED') {
        listName = 'drafted';
    }
    else if (action === 'PLAYER_TAKEN') {
        listName = 'taken';
    }

    return listName;
}

export function getPickRound (pick, round) {
    if (pick >= 12) {
        pick = 1;
        round++;
    } else {
        pick++;
    }

    return [pick, round];
}

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
