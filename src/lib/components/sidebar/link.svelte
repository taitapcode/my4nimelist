<script lang="ts">
  import type { ComponentType } from 'svelte';
  import type { Icon } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';

  export let href: string, title: string, icon: ComponentType<Icon>;
</script>

<Button
  class="flex h-[4.5rem] w-[4.5rem] flex-col rounded-2xl hover:bg-gray-200"
  {href}
  variant="ghost">
  <svelte:component this="{icon}" class="h-6 w-6" />
  <span class="font-semibold">{title}</span>
</Button>
