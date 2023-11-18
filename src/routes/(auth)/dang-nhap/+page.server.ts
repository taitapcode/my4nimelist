import type { PageServerLoad } from './$types';
import type { Actions } from '@sveltejs/kit';
import z from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

const schema = z.object({
  username: z.string().min(1, 'Chưa nhập tên tài khoản'),
  password: z.string().min(1, 'Chưa nhập mật khẩu')
});

export const load = (async () => {
  const form = await superValidate(schema);

  return { form };
}) satisfies PageServerLoad;

export const actions = {
  async default({ request }) {
    const form = await superValidate(request, schema);

    if (!form.valid) return fail(400, { form });

    return { form };
  }
} satisfies Actions;
