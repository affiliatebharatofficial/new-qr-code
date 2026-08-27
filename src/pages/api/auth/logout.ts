import type { APIRoute } from 'astro';
import { jsonSuccess } from '../../../lib/api/response';

export const POST: APIRoute = async () => {
  return jsonSuccess({
    message: 'Logged out successfully.',
  }, 200, {
    'Set-Cookie': 'qr_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0',
  });
};
