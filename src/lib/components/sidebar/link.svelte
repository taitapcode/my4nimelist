<script lang="ts">
  import { Button } from '$lib/components/ui/button';

  export let href: string, title: string;
</script>

<Button {href} variant="ghost">
  <slot />
  <span>{title}</span>
</Button>
