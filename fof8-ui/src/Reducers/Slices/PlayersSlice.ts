import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPlayer } from '../../Models/IPlayer'
import { RootState } from '../Store'

// Define a type for the slice state
interface PlayersState {
    players: Array<IPlayer>;
}

// Define the initial state using that type
const initialState: PlayersState = {
    players: []
}

export const playersSlice = createSlice({
    name: 'players',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        set: (state, action: PayloadAction<Array<IPlayer>>) => {
            state.players = [...action.payload];
        },
        update: (state, action: PayloadAction<Array<IPlayer>>) => {
            state.players = state.players.map(player => {
                const found = action.payload.find(search => search.playerId === player.playerId);
                if (found) {
                    return {
                        ...player,
                        ...found
                    };
                }

                return player;
            });
            const extraPlayers = action.payload.filter(player => state.players.findIndex(search => search.playerId === player.playerId) === -1);
            state.players = [...state.players, ...extraPlayers];
        }
    }
})

export const { set, update } = playersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPlayers = (state: RootState) => state.players.players

export default playersSlice.reducer