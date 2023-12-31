'use client';

import { Input } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import List from './queryRepositoryList';
import Rank from './queryRepositoryRank';
import { queries } from '../queries';
import { useDebounce } from '../hooks/util';

export default function QueryRepository() {
  const [input, setInput] = useState('');
  const [repoData, setrepoData] = useState('');
  const [repoRankData, setrepoRankData] = useState([]);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [hasBeenSearch, setHasBeenSearch] = useState(false);
  const debouncedSearch = useDebounce(input, 500);
  const controls = useAnimation();
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setrepoRankData([]);
    setInput(e.target.value);
  };
  const handleRepoClick = async (repo: any) => {
    setHasBeenSearch(false);
    const responseData = await queries.repo.queryRank(repo);
    const responsePulls = await queries.repo.queryPulls(repo);
    console.log(responsePulls);
    setrepoRankData(responseData);
    setHasBeenSearch(true);
  };

  useEffect(() => {
    setHasBeenVisible(true);
    if (debouncedSearch) {
      const responseData = async () => {
        setHasBeenSearch(false);
        const response: any = await queries.repo.query(input);
        setrepoData(response);
        setHasBeenSearch(true);
      };
      responseData();
    }
  }, [debouncedSearch]);

  useEffect(() => {
    if (input) {
      // If input has value, start "show" animation
      controls.start({ y: 0, opacity: 1, transition: { duration: 1.5 } });
    }
  }, [input, controls]);
  return (
    <div className="flex justify-center flex-col min-h-screen">
      <div className="flex justify-center items-center flex-col py-10">
        <div className="py-5  xs:text-2xl md:text-6xl lg:text-8xl text-slate-50">
          GitHub Repository Contributors List
        </div>
        <Input
          isClearable
          radius="lg"
          value={input}
          onChange={handleSearch} // add this line
          className="w-11/12 sm:w-5/6 md:w-3/4 lg:w-5/6 xl:w-1/2 py-5"
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
          className={`w-screen overflow-auto flex justify-center rounded transition-all duration-3000 ${
            hasBeenSearch ? 'max-h-[65vh]' : 'max-h-[10vh]'
          }`}
        >
          {!hasBeenSearch && <span className="icon-[svg-spinners--wind-toy] text-6xl"></span>}
          {hasBeenSearch ? (
            repoRankData.length > 0 ? (
              <Rank reposRank={repoRankData} />
            ) : (
              <List repos={repoData} onRepoClick={handleRepoClick} />
            )
          ) : null}
        </motion.div>
      )}
    </div>
  );
}
