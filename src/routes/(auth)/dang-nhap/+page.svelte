<script lang="ts">
  import type { PageData } from './$types';
  import { superForm } from 'sveltekit-superforms/client';
  import Button from '../components/Button.svelte';
  import Input from '../components/Input.svelte';

  export let data: PageData;

  const { form, enhance, submitting, errors } = superForm(data.form);
</script>

<svelte:head>
  <title>My4animelist - Đăng nhập</title>
</svelte:head>

<form method="POST" use:enhance>
  <h1>Đăng nhập</h1>

  <Input
    name="username"
    label="Tên đăng nhập"
    placeholder="Nhâp tên tài khoản"
    bind:value={$form.username}
  />

  <Input
    name="password"
    type="password"
    label="Mật khẩu"
    placeholder="Nhập mật khẩu"
    bind:value={$form.password}
  />

  <Button disabled={$submitting}>Đăng nhập</Button>
  <p>
    Chưa có tài khoản <a href="/dang-ky" class="text-blue-500 underline">Đăng ký</a>
  </p>
</form>
