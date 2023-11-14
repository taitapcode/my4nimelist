<script lang="ts">
  import Icon from '@iconify/svelte';
</script>

<div>
  <div
    class="flex w-[27rem] flex-1 items-center gap-2 rounded-full border-[1px] border-slate-500 px-4 py-1 transition-colors duration-500 focus-within:border-blue-700"
  >
    <input type="text" class="w-11/12" placeholder="Tìm kiếm" />
    <hr class="h-5 border-l-[1px] border-slate-500" />
    <button class="px-3">
      <Icon icon="ion:search-outline" width="27" />
    </button>
  </div>
</div>
