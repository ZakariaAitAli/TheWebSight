import './index.css';
import React from "react";

//R3F
import { Canvas } from "react-three-fiber";
// import { Html } from "@react-three/drei"; 

//components
import Cubes from "./components/Cubes";
import Lights from "./components/Lights";
import Environment from "./components/Environment";
import Navbar from './components/navbar';




function App() {
  return (
    <>
    <Navbar></Navbar>
    <Canvas>
        <Cubes />
        <Lights />
        <Environment />
    </Canvas>
    </>
  );
}


export default App;
