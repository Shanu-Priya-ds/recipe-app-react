import { useEffect, useState } from "react";
import type { FetchInputProps } from "../types/hooks";

function useFetch<T>({serviceFun} : FetchInputProps<T>) {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const result = await serviceFun();
                timeoutId = setTimeout(() => {
                    setData(result);
                    setLoading(false);
                    console.log(result);
                }, 50);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch data");
                setLoading(false);
            }
        };
        fetchData();

        return () => {
            clearTimeout(timeoutId);
        }
    }, []);

    return {data, loading, error};
}

export default useFetch;
