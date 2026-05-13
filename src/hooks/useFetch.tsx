import { useEffect, useState } from "react";
import type { FetchInputProps } from "../types/hooks";

function useFetch<T>({serviceFun} : FetchInputProps<T>) {
    const [data, setData] = useState<T[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await serviceFun();
            setData(result);
            console.log(result);
        };
        fetchData();
    }, []);

    return data;
}

export default useFetch;
