// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
// import CanvasLoader from '../Loader';

// const Computers = () => {
//   const computer = useGLTF('desktop_pc/scene.gltf');

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <pointLight position={[0, 3, 0.75]} intensity={1} />
//       <spotLight position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <primitive scale={0.75} object={computer.scene} position={[0, -0.45, -1.5]}
//       rotation={[-0.01, -0.2, -0.15]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   return (
//     <Canvas
//       frameloop='demand'
//       shadows
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//       style={{ width: '100%', height: '100vh' }} // Adjust the size of the canvas
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// }

// export default ComputersCanvas;

import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('desktop_toy/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight position={[10, 5, 0.5]} intensity={0.5} />
      <primitive scale={isMobile ? 1.1 : 3} object={computer.scene}
        position={[0, -1, 0]}
        rotation={[0, 1.8, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '100%', height: '100vh' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;