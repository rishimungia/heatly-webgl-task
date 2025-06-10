"use client";
import { useState } from "react";
import { useAtom } from "jotai";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { appDataAtom } from "../provider/StateProvider";

export default function DataOptions() {
    const [appData, setAppData] = useAtom(appDataAtom);

    const [showMenu, setShowMenu] = useState<boolean>(true);

    function toggleKey(key: string) {
        setAppData((prev) => ({
            ...prev,
            displayKeys: prev.displayKeys.includes(key)
                ? prev.displayKeys.filter((k) => k !== key)
                : [...prev.displayKeys, key],
        }));
    }

    return (
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-2xl rounded-lg shadow-[0px_2px_8px_#0000008c] w-3xs max-h-1/2 overflow-clip flex flex-col gap-2">
            <button
                className="text-sm font-medium px-4 py-3 cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
            >
                Data Index
            </button>

            <AnimatePresence>
                {showMenu && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-1 px-4 w-3xs h-fit overflow-auto"
                    >
                        {appData.keys.map((key, index) => (
                            <motion.button
                                key={index}
                                onClick={() => toggleKey(key)}
                                className="last-of-type:mb-4 text-left cursor-pointer w-fit"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.05 * index }}
                            >
                                <span
                                    className={clsx("text-sm transition-all", {
                                        "text-white/40":
                                            !appData.displayKeys.includes(key),
                                    })}
                                    style={appData.displayKeys.includes(key) ? {color: `hsl(${appData.hues[key]}, 100%, 70%)`} : undefined}
                                >
                                    {key}
                                </span>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
