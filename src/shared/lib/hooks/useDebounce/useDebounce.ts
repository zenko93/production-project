import { useCallback, useRef } from 'react';

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    return useCallback((...args: any[]) => {
        if (timer.current) {
            return;
        }

        timer.current = setTimeout((...args: any[]) => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
}
