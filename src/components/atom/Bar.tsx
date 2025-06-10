import { useEffect, useRef } from "react";
import * as THREE from "three";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { useSpring } from "motion/react";
import { useSetAtom } from "jotai";
import { activeBarAtom } from "../provider/StateProvider";

export default function Bar({
    height = 0,
    color = [1, 0.4, 0], 
    position = [0, 0, 0],
    scale = 1,
    hoverData
}: {
    color?: [number, number, number];
    position?: [number, number, number];
    scale?: number;
    height?: number;
    hoverData: {
        value: number;
        key: string;
    };
}) {
    const meshRef = useRef<THREE.Mesh>(null!);

    const setActiveBarData = useSetAtom(activeBarAtom);

    const animatedHeight = useSpring(0, {
        duration: 1500,
        bounce: 0.1
    });
    
    const animatedScale = useSpring(1, {
        duration: 500,
        bounce: 0.1
    });

    useEffect(() => {
        setTimeout(() => {
            animatedHeight.set(height);
        }, 500);
    }, [height]);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.position.y = animatedHeight.get() * animatedScale.get() / 2;
            meshRef.current.scale.y = animatedHeight.get() * animatedScale.get();

            meshRef.current.scale.x = scale * animatedScale.get();
            meshRef.current.scale.z = scale * animatedScale.get();
        }
    });

    function onHover(event: ThreeEvent<PointerEvent>) {
        event.stopPropagation();
        animatedScale.set(1.1);

        setActiveBarData(hoverData);
    }

    function onLeave(event: ThreeEvent<PointerEvent>) {
        event.stopPropagation();
        animatedScale.set(1);

        setActiveBarData(false);
    }

    return (
        <mesh
            position={position}
            scale={[scale, height, scale]}
            onPointerOver={onHover}
            onPointerOut={onLeave}
            ref={meshRef}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshPhongMaterial color={color} />
        </mesh>
    );
}
