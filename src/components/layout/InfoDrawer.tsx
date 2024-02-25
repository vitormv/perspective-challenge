import { Dialog, Transition } from '@headlessui/react';
import { QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

type Props = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};

export const InfoDrawer = ({ isOpen, setOpen }: Props) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen} open={isOpen}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-x-0 bottom-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen border-t-2 border-t-primary bg-white px-4 py-6 shadow-[rgba(0,0,15,0.1)_0px_-3px_10px_4px]">
                  <Dialog.Title className="mb-4 flex justify-between gap-4 text-base font-semibold leading-6 text-gray-900">
                    <div className="flex items-center gap-4 text-primary">
                      <QuestionMarkCircleIcon
                        className="inline-block h-5 w-5 align-middle"
                        aria-hidden="true"
                      />
                      <span>Navigation</span>
                    </div>
                    <button
                      type="button"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => setOpen(false)}
                    >
                      <XMarkIcon className="inline-block h-6 w-6" aria-hidden="true" />
                    </button>
                  </Dialog.Title>

                  <p className="mb-6 max-w-lg text-sm text-gray-800">
                    <strong>On desktop</strong>, you can navigate through the funnel using the&nbsp;
                    <strong>keyboard arrows keys</strong>, or by clicking the arrows on either side.
                  </p>
                  <p className="mb-6 max-w-lg text-sm text-gray-800">
                    <strong>On mobile</strong>, you can use swipe navigation to move between pages.
                  </p>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
