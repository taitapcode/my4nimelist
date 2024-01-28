<script>
  import '../app.css';
  import Navbar from '$lib/components/navbar';
  import Sidebar from '$lib/components/sidebar';
</script>

<Navbar />
<div class="flex gap-2">
  <Sidebar />
  <main>
    <slot />
  </main>
</div>
