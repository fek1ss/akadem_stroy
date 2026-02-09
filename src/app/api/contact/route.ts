import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const company = formData.get('company');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const file = formData.get('file') as File | null;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS,
      },
    });

    const attachments = [];
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    await transporter.sendMail({
      from: `"${company}" <info@akademstroy.kz>`, // отображаемое имя компании
      to: 'info@akademstroy.kz',                       // куда придет письмо
      replyTo: phone ? `${phone}@example.com` : undefined, // можно указать email пользователя, если есть
      subject: 'Заявка с сайта',
      text: `
      Организация: ${company}
      Телефон: ${phone}
      Услуга: ${service}
      `,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Ошибка при отправке письма:', error);
    return NextResponse.json(
      { success: false, message: 'Ошибка при отправке письма' },
      { status: 500 }
    );
  }
}
