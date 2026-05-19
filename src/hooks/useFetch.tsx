import { useEffect, useState } from "react";
import type { FetchInputProps } from "../types/hooks";

function useFetch<T>({serviceFun} : FetchInputProps<T>) {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;
        const fetchData = async () => {
            setLoading(true);
            const result = await serviceFun();
            timeoutId = setTimeout(() => {
                setData(result);
                setLoading(false);
                console.log(result);
            }, 50);//added delay to show the loading spinner in UI
        };
        fetchData();

        return () => {
            clearTimeout(timeoutId);
        }
    }, []);

    return {data, loading};
}

export default useFetch;
