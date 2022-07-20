import React from "react";

const Lights = () => {
    const FakeSphere = () => {
        return (
            <mesh>
                <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
                <meshBasicMaterial color={0xfff1ef} attach="material" />
            </mesh>
        );
    };

    return (
        <group>
            <FakeSphere />
            <ambientLight intensity={0.2} />
            <pointLight intensity={1.12} position={[0, 0, 0]} />
        </group>
    );
};

export default Lights ;