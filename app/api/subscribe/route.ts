import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Отправка email уведомления на вашу почту
    const notificationEmail = 'dav.hakobyan100@gmail.com';
    const subject = `New Email Subscription: ${email}`;
    const message = `New email subscription received:\n\nEmail: ${email}\n\nTime: ${new Date().toLocaleString()}`;

    // Используем Resend для отправки email
    // Для работы нужно установить: npm install resend
    // И добавить RESEND_API_KEY в .env.local
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    
    if (RESEND_API_KEY) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'onboarding@resend.dev',
            to: notificationEmail,
            subject: subject,
            text: message,
          }),
        });

        if (resendResponse.ok) {
          await resendResponse.json();
          console.log('Email sent successfully to', notificationEmail, 'for subscription:', email);
        } else {
          const errorData = await resendResponse.json();
          console.error('Resend API error:', errorData);
          // Логируем ошибку, но продолжаем выполнение
        }
      } catch (fetchError) {
        console.error('Error calling Resend API:', fetchError);
        // Продолжаем выполнение даже если Resend не работает
      }
    } else {
      // Если Resend не настроен, просто логируем
      console.log('Email subscription:', { email, notificationEmail, subject, message });
      console.log('To enable email sending, add RESEND_API_KEY to .env.local');
    }

    // Также можно использовать альтернативный метод через mailto или другой сервис
    // Для простоты, сохраняем в консоль и возвращаем успех

    return NextResponse.json(
      { success: true, message: 'Email submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing subscription:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}

