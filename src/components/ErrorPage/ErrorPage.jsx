const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
          <div className="text-center bg-black p-8 rounded-lg shadow-lg">
            <h1 className="text-9xl font-bold text-red-500">404</h1>
            <h2 className="text-2xl font-semibold text-white mt-4">Oops! Page Not Found</h2>
            <p className="text-white mt-2">
              The page youre looking for might have been removed or is temporarily unavailable.
            </p>
            <a
              href="/"
              className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition duration-300"
            >
              Go Back to Homepage
            </a>
          </div>
        </div>
      );
    };
    
export default ErrorPage;