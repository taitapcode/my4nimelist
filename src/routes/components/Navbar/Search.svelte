<script lang="ts">
  import { selectTextOnFocus } from '$lib/actions';
  import Icon from '@iconify/svelte';
</script>

<div class="items-center justify-center">
  <div
    class="flex w-[27rem] flex-row-reverse items-center gap-2 rounded-full border-2 border-slate-700 px-2 py-1 transition-colors duration-500 focus-within:border-blue-700"
  >
    <input
      type="text"
      class="w-11/12 text-sm text-gray-200"
      placeholder="Tìm kiếm"
      use:selectTextOnFocus
    />
    <Icon icon="fluent:search-48-filled" width="25" />
  </div>
</div>
