import React from "react";

interface pageProps {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  onPressVerify: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

function VerifySignIn({ code, setCode, onPressVerify }: pageProps) {
  return (
    <form className="space-y-4 md:space-y-6" onSubmit={onPressVerify}>
      <div>
        <label
          htmlFor="first-name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Code
        </label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="enter your verification code here"
        />
      </div>
      <button
        type="submit"
        className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Verify Email
      </button>
    </form>
  );
}

export default VerifySignIn;
