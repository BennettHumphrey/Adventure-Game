import { useSelector, useDispatch } from "react-redux";
import { groupSlice } from "../Components/Group/GroupReducer";
import { currentTurnStatusSlice } from "../Status/CurrentTurnStatus";

export function Gather() {
    const dispatch = useDispatch()
    const selectGroup = useSelector(state => state.group)
    
    const food = selectGroup.currentBiome.foodAvailability
    const water = selectGroup.currentBiome.waterAvailability
    const num = Math.random()*3
    const foodToAdd = Math.ceil(num*food + food*2)
    const waterToAdd = Math.ceil(num*water + water*2)
    
    const handleGather = () => {
        dispatch(groupSlice.actions.changeFood(foodToAdd))
        dispatch(groupSlice.actions.changeWater(waterToAdd))
        dispatch(currentTurnStatusSlice.actions.incrementTurnNumber())
    }
    
    return (
        <div>
            <button onClick={handleGather}>Gather!</button>
        </div>
    )
}


