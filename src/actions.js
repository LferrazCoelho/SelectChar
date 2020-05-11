import { UP_LVL, DOWN_LVL } from './types'

export function upLvl() {
    return{
        type: UP_LVL
    }
};

export function downLvl() {
    return{
        type: DOWN_LVL
    }
};
