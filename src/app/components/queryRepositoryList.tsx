import Image from 'next/image';

export default function QueryRepositoryList({
  repos,
  onRepoClick
}: {
  repos: any;
  onRepoClick: (repo: any) => void;
}) {
  return (
    <div className="w-full mx-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {repos.items.map((repo: any) => (
          <div
            key={repo.id}
            onClick={() => onRepoClick(repo)}
            className="
            my-2
            flex
            center
            transition-colors 
            duration-200 
            cursor-pointer 
            rounded 
            border
            border-black 
            border-opacity-25 
            bg-[#1e201f]"
          >
            <div>
              <Image
                src={repo.owner.avatar_url}
                alt={repo.full_name}
                width={100}
                height={110}
                objectFit="cover"
              />
            </div>
            <div className="mx-4 my-1 w-full">
              <h2 className="text-xl font-bold mb-7">{repo.full_name}</h2>
              <p className="text-md line-clamp-2">{repo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
