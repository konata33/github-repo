import Image from 'next/image';

export default function QueryRepositoryRank({ reposRank }: { reposRank: any }) {
  // 获取排行榜第一的贡献者
  // const topContributor = reposRank[0];

  // 计算总提交次数
  const totalContributions = reposRank.reduce(
    (total: number, repo: any) => total + repo.contributions,
    0
  );

  return (
    <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 w-full mx-auto">
      <div className="w-1/2 fle flex-row items-center ">
        <div className="flex flex-row items-center w-full space-x-4">
          <div className="w-1/2 ">
            <div className="p-3 border-b-2 border-zinc-800">
              <div className="text-2xl text-white">Pull Request</div>
            </div>
            <div className="p-3 text-white">
              <p>这里是正文内容。</p>
            </div>
          </div>
          <div className="w-1/2 ">
            <div className="p-3 border-b-2 border-zinc-800">
              <div className="text-2xl text-white">Commit</div>
            </div>
            <div className="p-3 text-white">
              <p>这里是正文内容。</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 overflow-auto">
        {reposRank.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between p-4 space-y-2 md:space-y-0"
          >
            <div className="text-3xl font-bold md:w-8 text-center md:text-right">{index + 1}</div>
            <div className="flex items-center space-x-3 md:ml-8">
              <Image
                src={item.avatar_url}
                alt={item.login}
                width={50}
                height={50}
                className="mr-3"
              />
              <div>
                <span className="font-bold text-xl">{item.login}</span>
                <span className="text-md block">
                  (Proportion:{((item.contributions / totalContributions) * 100).toFixed(2)}%)
                </span>
              </div>
            </div>
            <span className="text-xl ml-auto">{item.contributions}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
