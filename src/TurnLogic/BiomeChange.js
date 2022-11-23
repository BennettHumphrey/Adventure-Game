import { useDispatch, useSelector } from "react-redux";
import { biomes } from "../Components/Biomes/Biomes";
import { currentTurnStatusSlice } from "../Status/CurrentTurnStatus";
import { groupSlice } from "../Components/Group/GroupReducer";

export function BiomeChange() {

    const dispatch = useDispatch()
    const selectGroup = useSelector(state => state.group)

    let num = Math.floor(Math.random() * biomes.length);
    const option = Math.floor(Math.random() * 2) ? true : false;
    if (num === Number(selectGroup.currentBiome.biomeID)) {
        console.log('samesies');
        num = Math.abs(num - 3);
    }
    const biomeOne = biomes[num];
    const biomeTwo = biomes[Math.abs(num - 1)];

    return (
        <div>
            {option ? (<>
                <button onClick={() => {
                    dispatch(groupSlice.actions.changeBiome(biomeOne));
                    dispatch(currentTurnStatusSlice.actions.toggleChangeBiome());
                } }>
                    {biomeOne.name}</button>
                <button onClick={() => {
                    dispatch(groupSlice.actions.changeBiome(biomeTwo));
                    dispatch(currentTurnStatusSlice.actions.toggleChangeBiome());
                } }>
                    {biomeTwo.name} </button>
            </>) : (<>
                <p>Current biome: {selectGroup.currentBiome.name},
                    next biome: {biomeOne.name} </p>
                <button onClick={() => {
                    dispatch(groupSlice.actions.changeBiome(biomeOne));
                    dispatch(currentTurnStatusSlice.actions.toggleChangeBiome());
                } }>Ok!</button>
            </>)}
        </div>
    );
}