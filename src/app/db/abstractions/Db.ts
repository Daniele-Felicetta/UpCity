export type Game = {
    readonly players: {
      [key: string]: Player;
    };
    readonly rooms: {
      [key: string]: Room;
    };
  };
  
  export type Player = {
    readonly floor: number;
    readonly id: string;
    readonly name: string;
    readonly position: Position;
    readonly room: string;
  };
  
  export type Position = {
    readonly x: number;
    readonly y: number;
  };
  
  export type Room = {
    readonly chats?: Chat[];
    readonly id: string;
    readonly name: string;
    readonly users?: string[];
  };
  
  export type Chat = {
    readonly message: string;
    readonly sender: string;
    readonly timestamp: number;
  };
  
export type DB = {
    readonly game: Game
}



  // Esempio di utilizzo
//   const gameData: Game = {
//     players: {
//       player1: {
//         floor: 1,
//         id: "player1",
//         name: "Giocatore 1",
//         position: { x: 10, y: 20 },
//         room: "room1",
//       },
//       player2: {
//         floor: 2,
//         id: "player2",
//         name: "Giocatore 2",
//         position: { x: 5, y: 15 },
//         room: "room2",
//       },
//     },
//     rooms: {
//       room1: {
//         chats: [
//           { message: "Ciao!", sender: "player1", timestamp: 1678886400 },
//           { message: "Ciao a te!", sender: "player2", timestamp: 1678886410 },
//         ],
//         id: "room1",
//         name: "Stanza principale",
//         users: ["player1", "player2"],
//       },
//       room2: {
//         id: "room2",
//         name: "Stanza segreta",
//       },
//     },
//   };
  