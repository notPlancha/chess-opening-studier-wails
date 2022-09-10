export enum PieceType {
    Pawn = 1,
    Knight = 2,
    Bishop = 3,
    Rook = 4,
    Queen = 5,
    King = 6
}

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;
export type Letter =  'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
export type Number = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;


export default class Piece {
    type?: PieceType;
    pieceColor?: "white" | "black";
    letter: Letter;
    number: Number ;
    constructor(letter: Letter, number: Number, type?: PieceType, color?: "white" | "black", ) {
        this.type = type;
        this.pieceColor = color;
        this.letter = letter;
        this.number = number;
    }
    move(spot: Piece){
        //TODO
        spot.type = this.type;
        spot.pieceColor = this.pieceColor;
        this.type = undefined;
        this.pieceColor = undefined;
    }
}


export function buildBoard() {
    let board: Array<Array<Piece>> = [];
    for (let letter = 97; letter <= 104; letter++) {
        let row: Array<Piece> = [];
        for (let numb = 8; numb >= 1; numb--) {
            let piece = new Piece(String.fromCharCode(letter) as Letter, numb as Number);
            row.push(piece);
            //put in chess pieces
            if (numb == 1 || numb == 8) {
                switch (letter-96) {
                    case 1:
                    case 8:
                        piece.type = PieceType.Rook;
                        break;
                    case 2:
                    case 7:
                        piece.type = PieceType.Knight;
                        break;
                    case 3:
                    case 6:
                        piece.type = PieceType.Bishop;
                        break;
                    case 4:
                        piece.type = PieceType.Queen;
                        break;
                    case 5:
                        piece.type = PieceType.King;
                        break;
                }
            } else if (numb == 2 || numb == 7) {
                piece.type = PieceType.Pawn;
            }

            if (numb == 1 || numb == 2) {
                piece.pieceColor = "white";
            } else if (numb == 7 || numb == 8) {
                piece.pieceColor = "black";
            }
        }
        board.push(row);
    }
    return board;
}
