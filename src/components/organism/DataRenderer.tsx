"use client";
import { useMemo } from "react";
import { useAtomValue } from "jotai";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";

import Camera from "../molecule/Camera";
import DataRow from "../molecule/DataRow";
import { appDataAtom, graphOptionsAtom } from "../provider/StateProvider";

export default function DataRenderer({ className }: { className?: string }) {
    const appData = useAtomValue(appDataAtom);
    const graphOptions = useAtomValue(graphOptionsAtom);

    const GRID_SCALE = graphOptions.barScale + graphOptions.barGap;
    const GRID_SIZE =
        Math.max(appData.parsedData.length, appData.displayKeys.length) * 2;

    const MAX_VALUE = useMemo(() => {
        if (!appData.parsedData) return 1;

        return Math.max(
            ...appData.displayKeys.map((key) =>
                Math.max(...appData.parsedData.map((row) => row[key]))
            )
        );
    }, [appData.displayKeys, appData.parsedData]);

    return (
        <Canvas shadows className={clsx("absolute inset-0", className)}>
            <Camera />

            <ambientLight intensity={1} />
            <directionalLight
                intensity={Math.PI}
                position={[
                    -100,
                    100,
                    100,
                ]}
            />

            {appData.parsedData && (
                <>
                    {appData.displayKeys.map((key, index) => (
                        <DataRow
                            hue={appData.hues[key]}
                            key={index}
                            origin={
                                index * graphOptions.barScale +
                                index * graphOptions.barGap
                            }
                            rowKey={key}
                            data={appData.parsedData.map((row) => row[key])}
                            dataScaler={
                                graphOptions.scaleData
                                    ? graphOptions.maxBarHeight / MAX_VALUE
                                    : 1
                            }
                            barGap={graphOptions.barGap}
                            scale={graphOptions.barScale}
                        />
                    ))}
                </>
            )}

            <gridHelper
                args={[GRID_SIZE, GRID_SIZE, "#FFFFFF", "#404040"]}
                position={[-GRID_SCALE / 2, 0, -GRID_SCALE / 2]}
                scale={[GRID_SCALE, 0, GRID_SCALE]}
            />
        </Canvas>
    );
}
