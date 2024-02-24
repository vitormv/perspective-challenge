'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useCallback, useState } from 'react';
import { Sidebar } from 'src/components/layout/Sidebar';
import { FunnelType } from 'src/funnel.types';

type Props = {
  onSelectFunnel: (funnel: FunnelType) => void;
};

export const Navbar = ({ onSelectFunnel }: Props) => {
  const [open, setOpen] = useState(false);

  const onFunnelChosen = useCallback(
    (funnel: FunnelType) => {
      setOpen(false);
      onSelectFunnel(funnel);
    },
    [onSelectFunnel],
  );

  return (
    <nav className="flex grow-0 justify-between bg-primary p-4">
      <a className="flex-variable flex items-center justify-between" href="/">
        <div className="mr-6 flex flex-shrink-0 items-center text-white">
          <img src="/logo.png" width="36" height="36" alt="Perspective logo" />
        </div>

        <div className="flex w-auto flex-grow items-center font-display text-xl text-white">
          Funnel Preview
        </div>
      </a>

      <button
        type="button"
        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        onClick={() => setOpen(true)}
      >
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Open main menu</span>
        {open ? (
          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        )}
      </button>

      <Sidebar isOpen={open} setOpen={setOpen} onSelectFunnel={onFunnelChosen} />
    </nav>
  );
};
