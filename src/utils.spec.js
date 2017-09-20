import {getListName, getCssClass, getPickRound} from './utils';

describe('getListName()', () => {
    it('returns the correct list name', () => {
        expect(getListName('asdf')).toBe('');
        expect(getListName('PLAYER_DRAFTED')).toBe('drafted');
        expect(getListName('PLAYER_TAKEN')).toBe('taken');
    });
});

describe('getCssClass()', () => {
    it ('returns the correct class name', () => {
        expect(getCssClass('+1.0')).toBe('steal');
        expect(getCssClass('-3.0')).toBe('reach');
        expect(getCssClass('0.0')).toBe('');
    });
});

describe('getPickRound()', () => {
    it('increases the pick and maintains the round when pick < 12', () => {
        const [pick, round] = getPickRound(1, 1);

        expect(pick).toBe(2);
        expect(round).toBe(1);
    });

    it('increases the round and resets the pick when pick === 12', () => {
        const [pick, round] = getPickRound(12, 1);

        expect(pick).toBe(1);
        expect(round).toBe(2);
    });
});
