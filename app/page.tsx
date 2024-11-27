'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BsCloudDownload } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { motion } from 'framer-motion';
import { pageVariants } from './animation';

export default function Home() {
  return (
    <motion.div
      className="w-full h-screen flex flex-col justify-center items-center m-auto"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-8xl font-bold">MUHAMMAD FAUZAN</h1>
      <p className="text-3xl">Software Engineer</p>
      <p>
        Hi! I'm Muhammad Fauzan, a passionate Informatics Engineering student
        who is interested in software engineering. <br /> I specialize in
        backend development, frontend development, and cloud computing.
      </p>

      <div className="space-x-4">
        <Button variant="secondary" className="items-center p-3">
          Resume
          <BsCloudDownload />
        </Button>
        <Link href="/content">
          <Button>
            Learn More <IoIosArrowForward />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
