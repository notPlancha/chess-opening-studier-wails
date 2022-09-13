<script lang="ts">
  import Piece, {type Color} from "./Piece";

  export let color: Color;
  export let piece: Piece;
</script>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>

<div style="background-color: {color};">
  <p>{piece.letter}, {piece.number}</p>
</div>
