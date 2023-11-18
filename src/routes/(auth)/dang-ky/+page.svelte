<script lang="ts">
  import type { PageData } from './$types';
  import { superForm } from 'sveltekit-superforms/client';
  import { selectTextOnFocus } from '$lib/actions';
  import Button from '../components/Button.svelte';
  import Input from '../components/Input.svelte';

  export let data: PageData;

  const { form, enhance, submitting, errors } = superForm(data.form);
</script>

<svelte:head>
  <title>My4animelist - Đăng ký</title>
</svelte:head>

<form method="POST" use:enhance>
  <h1>Đăng ký</h1>

  <Input
    label="Tên tài khoản"
    type="text"
    name="username"
    placeholder="Nhập tên tài khoản"
    bind:value={$form.username}
  />

  <Input
    label="Mật khẩu"
    type="password"
    name="password"
    placeholder="Nhập tên mật khẩu"
    bind:value={$form.password}
  />

  <Input
    label="Xác nhận mật khẩu"
    type="password"
    name="confirmPassword"
    placeholder="Nhập tên mật khẩu"
    bind:value={$form.confirmPassword}
  />

  <Button disabled={$submitting}>Đăng ký</Button>
  <p>Đã có tài khoản <a href="/dang-nhap" class="text-blue-500 underline">Đăng nhập</a></p>
</form>
