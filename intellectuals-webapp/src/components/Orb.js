import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";

const Orb = ({ color, factor, ambientColor }) => {
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x = meshRef.current.rotation.y += 0.05;
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0, 3]}>
            {/* Lights setup */}
            <ambientLight intensity={0} color={ambientColor} />
            <pointLight intensity={1} position={[1, 5, 3]} />
            <pointLight intensity={1} position={[2, 0, -5]} />
            <pointLight intensity={2} position={[3, 7, -7]} />
            <pointLight intensity={1} position={[4, -3, -15]} />
            <pointLight intensity={5} position={[10, -9, 0]} />
            <pointLight intensity={1} position={[-4, 0, 1]} />
            <pointLight intensity={10} position={[-4, 0, 1]} />
            <pointLight intensity={10} position={[-10, -4, 2]} />
            <pointLight intensity={10} position={[5, 0, -5]} />
            <pointLight intensity={10} position={[3, -10, 4]} />
            <MeshWobbleMaterial attach="material" color={color} factor={factor} speed={0.1} roughness={0} />
            <sphereGeometry args={[1, 32, 32]} /> {/* Sphere geometry */}
        </mesh>
    );
};

export default Orb;
