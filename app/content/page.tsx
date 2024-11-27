'use client';

import Sidebar from '@/components/Sidebar';
import { motion } from 'framer-motion';
import { pageVariants } from '../animation';

const ContentPage = () => {
  return (
    <motion.div
      className="w-[80%] h-full flex gap-x-10 m-auto"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="w-1/4">
        <Sidebar />
      </div>

      <div className="w-full mb-16 mt-16 space-y-16">
        <div className="space-y-4" id="about">
          <h3 className="text-2xl font-bold">About</h3>
          <p className="text-justify text-gray-400">
            An Informatics Engineering student who passionately pursues
            programming, especially in front-end web development, backend
            development, and cloud computing. I graduated from Bangkit Academy
            2024 Batch 1 as a Cloud Computing Distinction Graduate. I can use
            React.js or Next.js to build frontend applications, use Express.js
            to build backend systems, also build cloud infrastructure. I am
            always motivated to keep learning every day so that I can improve
            myself and be useful in any environment.
          </p>
        </div>

        <div className="space-y-4" id="experience">
          <h3 className="text-2xl font-bold">Experience</h3>
          <div className="flex justify-between">
            <p className="w-1/4 text-gray-400">Feb 2024 - July 2024</p>
            <div className="w-full">
              <p className="text-xl font-bold">Cloud Computing Cohort</p>
              <p className="text-gray-200">
                Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka
              </p>
              <p className="text-justify text-gray-400 mt-4">
                Bangkit Academy is a place to upgrade skills in tech and enhance
                soft skills. There are three learning paths at Bangkit, but I
                chose Cloud Computing. This program offers online courses and
                classes about cloud computing, as well as online classes to
                enhance soft skills and English speaking skills. After following
                this program for about 5 months, I graduated from Bangkit
                Academy with the precious title of Cloud Computing Distinction
                Graduate. This achievement places me in the top 10% of the
                cohort, recognizing my dedication and excellence in the field.
                In this program, I learned a lot about how to manage a team, be
                a leader of a project team, and also gained technical skills
                such as frontend development, backend development, and cloud
                computing. At the end of this program, my team and I created an
                app called FurniScan. We took one and a half months to complete
                this app. In this project, I developed the backend and managed
                the cloud environment.
              </p>
            </div>
          </div>
        </div>

        <div className=" space-y-4" id="about">
          <h3 className="text-2xl font-bold">Projects</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default ContentPage;
