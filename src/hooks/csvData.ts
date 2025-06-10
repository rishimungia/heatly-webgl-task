import { useEffect } from "react";
import Papa from 'papaparse';
import { useSetAtom } from "jotai";
import { appDataAtom } from "@/components/provider/StateProvider";

export default function useCsvData() {
    const setAppData = useSetAtom(appDataAtom);

    async function loadData() {
        const res = await fetch('/data/ECUK_2024_Primary_Energy_tables.csv');
        const text = await res.text();

        const parsedData = Papa.parse(text, {
            skipEmptyLines: true,
            comments: false,
            header: true,
            transform: (value) => {
                const cleanValue = value.replace(/,/g, '');
                const num = parseFloat(cleanValue);
                return isNaN(num) ? value : num;
            }
        });
        
        parseData(parsedData.data);
    }

    function parseData(data: unknown[]) {
        const keys = Object.keys(data[0] as Record<string, number>);

        const hues = Object.fromEntries(keys.map((key, index) => [key, (index / keys.length) * 360]));

        const displayKeys = keys.slice(
            1, 
            Math.min(5, keys.length)
        );

        setAppData((prev) => ({
            ...prev,
            keys,
            parsedData: data as Record<string, number>[],
            displayKeys,
            hues
        }));
    }

    useEffect(() => {
        loadData();
    }, [])
}