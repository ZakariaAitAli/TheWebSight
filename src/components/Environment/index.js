import React from "react";
import { BackSide } from "three";

const Environment = () => {
    return (
        <mesh>
            <sphereBufferGeometry args={[5, 10, 10]} attach="geometry" />
            <meshStandardMaterial
                color={0x8accff}
                attach="material"
                side={BackSide}
                metalness={0.4}
            />
        </mesh>
    );
};

export default Environment ;