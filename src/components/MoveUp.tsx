import { Link } from 'react-scroll';

export default function MoveUp() {
  return (
    <Link to="top" smooth={true} duration={700}>
      <svg className="w-16 h-16 cursor-pointer">
        <use href="/sprite.svg#up-circle" />
      </svg>
    </Link>
  );
}
