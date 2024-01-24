<script>
  import logo from '$lib/assets/logo.png';
  import Search from './Search.svelte';
  import UserActions from './UserActions.svelte';
</script>

<nav class="flex h-[70px] items-center justify-between border-b-[1px] px-6 [&>*]:flex-1">
  <div class="flex items-center gap-4">
    <a href="/" class="rounded-lg border-[1px] p-1 shadow-md">
      <div class="w-10">
        <img class="pointer-events-none max-w-full" src="{logo}" alt="logo" />
      </div>
    </a>
    <p class="font-medium">Lưu và đánh giá Anime</p>
  </div>

  <div class="flex justify-center">
    <Search />
  </div>

  <UserActions />
</nav>
