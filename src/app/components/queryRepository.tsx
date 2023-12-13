'use client';

import { Input } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

export default function QueryRepository() {
  const [input, setInput] = useState('');
  const controls = useAnimation();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input) {
      // If input has value, start "show" animation
      controls.start({ opacity: 1, transition: { duration: 1.5 } });
    } else {
      // If input is empty, start "hide" animation
      controls.start({ opacity: 0, transition: { duration: 1.5 } });
    }
  }, [input, controls]);
  return (
    <div className="flex justify-center flex-col min-h-screen">
      <div className="flex justify-center items-center flex-col py-10">
        <div className="py-5 text-6xl md:text-2xl text-slate-50">
          Who is the top contributor in the project
        </div>
        <Input
          isClearable
          radius="lg"
          value={input}
          onChange={handleSearch} // add this line
          className="w-3/4 md:w-5/6 py-5"
          classNames={{
            label: 'text-black/50 dark:text-white/90',
            innerWrapper: 'bg-transparent',
            inputWrapper: []
          }}
          placeholder="Search repository..."
        />
      </div>
      <AnimatePresence>
        {input && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="py-5 bg-white flex-grow"
          >
            <motion.div></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
