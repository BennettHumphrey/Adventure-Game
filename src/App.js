import './App.css';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { groupSlice } from './Components/Group/GroupReducer';
import { biomes } from './Components/Biomes/Biomes';
import { currentTurnStatusSlice } from './Status/CurrentTurnStatus';
import { TurnRender } from './TurnLogic/TurnRender';

export const store = configureStore({
  reducer: {
    group: groupSlice.reducer,
    currentGameStatus: groupSlice.reducer,
    currentTurnStatus: currentTurnStatusSlice.reducer
  }
})

function App() {
  
  
  const selectGroup = useSelector(state => state.group)
  const selectCurrentTurnStatus = useSelector(state => state.currentTurnStatus)

  const dispatch = useDispatch()
  const addDefence10 = () => {
    return dispatch(groupSlice.actions.changeDefenceGroup(10))
  }
  
  const decreaseDefence10 = () => {
    return dispatch(groupSlice.actions.changeDefenceGroup(-10))
  }
  
  const changeBiome = (n) => {
    return dispatch(groupSlice.actions.changeBiome(biomes[n]))
  } 
  
  const toggleNewCharacter = () => {
    return dispatch(currentTurnStatusSlice.actions.toggleNewCharacter())
  }
  
  const toggleCanHunt = () => {
    return dispatch(currentTurnStatusSlice.actions.toggleCanHunt())
  }
  // console.log(store.getState())
  
  //Function, if (enemy)>render something, if(canTravel)>render option
  

  return (
      <div>
        <p>
          Defence: {selectGroup.defence}
        </p>
        <p>
          Food: {selectGroup.food}
        </p>
        <p>
          Water: {selectGroup.water}
        </p>
        <p>
          Distance: {selectGroup.distance}
        </p>
        <p>
          Biome: {selectGroup.currentBiome.name}
        </p>
        <p>
          New Character: {selectCurrentTurnStatus.newCharacter ? 'Yes' : 'No'}
        </p>
        <p>
          Turn number: {selectCurrentTurnStatus.turnNumber}
        </p>
        
        <TurnRender  />
        <button onClick={addDefence10} >Add Defence 10</button>
        <button type='submit' onClick={decreaseDefence10} >Decrease Defence 10</button>
        <button type='submit' onClick={toggleNewCharacter} >Toggle New Character</button>
        <button type='submit' onClick={toggleCanHunt} >Toggle Can Hunt</button>
        <button type='submit' onClick={() => changeBiome(0)} >Forest</button>
        <button type='submit' onClick={() => changeBiome(1)} >Desert</button>
        <button type='submit' onClick={() => changeBiome(2)} >Jungle</button>
        <button type='submit' onClick={() => changeBiome(3)} >Hills</button>
      </div>
  );
}



export default App;