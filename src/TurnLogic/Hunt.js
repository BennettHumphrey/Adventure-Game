import { useDispatch, useSelector } from "react-redux";
import { groupSlice } from "../Components/Group/GroupReducer";
import { animals } from "../Components/EnemiesAndAnimals/Animals";
import { currentTurnStatusSlice } from "../Status/CurrentTurnStatus";


export function Hunt() {
    const dispatch = useDispatch()
    const selectGroup = useSelector(state => state.group)

    const num = () => Math.floor(Math.random()*numOfAnimals)
    const numOfAnimals = selectGroup.currentBiome.animals.length
    const huntChanceVar = animals.huntChanceVariable
    const huntChance = Math.floor(Math.random() * huntChanceVar)
    const animal = selectGroup.currentBiome.animals[num()]
    
    const handleHunt = () => {
        dispatch(groupSlice.actions.changeFood(-10))
        dispatch(currentTurnStatusSlice.actions.incrementTurnNumber())

        if(animal.successChance >= Math.floor(Math.random()*10)){
        dispatch(groupSlice.actions.changeFood(animal.food))
        dispatch(currentTurnStatusSlice.actions.toggleCanHunt())
    }
    }

    if (num() >= huntChance) {
        return (
            <div>
                <p>Hunt {animal.name}!</p>
                <button onClick={handleHunt} >Hunt {animal.name}</button>
            </div>
        )
    }   

    return (
        <div>
            <p>No hunt!</p>
        </div>
    )





}