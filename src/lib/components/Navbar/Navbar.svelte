<script lang="ts">
  import Icon from '@iconify/svelte';
  import Search from './Search.svelte';
  import UserActions from './UserActions.svelte';
</script>

<nav
  class="mb-3 flex flex-1 items-center justify-between px-3 py-4 [&>*]:flex [&>*]:flex-1 [&>*]:items-center"
>
  <div class="ml-3 flex flex-1 gap-3">
    <a class="mb-2 font-agbalumo text-3xl" href="/">My4nimeList</a>
  </div>
  <Search />
  <UserActions />
</nav>
