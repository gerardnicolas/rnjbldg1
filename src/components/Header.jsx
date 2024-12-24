export const Header = () => {
  return (
    <header>
      <nav className="flex flex-col md:flex-row justify-between items-center p-5 md:p-10 bg-cream-white text-charcoal font-didact text-base md:text-xl">
        <img
          src="/tiffanyAndBlackLogoRNJ.png"
          alt="Logo"
          className="w-auto h-12 md:h-16"
        />
        <ul className="flex flex-col md:flex-row gap-5 md:gap-12 list-none m-0 p-0 mt-5 md:mt-0">
          <li className="text-center md:text-left">
            <a
              href="http://m.me/profile.php?id=61553862232023"
              target="_blank"
              className="hover:bg-dark-teal transition-colors duration-300 px-5 py-2 bg-tiffany-blue text-cream-white rounded-full"
            >
              Inquire Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
