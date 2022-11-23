import { useDispatch, useSelector } from "react-redux";
import { biomes } from "../Components/Biomes/Biomes";
import { currentTurnStatusSlice } from "../Status/CurrentTurnStatus";
import { groupSlice } from "../Components/Group/GroupReducer";
import { BiomeChange } from "./BiomeChange";
import { Hunt } from "./Hunt";
import { Gather } from "./Gather";
import { Travel } from "./Travel";


export function TurnRender() {

    const dispatch = useDispatch()
    const selectCurrentTurnStatus = useSelector(state => state.currentTurnStatus)
    const selectGroup = useSelector(state => state.group)

    if (selectCurrentTurnStatus.enemyEncounter) {
        return (
            <div><p>Enemy!</p></div>
        )
    }
    if(selectCurrentTurnStatus.newCharacter) {
        return (
            <div><p>Newbie!</p></div>
        )
    }
    if(selectCurrentTurnStatus.changeBiome) {
        return <BiomeChange/>
    }
    

    return (
        <div>
            {selectCurrentTurnStatus.canHunt ? <Hunt/> : null}
            {selectCurrentTurnStatus.canGather ? <Gather/> : null}
            {selectCurrentTurnStatus.canRepair ? <p>Repair!</p> : null}
            {selectCurrentTurnStatus.canTravel ? <Travel/> : null} 
        </div>
    )
}