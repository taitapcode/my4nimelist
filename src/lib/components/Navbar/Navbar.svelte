<script lang="ts">
  import Icon from '@iconify/svelte';
  import Search from './Search.svelte';
  import UserActions from './UserActions.svelte';
</script>

<nav
  class="flex items-center justify-between flex-1 px-3 py-4 [&>*]:flex [&>*]:items-center [&>*]:flex-1"
>
  <a class="mb-2 ml-3 text-3xl font-agbalumo" href="/">My4nimeList</a>
  <Search />
  <UserActions />
</nav>
