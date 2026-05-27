import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json() as {
      name?: string;
      email?: string;
      projectType?: string;
      message?: string;
    };

    const { name, email, projectType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Champs requis manquants.' },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'grandol.mosiah@gmail.com',
      replyTo: email,
      subject: `Nouveau message de ${escapeHtml(name)}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#22d3ee;">Nouveau message via portfolio</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#71717a;font-size:13px;">Nom</td><td style="padding:8px 0;font-weight:600;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a;font-size:13px;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#22d3ee;">${escapeHtml(email)}</a></td></tr>
            ${projectType ? `<tr><td style="padding:8px 0;color:#71717a;font-size:13px;">Type de projet</td><td style="padding:8px 0;font-weight:600;">${escapeHtml(projectType)}</td></tr>` : ''}
          </table>
          <hr style="border:1px solid #27272a;margin:16px 0;" />
          <p style="white-space:pre-wrap;line-height:1.6;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error('[Resend error]', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact route error]', err);
    return NextResponse.json(
      { error: 'Erreur serveur interne.' },
      { status: 500 },
    );
  }
}
