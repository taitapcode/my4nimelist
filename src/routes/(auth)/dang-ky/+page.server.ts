import type { PageServerLoad } from './$types';
import type { Actions } from '@sveltejs/kit';
import z from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

const schema = z
  .object({
    username: z
      .string({ required_error: 'Chưa nhập tên tài khoản' })
      .min(3, 'Tên tài khoản cần dài hơn 3 kí tự')
      .max(10, 'Tên tài khoản cần ngắn hơn 10 kí tự'),
    password: z
      .string({ required_error: 'Chưa nhập mật khẩu' })
      .min(6, 'Mật khẩu cần dài hơn 6 kí tự'),
    confirmPassword: z.string()
  })
  .refine((val) => val.password == val.confirmPassword, {
    message: 'Mật khẩu xác nhận không trùng'
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
