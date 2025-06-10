"use client";

import useCsvData from "@/hooks/csvData";
import { atom } from "jotai";

type AppData = {
    parsedData: Record<string, number>[];
    keys: string[];
    hues: Record<string, number>;
    displayKeys: string[];
}

export const appDataAtom = atom<AppData>({
    parsedData: [],
    keys: [],
    hues: {},
    displayKeys: [],
});

type GraphOptions = {
    barScale: number;
    barGap: number;
    scaleData: boolean;
    maxBarHeight: number;
}

export const graphOptionsAtom = atom<GraphOptions>({
    barScale: 5,
    barGap: 2.5,
    scaleData: true,
    maxBarHeight: 100
});

type ActiveBarData = {
    key: string;
    value: number | string;
} | false;

export const activeBarAtom = atom<ActiveBarData>(false);

export default function StateProvider({
    children,
    serverData,
}: {
    children?: React.ReactNode;
    serverData?: any;
}) {
    useCsvData();

    return children;
}
