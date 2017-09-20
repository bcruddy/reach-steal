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
