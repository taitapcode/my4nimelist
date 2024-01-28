<script lang="ts">
  import { Search } from 'lucide-svelte';

  function onFocus(event: FocusEvent) {
    (event.target as HTMLInputElement).select();
  }
</script>

<div
  class="flex w-96 flex-row-reverse items-center gap-2 rounded-full border-2 px-2 py-1 transition-colors focus-within:border-slate-800">
  <input
    on:focus="{onFocus}"
    type="text"
    class="peer w-11/12 text-slate-700"
    placeholder="Tìm kiếm anime, meme, ..." />
  <Search
    class="text-slate-700 transition-colors duration-200 hover:!text-slate-700 peer-placeholder-shown:text-slate-500"
    width="20"
    height="20" />
</div>
