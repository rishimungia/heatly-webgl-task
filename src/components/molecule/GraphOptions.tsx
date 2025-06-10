"use client";
import { useState } from "react";
import { useAtom } from "jotai";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";

import { graphOptionsAtom } from "../provider/StateProvider";

export default function GraphOptions() {
    const [graphOptions, setGraphOptions] = useAtom(graphOptionsAtom);

    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <div className="absolute top-20 left-4 bg-black/50 backdrop-blur-2xl rounded-lg shadow-[0px_2px_8px_#0000008c] w-3xs flex flex-col gap-2">
            <button className="text-sm font-medium px-4 py-3 cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                Graph Options
            </button>

            <AnimatePresence>
                {showMenu && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-4 px-4 w-3xs"
                    >
                        {/* Bar Scale */}
                        <motion.label 
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            htmlFor="bar-scale"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <span className="text-sm">Bar Scale</span>
                                <input
                                    type="number"
                                    value={graphOptions.barScale}
                                    className="text-center text-xs outline-none border border-stone-700 rounded-md min-w-0 max-w-8 py-0.5"
                                    readOnly
                                />
                            </div>
                            <input
                                name="bar-scale"
                                type="range"
                                min="1"
                                max="10"
                                step="0.5"
                                className="w-full h-1 bg-stone-200/20 rounded-lg appearance-none cursor-pointer"
                                value={graphOptions.barScale}
                                onChange={(event) =>
                                    setGraphOptions((prev) => ({
                                        ...prev,
                                        barScale: parseFloat(event.target.value),
                                    }))
                                }
                            ></input>
                        </motion.label>

                        {/* Bar Gap */}
                        <motion.label 
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            htmlFor="bar-gap"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <span className="text-sm">Bar Gap</span>
                                <input
                                    type="number"
                                    value={graphOptions.barGap}
                                    className="text-center text-xs outline-none border border-stone-700 rounded-md min-w-0 max-w-8 py-0.5"
                                    readOnly
                                />
                            </div>
                            <input
                                name="bar-gap"
                                type="range"
                                min="0"
                                max="5"
                                step="0.25"
                                className="w-full h-1 bg-stone-200/20 rounded-lg appearance-none cursor-pointer"
                                value={graphOptions.barGap}
                                onChange={(event) =>
                                    setGraphOptions((prev) => ({
                                        ...prev,
                                        barGap: parseFloat(event.target.value),
                                    }))
                                }
                            ></input>
                        </motion.label>
                        
                        {/* Scale Data */}
                        <motion.label
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            htmlFor="scale-data"
                            className="flex items-center justify-between gap-4"
                        >
                            <span className="text-sm">Scale Data</span>
                            <input
                                type="checkbox"
                                name="scale-data"
                                checked={graphOptions.scaleData}
                                onChange={(event) =>
                                    setGraphOptions((prev) => ({
                                        ...prev,
                                        scaleData: event.target.checked,
                                    }))
                                }
                            />
                        </motion.label>

                        {/* Bar Height */}
                        <motion.label 
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            htmlFor="bar-height" 
                        >
                            <div className={clsx("transition-opacity pb-4", {"opacity-50": !graphOptions.scaleData})}>
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-sm">Bar Height</span>
                                    <input
                                        type="number"
                                        value={graphOptions.maxBarHeight}
                                        className="text-center text-xs outline-none border border-stone-700 rounded-md min-w-0 max-w-8 py-0.5"
                                        readOnly
                                    />
                                </div>
                                <input
                                    name="bar-gap"
                                    type="range"
                                    min="50"
                                    max="500"
                                    step="25"
                                    className="w-full h-1 bg-stone-200/20 rounded-lg appearance-none cursor-pointer disabled:cursor-default"
                                    value={graphOptions.maxBarHeight}
                                    onChange={(event) =>
                                        setGraphOptions((prev) => ({
                                            ...prev,
                                            maxBarHeight: parseFloat(event.target.value),
                                        }))
                                    }
                                    disabled={!graphOptions.scaleData}
                                ></input>
                            </div>
                        </motion.label>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
