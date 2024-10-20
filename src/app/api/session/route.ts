import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { isLoginUser } = await req.json();

  if (isLoginUser === 'true') {
    return new Response(JSON.stringify({ session: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return new Response(JSON.stringify({ session: false }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
