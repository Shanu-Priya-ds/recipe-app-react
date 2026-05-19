import { useEffect, useState } from "react";

interface ErrorMessageProps {
    message: string;
    onClose?: () => void;
    duration?: number;
}

function ErrorMessage({ message, onClose, duration = 4000 }: ErrorMessageProps) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose?.();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!visible) return null;

    return (
        <div className="fixed bottom-5 right-5 z-50 flex items-start gap-3 bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg max-w-sm">
            <span className="flex-1 text-sm font-medium">{message}</span>
            <button
                onClick={() => { setVisible(false); onClose?.(); }}
                className="text-white hover:text-red-200 font-bold text-lg leading-none mt-0.5"
                aria-label="Close"
            >
                &times;
            </button>
        </div>
    );
}

export default ErrorMessage;
