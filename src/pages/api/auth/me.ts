import type { APIRoute } from 'astro';
import { getCurrentUser } from '../../../lib/auth/jwt';
import { jsonSuccess } from '../../../lib/api/response';

export const GET: APIRoute = async ({ request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) {
    return jsonSuccess({ authenticated: false });
  }

  return jsonSuccess({
    authenticated: true,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      plan: user.plan,
    },
  });
};
