'use client';

import { Input } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import List from './queryResponsitoryList';

export default function QueryRepository() {
  const [input, setInput] = useState('');
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [hasBeenSearch, setHasBeenSearch] = useState(false);
  const controls = useAnimation();
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (e.target.value) {
      setHasBeenVisible(true);
      try {
        const responsitoryResult = await fetch(
          `https://github.com/search?q=${e.target.value}&type=repositories`
        );
        console.log(responsitoryResult.json());
        setHasBeenSearch(true);
      } catch (error) {
        setHasBeenSearch(true);
      }
    }
  };

  useEffect(() => {
    if (input) {
      // If input has value, start "show" animation
      controls.start({ y: 0, opacity: 1, transition: { duration: 1.5 } });
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
            innerWrapper: 'bg-transparent'
          }}
          placeholder="Search repository..."
        />
      </div>
      {hasBeenVisible && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={controls}
          className="w-screen flex-1  flex center rounded bg-black"
        >
          {!hasBeenSearch && <span className="icon-[svg-spinners--wind-toy] text-6xl"></span>}
          {hasBeenSearch && <List />}
        </motion.div>
      )}
    </div>
  );
}
