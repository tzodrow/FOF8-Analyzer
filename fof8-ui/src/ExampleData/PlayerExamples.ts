export {}
// import { Position } from "../Enums/Position";
// import { PositionGroup } from "../Enums/PositionGroup";
// import { IPlayer } from "../Models/IPlayer";

// export const examplePlayer1: IPlayer = {
//     playerId: 1,
//     firstName: "Bob",
//     lastName: "Smith",
//     lowEndurance: 10,
//     highEndurance: 20,
//     positionGroup: PositionGroup.RB,
//     position: Position.RB,
//     lowScreenPasses: 0,
//     highScreenPasses: 0,
//     lowShortPasses: 0,
//     highShortPasses: 0
// }

// export const examplePlayer2: IPlayer = {
//     playerId: 2,
//     firstName: "Tim",
//     lastName: "Zodrow",
//     lowEndurance: 70,
//     highEndurance: 90,
//     positionGroup: PositionGroup.RB,
//     position: Position.RB,
//     lowScreenPasses: 0,
//     highScreenPasses: 0,
//     lowShortPasses: 0,
//     highShortPasses: 0
// }

// export const examplePlayer3: IPlayer = {
//     playerId: 3,
//     firstName: "Katie",
//     lastName: "Zodrow",
//     lowEndurance: 0,
//     highEndurance: 0,
//     positionGroup: PositionGroup.QB,
//     position: Position.QB,
//     lowScreenPasses: 70,
//     highScreenPasses: 80,
//     lowShortPasses: 65,
//     highShortPasses: 75
// }

// export const examplePlayer4: IPlayer = {
//     playerId: 4,
//     firstName: "Luke",
//     lastName: "Zodrow",
//     lowEndurance: 0,
//     highEndurance: 0,
//     positionGroup: PositionGroup.QB,
//     position: Position.QB,
//     lowScreenPasses: 90,
//     highScreenPasses: 100,
//     lowShortPasses: 90,
//     highShortPasses: 100
// }

// export const examplePlayers1: Array<IPlayer> = [
//     examplePlayer1,
//     examplePlayer2,
//     examplePlayer3,
//     examplePlayer4
// ]

// function copyPlayer (player: IPlayer, count: number) {
//     let copies: Array<IPlayer> = [];
//     for(let i = 0; i < count; i++) {
//         copies = [...copies, player];
//     }
//     return copies;
// }

// export const largeExamplePlayers1: Array<IPlayer> = [
//     ...copyPlayer(examplePlayer1, 100),
//     ...copyPlayer(examplePlayer2, 100),
//     ...copyPlayer(examplePlayer3, 100),
//     ...copyPlayer(examplePlayer4, 100),
// ]