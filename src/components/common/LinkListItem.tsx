type Props = {
  label: string;
  onClick?: () => void;
};

export const LinkListItem = ({ label, onClick }: Props) => (
  <button
    type="button"
    className="group flex items-center justify-between gap-4 rounded-md bg-secondary p-4 pr-6 text-left text-black transition-all duration-300 hover:bg-secondary-highlight active:scale-90"
    onClick={onClick}
  >
    <span>{label}</span>{' '}
    <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
      →
    </span>
  </button>
);
