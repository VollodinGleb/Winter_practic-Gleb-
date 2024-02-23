import { Link } from '../link';

export const Footer = () => (
  <div className="text-main-secondary mt-20 flex w-full flex-wrap items-center justify-center gap-40 bg-secondary pb-10 pt-10 text-center">
    <div className="flex flex-col text-secondary items-center">
      <span className="text-white flex">About</span>
      <p className="text-white">Flat UI Colors allows you to choose a palette and contrasting color</p>
    </div>

    <div className="flex flex-col text-secondary">
      <span className="text-white">Auther</span>
      <p className="text-white">Volodin Gleb</p>
    </div>
  </div>
);
