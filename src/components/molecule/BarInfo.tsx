"use client";

import { useAtomValue } from "jotai";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { activeBarAtom } from "../provider/StateProvider";

export default function BarInfo() {
    const barData = useAtomValue(activeBarAtom);
    
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(event: MouseEvent) {
            setPosition({
                x: event.clientX,
                y: event.clientY
            });
        }

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div 
            className="fixed -translate-1/2 pointer-events-none"
            style={{
                left: position.x + 10,
                top: position.y + 60,
            }}
        >
            <AnimatePresence>
                {barData &&
                    <motion.div 
                        className="bg-black/50 backdrop-blur-2xl rounded-md shadow-[0px_2px_8px_#0000008c] px-3 py-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                    >
                        <p className="text-sm">
                            <span className="opacity-60">Key:</span> {barData.key}
                        </p>
                        <p className="text-sm">
                            <span className="opacity-60">Value:</span> {barData.value}
                        </p>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}