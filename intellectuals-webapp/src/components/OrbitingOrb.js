import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";

const OrbitingOrb = ({ color, factor, radius, size}) => {
    const meshRef = useRef();
    let angle = 0;

    useFrame(() => {
        if (meshRef.current) {
            // Increment the angle to move the orb in a circular orbit
            angle += 0.01;
            const x = radius * Math.sin(angle);
            const z = radius * Math.cos(angle);
            meshRef.current.position.set(x, 0, z);

            // Determine whether the orb is in front of or behind the larger orb


            // Scale in and out effect to simulate moving towards and away from the camera
            const scale = size * (1 + 0.1 * Math.sin(angle * 2));
            meshRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <mesh ref={meshRef}>
            <MeshWobbleMaterial attach="material" color={color} factor={factor} speed={0.1} roughness={0} />
            <sphereGeometry args={[1, 32, 32]} />
            <ambientLight intensity={0} color={"00ffff"} />
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
        </mesh>
    );
};

export default OrbitingOrb;



// import React, { useRef, useEffect } from "react";
// import { useFrame } from "@react-three/fiber";
// import { MeshWobbleMaterial } from "@react-three/drei";
//
// const OrbitingOrb = ({ color, factor, radius, size }) => {
//     const meshRef = useRef();
//     let angle = 0;
//
//     useEffect(() => {
//         // This will be called on component unmount
//         return () => {
//             // Perform any cleanup operations here
//         };
//     }, []);
//
//     useFrame(() => {
//         if (meshRef.current) {
//             angle += 0.01;
//             const x = radius * Math.sin(angle);
//             const z = radius * Math.cos(angle);
//             const y = 0; // Keeping it in the center horizontally
//             meshRef.current.position.set(x, y, z);
//
//             // Scale in and out effect
//             const scale = size * (1 + 0.1 * Math.sin(angle * 2));
//             meshRef.current.scale.set(scale, scale, scale);
//         }
//     });
//
//     return (
//         <mesh ref={meshRef}>
//             <ambientLight intensity={0} color={"00ffff"} />
//             <pointLight intensity={1} position={[1, 5, 3]} />
//             <pointLight intensity={1} position={[2, 0, -5]} />
//             <pointLight intensity={2} position={[3, 7, -7]} />
//             <pointLight intensity={1} position={[4, -3, -15]} />
//             <pointLight intensity={5} position={[10, -9, 0]} />
//             <pointLight intensity={1} position={[-4, 0, 1]} />
//             <pointLight intensity={10} position={[-4, 0, 1]} />
//             <pointLight intensity={10} position={[-10, -4, 2]} />
//             <pointLight intensity={10} position={[5, 0, -5]} />
//             <pointLight intensity={10} position={[3, -10, 4]} />
//             <MeshWobbleMaterial attach="material" color={color} factor={factor} speed={0.1} roughness={0} />
//             <sphereGeometry args={[size, 32, 32]} />
//         </mesh>
//     );
// };
//
// export default OrbitingOrb;


