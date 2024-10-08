export const LoadingAnimation = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto mb-4 animate-spin" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Loading</h2>
          <p className="text-gray-500">Please wait while we prepare your experience...</p>
        </div>
      </div>
    );
  }
  