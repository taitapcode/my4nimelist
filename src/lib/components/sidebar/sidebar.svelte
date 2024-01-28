<script>
  import Actions from './actions.svelte';
  import Link from './link.svelte';

  import { Home } from 'lucide-svelte';
</script>

<div class="flex min-w-24 flex-col items-center py-6 [&>button]:h-12 [&>button]:w-12">
  <Actions />
  <Link href="/" title="Trang chủ"><Home /></Link>
</div>
