<script lang="ts">
  import ChessBoard from "./lib/ChessBoard.svelte";
  import MoveExplorer from "./lib/MoveExplorer.svelte";
  import Comments from "./lib/chessLib/Comments.svelte";
</script>

<style lang="scss">
  main {
    width: 100vw;
    height: 100vh;

    margin: 1rem;
    display: grid;
    grid: {
      template: {
        rows: 7fr 3fr;
      };
      row-gap: 9px;
    };
  }
  .board{
    display: grid;
    grid:{
      template: {
        columns: 3fr 2fr;
      };
      column-gap: 2px;
    }
  }

  :global(html){
    background: {
      color: #2f2929
    };
  }

  :global(*){
    margin: 0;
    padding: 0;
    color: #d0c0c0;
    font:{
      family: 'Roboto', sans-serif;
    }
  }
</style>

<main>
  <div class="board">
    <ChessBoard />
    <MoveExplorer />
  </div>
  <Comments />
</main>




