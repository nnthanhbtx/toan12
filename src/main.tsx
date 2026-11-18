import './polyfills';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

class AppErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      message: error?.message || 'Lỗi hiển thị ứng dụng trên trình duyệt',
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#040817] text-white flex items-center justify-center p-5">
          <div className="max-w-md w-full rounded-2xl bg-[#071126] border border-cyan-500/40 p-6 space-y-4 text-center shadow-2xl">
            <h2 className="text-lg font-bold text-amber-300">
              Không thể khởi chạy giao diện
            </h2>
            <p className="text-sm text-sky-200 leading-relaxed">
              Thiết bị đang gặp sự cố bộ nhớ đệm trình duyệt ({this.state.message}). Nhấn nút bên dưới để làm mới sạch ứng dụng.
            </p>
            <button
              type="button"
              onClick={() => {
                try {
                  if ('caches' in window) {
                    caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
                  }
                } catch {
                  // ignore
                }
                window.location.reload();
              }}
              className="w-full py-3 px-4 rounded-xl bg-cyan-500 text-[#040817] font-extrabold text-sm"
            >
              Tải lại ứng dụng ngay
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <AppErrorBoundary>
    <App />
  </AppErrorBoundary>
);
