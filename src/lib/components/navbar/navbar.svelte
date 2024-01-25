<script>
  import logo from '$lib/assets/logo.png';
  import Search from './search.svelte';
  import UserActions from './user_actions.svelte';
</script>

<nav class="flex h-[70px] items-center justify-between border-b-[1px] px-6 [&>*]:flex-1">
  <div class="flex items-center gap-4">
    <a href="/" class="rounded-lg border-[1px] p-1 shadow-md">
      <div class="pointer-events-none w-10 select-none">
        <img class="max-w-full" src="{logo}" alt="logo" />
      </div>
    </a>
    <p class="font-medium">Lưu và đánh giá Anime</p>
  </div>

  <div class="flex justify-center">
    <Search />
  </div>

  <UserActions />
</nav>
