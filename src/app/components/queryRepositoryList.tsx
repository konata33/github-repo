import Image from 'next/image';

export default function QueryRepositoryList({ repos }: { repos: any }) {
  return (
    <div className="w-full mx-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {repos.items.map((repo: any) => (
          <div
            key={repo.id}
            className="my-7 flex  items-start transition-colors duration-200 cursor-pointer rounded"
          >
            <div>
              <Image
                src={repo.owner.avatar_url}
                alt={repo.full_name}
                width={60}
                height={60}
                objectFit="cover"
              />
            </div>
            <div className="ml-4 mt-2 w-full">
              <h2 className="text-xl font-bold mb-7">{repo.full_name}</h2>
              <p>{repo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
