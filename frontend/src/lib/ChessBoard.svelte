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
    display: grid;
    align-items: center;
    justify-items: center;
    grid: {
      template: {
        rows: repeat(8, 1fr);
      };
      row-gap: 0;
    };
    width: 100%;
    height: 100%;
  }
  .line{
    display: grid;
    grid: {
      template: {
        columns: repeat(8, 1fr);
      };
      column-gap: 0;
    };
  }
</style>

<div class="board">
  {#each board as line, lineIndex}
    <div class="line">
      {#each line as square, index}
        <Square color="{(lineIndex+index) % 2 === 0 ? color1: color2}" bind:piece={square} on:dragstart={ () => grabPiece(square) } on:dragend={() => grabEnd(square)}/>
      {/each}
    </div>
  {/each}
</div>
