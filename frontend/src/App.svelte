<script lang="ts">
  import ChessBoard from "./lib/ChessBoard.svelte";
  import MoveExplorer from "./lib/MoveExplorer.svelte";
  import Comments from "./lib/chessLib/Comments.svelte";
</script>

<style lang="scss">
  main{
    display: grid;
    grid: {
      template-areas:
              "b b m"
              "b b m"
              "c c c"
    };
    .chessBoard{
      grid-area: b;
    }
    .moveExplorer{
      grid-area: m;
    }
    .comments{
      grid-area: c;
    }
  }

  :global(html){
    background: {
      color: #2f2929
    };
  }
  :global(.app){
    max-width: 100vw;
    max-height: 100vh;
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
  <div class="chessBoard">
    <ChessBoard />
  </div>
  <div class="moveExplorer">
    <MoveExplorer />
  </div>
  <div class="comments">
    <Comments />
  </div>
</main>




