import { FunnelPreview } from 'src/components/FunnelPreview';
import { funnels } from 'src/content/funnels';

type Props = {
  label: string;
  href: string;
  onClick?: () => void;
};

export const LinkListItem = ({ label, href }: Props) => (
  <a
    href={href}
    className="group flex items-center justify-between gap-4 rounded-md bg-secondary p-4 pr-6 text-black transition-all duration-300 hover:bg-secondary-highlight active:scale-90"
  >
    <span>{label}</span>{' '}
    <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
      →
    </span>
  </a>
);
