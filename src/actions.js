import UP_LVL from './types'
import DOWN_LVL from './types'

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
