<script lang="ts">
  import Icon from '@iconify/svelte';
  import Search from './Search.svelte';
  import UserActions from './UserActions.svelte';
</script>

<nav
  class="flex items-center justify-between flex-1 px-3 py-4 [&>*]:flex [&>*]:items-center [&>*]:flex-1 mb-3"
>
  <div class="flex flex-1 gap-3 ml-3">
    <a class="mb-2 text-3xl font-agbalumo" href="/">My4nimeList</a>
  </div>
  <Search />
  <UserActions />
</nav>
