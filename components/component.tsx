import { Button } from '@/components/ui/button'

export function Component() {
  return (
    <div className="w-full max-w-md mx-auto py-4 px-6">
      <div className="grid gap-4">
        <Button
          className="text-gray-700 dark:text-white border-gray-300 dark:border-gray-600"
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
            <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Lock
        </Button>
        <Button
          className="text-gray-700 dark:text-white border-gray-300 dark:border-gray-600"
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
        <Button
          className="text-gray-700 dark:text-white border-gray-300 dark:border-gray-600"
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
      </div>
    </div>
  )
}
