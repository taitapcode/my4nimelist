<script>
  import { Plus } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';
</script>

<Button class="hover group rounded-full bg-blue-600 hover:bg-blue-700" size="icon">
  <Plus class="transition-transform duration-200 group-hover:scale-125" />
</Button>
