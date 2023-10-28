import { reboot, logout, shutdown } from '@napi-rs/system-shutdown'

import { Button } from '@/components/ui/button'

export default function Component() {
  return (
    <div className="w-screen h-screen bg-blue-500 flex justify-center items-center">
      <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg py-4 px-6">
        <div className="grid gap-4">
          <form
            className="inline-flex"
            action={async () => {
              'use server'
              reboot()
            }}
          >
            <Button
              className="text-gray-700 dark:text-white border-gray-300 dark:border-gray-600 w-full"
              variant="outline"
            >
              <svg
                className=" h-6 w-6 mr-2"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M8 16H3v5" />
              </svg>
              Reboot
            </Button>
          </form>
          <form
            className="inline-flex"
            action={async () => {
              'use server'
              logout()
            }}
          >
            <Button
              className="text-gray-700 dark:text-white border-gray-300 dark:border-gray-600 w-full"
              variant="outline"
            >
              <svg
                className=" h-6 w-6 mr-2"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" x2="9" y1="12" y2="12" />
              </svg>
              Logout
            </Button>
          </form>
          <form
            className="inline-flex"
            action={async () => {
              'use server'
              shutdown()
            }}
          >
            <Button
              className="text-gray-700 dark:text-white border-gray-300 dark:border-gray-600 w-full"
              variant="outline"
            >
              <svg
                className=" h-6 w-6 mr-2"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                <line x1="12" x2="12" y1="2" y2="12" />
              </svg>
              Shutdown
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
