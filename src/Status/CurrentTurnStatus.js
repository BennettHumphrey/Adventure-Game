import { createSlice } from "@reduxjs/toolkit"

const options = {
    name: 'currentTurnStatus',
    initialState: {
        enemyEncounter: false,
        newCharacter: false,
        changeBiome: false,
        canHunt: true,
        canGather: true,
        canRepair: false,
        canTravel: true,
        turnNumber: 0,
    },
    reducers: {
        toggleNewCharacter: (state) => {
            state.newCharacter = !state.newCharacter
        },
        toggleChangeBiome: (state) => {
            state.changeBiome = !state.changeBiome
        },
        toggleEnemyEncounter: (state) => {
            state.enemyEncounter = !state.enemyEncounter
        },
        toggleCanHunt: (state) => {
            state.canHunt = !state.canHunt
        },
        toggleCanGather: (state) => {
            state.canGather = !state.canGather
        },
        toggleCanTravel: (state) => {
            state.canTravel = !state.canTravel
        },
        toggleCanRepair: (state) => {
            state.canRepair = !state.canRepair
        },
        incrementTurnNumber: (state) => {
            state.turnNumber++
        }
    }
}

export const currentTurnStatusSlice = createSlice(options)