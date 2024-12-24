const Footer = () => {
return (
    <footer className="bg-charcoal text-soft-white font-didact text-base md:text-lg p-5 md:p-10 flex flex-col md:flex-row gap-5 items-center justify-around">
        <div className="flex gap-2 items-center">
            <i className="fas fa-envelope"></i>
            <p>rnjbuilding1@gmail.com</p>
        </div>
        <div className="flex gap-2 items-center text-center md:text-left">
            <i className="fas fa-map-marker-alt"></i>
            <p>
                #79 Bayan-Bayanan Avenue, Marikina Heights, Marikina City 1810 Metro
                Manila
            </p>
        </div>
        <div className="flex gap-2 items-center">
            <i className="fab fa-facebook"></i>
            <p><a href="https://www.facebook.com/profile.php?id=61553862232023" target="_blank">RNJ Building</a></p>
        </div>
    </footer>
);
};

export default Footer;
