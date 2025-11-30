import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    company?: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    company,
    message,
}) => (
    <div style={{ fontFamily: 'sans-serif', color: '#333' }}>
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        {company && <p><strong>Company:</strong> {company}</p>}
        <hr />
        <h2>Message:</h2>
        <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
    </div>
);
