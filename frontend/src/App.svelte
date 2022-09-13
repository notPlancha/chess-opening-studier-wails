<script lang="ts">
  import ChessBoard from "./lib/ChessBoard.svelte";
  import MoveExplorer from "./lib/MoveExplorer.svelte";
  import Comments from "./lib/chessLib/Comments.svelte";
</script>

<style lang="scss">
  main{
    display: grid;
    margin: {
      left: 1.2vw;
      right: 1.2vw;
      top: 1vh;
      bottom: 1vh;
    };
    grid: {
      template-areas:
              "b b m m"
              "b b m m"
              "c c c c"
    };
    .chessBoard{
      margin: {
        top: auto;
        bottom: auto;
        left: 0;
        right: auto;
      };
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




