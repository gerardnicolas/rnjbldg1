const Hero = () => {
  return (
    <div>
      <div className="w-full h-auto">
        <img
          src="./src/assets/rnjbuildingcover_cropped.jpg"
          className="w-full min-h-svh object-cover sm:h-64 md:h-80 lg:h-96"
        />
      </div>

      <div className="flex flex-col py-10 my-10 mx-4 md:mx-52 text-charcoal gap-3">
        <h1 className="font-didact font-bold text-3xl text-center md:text-left">
          Welcome to RNJ Marikina Heights
        </h1>
        <p className="font-didact font-medium text-lg text-center md:text-left">
          A 2 storey commercial building in the heart of Marikina Heights with a
          variety of stores to choose from.
        </p>
      </div>

      <div className="flex flex-wrap justify-around items-center p-4 mb-10 mx-4 md:mx-52 bg-charcoal text-cream-white font-didact text-lg rounded">
        <img src="./src/assets/icecreamhouselogo_clearbg.png" alt="" className="h-16 w-auto mb-4 md:mb-0"/>
        <img src="./src/assets/logos/ceblhuilogo.png" alt="" className="h-16 w-auto mb-4 md:mb-0"/>
        <img src="./src/assets/logos/dlogofin.webp" alt="" className="h-28 w-auto mb-4 md:mb-0"/>
        <img src="./src/assets/logos/pandemnllogo.webp" alt="" className="h-16 w-auto mb-4 md:mb-0"/>
        <img src="./src/assets/logos/tanvlogo.jpg" alt="" className="h-16 w-auto rounded-full mb-4 md:mb-0"/>
      </div>
    </div>
  );
};

export default Hero;
