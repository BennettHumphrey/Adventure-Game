import {createSlice} from '@reduxjs/toolkit'
import { biomes } from '../Biomes/Biomes'

const options = {
    name: 'group',
    initialState: {
      health: 100,
      defence: 25,
      food: 100,
      water: 100,
      distance: 0,
      currentBiome: biomes[0],
    },
    reducers: {
      changeDefenceGroup: (state, action) => {
        state.defence = state.defence + action.payload
      },
      changeBiome: (state, action) => {
          state.currentBiome = action.payload
      },
      changeFood: (state, action) => {
        state.food = state.food + action.payload
      },
      changeWater: (state, action) => {
        state.water = state.water + action.payload
      },
      changeDistance: (state, action) => {
        state.distance = state.distance + action.payload
      }
    }
  }
  
  export const groupSlice = createSlice(options)