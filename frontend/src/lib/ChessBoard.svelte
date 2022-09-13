<script lang="ts">
  //make a chess board
  import Piece, {buildBoard} from "./chessLib/Piece";

  import Square from "./chessLib/Square.svelte";

  let board = buildBoard();
  let color1 = "#F1D9B4"
  let color2 = "#B58962"

  let selectedPiece: Piece | null = null;

  function grabPiece(piece: Piece) {
    if (piece.type) {
      selectedPiece = piece;
      console.log(piece);
    }
  }

  function grabEnd(piece: Piece) {
    if (selectedPiece) {
      selectedPiece.move(piece);
      selectedPiece = null;
    }
  }
</script>

<style lang="scss">
  .board {
    width: 100%;
    height: 100%;
    display: grid;
    grid:{
      row-gap: 0;
      column-gap: 0;
      template-areas: "a1 b1 c1 d1 e1 f1 g1 h1"
                      "a2 b2 c2 d2 e2 f2 g2 h2"
                      "a3 b3 c3 d3 e3 f3 g3 h3"
                      "a4 b4 c4 d4 e4 f4 g4 h4"
                      "a5 b5 c5 d5 e5 f5 g5 h5"
                      "a6 b6 c6 d6 e6 f6 g6 h6"
                      "a7 b7 c7 d7 e7 f7 g7 h7"
                      "a8 b8 c8 d8 e8 f8 g8 h8";
    }

    .line {
      .square{
        $squareWidth:7.9vw;
        width: $squareWidth;
        height:$squareWidth;
        @for $i from 1 through 8 {
          &.#{"a"+$i} {
            grid-area: #{"a"+$i};
          }
          &.#{"b"+$i} {
            grid-area: #{"b"+$i};
          }
          &.#{"c"+$i} {
            grid-area: #{"c"+$i};
          }
          &.#{"d"+$i} {
            grid-area: #{"d"+$i};
          }
          &.#{"e"+$i} {
            grid-area: #{"e"+$i};
          }
          &.#{"f"+$i} {
            grid-area: #{"f"+$i};
          }
          &.#{"g"+$i} {
            grid-area: #{"g"+$i};
          }
          &.#{"h"+$i} {
            grid-area: #{"h"+$i};
          }
        }
      }
    }
  }
</style>

<div class="board">
  {#each board as line, lineIndex}
    <div class="line">
      {#each line as square, index}
        <div class="square {square.letter + square.number}">
          <Square color="{(lineIndex+index) % 2 === 0 ? color1: color2}" bind:piece={square} on:dragstart={ () => grabPiece(square) } on:dragend={() => grabEnd(square)}/>
        </div>
      {/each}
    </div>
  {/each}
</div>
