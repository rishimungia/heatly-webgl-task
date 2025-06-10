import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useSpring } from "motion/react";

export default function Bar({
    height = 0,
    color = [1, 0.4, 0], 
    position = [0, 0, 0],
    scale = 1
}: {
    color?: [number, number, number];
    position?: [number, number, number];
    scale?: number;
    height?: number;
}) {
    const meshRef = useRef<THREE.Mesh>(null!);

    const animatedHeight = useSpring(0, {
        duration: 1500,
        bounce: 0.1
    });

    useEffect(() => {
        setTimeout(() => {
            animatedHeight.set(height);
        }, 500);
    }, [height]);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.position.y = animatedHeight.get() / 2;
            meshRef.current.scale.y = animatedHeight.get();
        }
    });

    return (
        <mesh
            position={position}
            scale={[scale, height, scale]}
            ref={meshRef}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshPhongMaterial color={color} />
        </mesh>
    );
}
