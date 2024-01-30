<script>
  import { Home, Newspaper, Clapperboard } from 'lucide-svelte';
  import Actions from './actions.svelte';
  import Link from './link.svelte';
</script>

<div class="flex min-w-24 flex-col items-center gap-2 py-6">
  <Actions />
  <Link href="/" title="Home" icon="{Home}" />
  <Link href="/" title="Anime" icon="{Clapperboard}" />
  <Link href="/" title="Bài viết" icon="{Newspaper}" />
</div>
