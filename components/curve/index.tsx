// 'use client';

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { usePathname } from 'next/navigation'; // Ganti ke usePathname
// import { text, curve, translate } from '../../app/animation';

// interface Dimensions {
//   width: number | null;
//   height: number | null;
// }

// const routes: Record<string, string> = {
//   '/': 'Home',
//   '/content': 'Content',
// };

// const anim = (variants: any) => ({
//   variants,
//   initial: 'initial',
//   animate: 'enter',
//   exit: 'exit',
// });

// export default function Curve({
//   children,
//   backgroundColor,
// }: {
//   children: React.ReactNode;
//   backgroundColor: string;
// }) {
//   const pathname = usePathname(); // Gunakan usePathname untuk mendapatkan path
//   const [dimensions, setDimensions] = useState<Dimensions>({
//     width: null,
//     height: null,
//   });

//   useEffect(() => {
//     function resize() {
//       setDimensions({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }

//     resize();
//     window.addEventListener('resize', resize);
//     return () => {
//       window.removeEventListener('resize', resize);
//     };
//   }, []);

//   return (
//     <div className="page curve" style={{ backgroundColor }}>
//       <div
//         style={{ opacity: dimensions.width == null ? 1 : 0 }}
//         className="background"
//       />
//       <motion.p className="route" {...anim(text)}>
//         {routes[pathname] || 'Unknown Route'}
//       </motion.p>
//       {dimensions.width != null && (
//         <SVG width={dimensions.width} height={dimensions.height} />
//       )}
//       {children}
//     </div>
//   );
// }

// const SVG = ({
//   height,
//   width,
// }: {
//   height: number | null;
//   width: number | null;
// }) => {
//   if (width === null || height === null) return null;

//   const initialPath = `
//         M0 300
//         Q${width / 2} 0 ${width} 300
//         L${width} ${height + 300}
//         Q${width / 2} ${height + 600} 0 ${height + 300}
//         L0 0
//     `;

//   const targetPath = `
//         M0 300
//         Q${width / 2} 0 ${width} 300
//         L${width} ${height}
//         Q${width / 2} ${height} 0 ${height}
//         L0 0
//     `;

//   return (
//     <motion.svg
//       width={width}
//       height={height}
//       xmlns="http://www.w3.org/2000/svg"
//       {...anim(translate)}
//     >
//       <motion.path
//         d={initialPath}
//         fill="currentColor"
//         variants={curve(initialPath, targetPath)} // Ganti spread operator ke deklarasi langsung
//         initial="initial"
//         animate="enter"
//         exit="exit"
//       />
//     </motion.svg>
//   );
// };
