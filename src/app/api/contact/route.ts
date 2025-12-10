import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Send email using Resend - clean email address from any whitespace/newlines
    const contactEmail = (process.env.CONTACT_EMAIL || 'info@paslegalcorp.com').replace(/\s+/g, '');
    const { data, error } = await resend.emails.send({
      from: 'PAS Legal Corp <noreply@message.pascorpusa.com>',
      to: [contactEmail],
      replyTo: email,
      subject: `Nueva consulta de ${name} - ${service || 'General'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1a2b4a; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Nueva Consulta</h1>
          </div>

          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #1a2b4a; margin-top: 0;">Detalles del Contacto</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">Nombre:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
                  <a href="mailto:${email}" style="color: #8b7355;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Teléfono:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${phone}</td>
              </tr>
              ` : ''}
              ${service ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Servicio:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${service}</td>
              </tr>
              ` : ''}
            </table>

            <h3 style="color: #1a2b4a; margin-top: 30px;">Mensaje:</h3>
            <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #8b7355;">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <div style="background-color: #1a2b4a; padding: 15px; text-align: center;">
            <p style="color: #999; margin: 0; font-size: 12px;">
              Este mensaje fue enviado desde el formulario de contacto de paslegalcorp.com
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error));
      return NextResponse.json(
        { error: 'Failed to send email', details: error.message || JSON.stringify(error) },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Internal server error', details: errorMessage },
      { status: 500 }
    );
  }
}
