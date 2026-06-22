import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';

export default function NotFoundContent({ className }) {
  const [seconds, setSeconds] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = '/';
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const title = "404";
  const subtitle = "这片回忆，似乎已经随风飘散了...";
  const paragraph = "抱歉，您访问的页面不存在或已被移动。";
  const countdownLabel = " 秒后自动带您回到博客首页...";
  const buttonLabel = "立即回到首页";

  return (
    <main className="container margin-vert--xl">
      <div className="row">
        <div className="col col--6 col--offset-3">
          <div style={{
            textAlign: 'center',
            padding: '3rem 2rem',
            background: 'var(--ifm-card-background-color)',
            borderRadius: '8px',
            border: '1px solid var(--ifm-color-emphasis-200)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
            marginTop: '2rem'
          }}>
            <div style={{
              fontSize: '5rem',
              fontWeight: 800,
              lineHeight: 1,
              color: 'var(--ifm-color-primary)',
              marginBottom: '1.2rem',
              fontFamily: 'var(--ifm-heading-font-family)'
            }}>
              {title}
            </div>
            <h1 style={{
              fontSize: '1.6rem',
              fontWeight: 700,
              marginBottom: '1.2rem',
              color: 'var(--ifm-heading-color)',
              fontFamily: 'var(--ifm-heading-font-family)',
              borderBottom: 'none'
            }}>
              {subtitle}
            </h1>
            <p style={{
              fontSize: '1rem',
              color: 'var(--ifm-color-emphasis-700)',
              marginBottom: '2rem'
            }}>
              {paragraph}
            </p>
            <div style={{
              fontSize: '1rem',
              color: 'var(--ifm-color-emphasis-600)',
              marginBottom: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'var(--ifm-color-emphasis-100)',
                border: '1px solid var(--ifm-color-primary)',
                color: 'var(--ifm-color-primary)',
                fontWeight: 600,
                fontSize: '1rem'
              }}>
                {seconds}
              </span>
              <span>{countdownLabel}</span>
            </div>
            <div>
              <Link
                className="button button--primary button--lg"
                to="/"
                style={{
                  padding: '0.6rem 2.5rem',
                  fontWeight: 600,
                }}
              >
                {buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


