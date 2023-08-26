function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light flex flex-col md:flex-row gap-4">
        <div className="w-fit text-center">
          &copy; {new Date().getFullYear()} Modified by &nbsp;
          <span className="text-secondary-dark  dark:text-secondary-light font-medium uppercase  dark:hover:text-indigo-300 duration-500">Saud Alghamdi.</span>
        </div>
        <div className="w-fit text-center">
          Original Design By
          <a
            href="https://stoman.me"
            target="__blank"
            className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
          >
            Stoman
          </a>
        </div>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
