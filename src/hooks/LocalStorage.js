import { useEffect } from "react";
import { useLocalStorage } from "react-use";

export function useLocalStorageState(key, initialValue) {
    const [value, setValue] = useLocalStorage(key, initialValue);

    useEffect(() => {
        if (localStorage.getItem(key)) {
            setValue(JSON.parse(localStorage.getItem(key)));
        }
    }, [key, setValue]);

    return [value, setValue];
}
