import { useSelector, useDispatch } from "react-redux";
import { groupSlice } from "../Components/Group/GroupReducer";
import { currentTurnStatusSlice } from "../Status/CurrentTurnStatus";


export function Travel() {
    const dispatch = useDispatch()
    const selectGroup = useSelector(state => state.group)
    const distance = selectGroup.currentBiome.mobility
    
    const handleTravel = () => {
        dispatch(groupSlice.actions.changeDistance(distance))
        dispatch(currentTurnStatusSlice.actions.incrementTurnNumber())
        dispatch(groupSlice.actions.changeFood(-20))
        dispatch(groupSlice.actions.changeWater(-15))
    }

    return (
        <div>
            <button onClick={handleTravel} >Travel!</button>
        </div>
    )
}