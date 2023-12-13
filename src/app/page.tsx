import QueryRepository from './components/queryRepository';
import backgroundImage from '../../public/bg.svg';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.src})`
      }}
      className="w-full h-full flex center bg-cover bg-no-repeat bg-center"
    >
      <QueryRepository />
    </div>
  );
}
