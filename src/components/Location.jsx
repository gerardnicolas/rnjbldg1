const Location = () => {
  return (
    <div className="flex mt-10 gap-3 bg-dark-teal text-cream-white font-didact">
      <div style={{ flex: 1 }} className="p-10 mt-10">
        <p className="font-bold text-3xl">RNJ Building</p>

        <div className="flex-col gap-2 items-center mt-8">
          <div className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt"/>
            <p>
              #79 Bayan-Bayanan Avenue, Marikina Heights,
            </p>
          </div>
          <p>Marikina City 1810, Metro Manila</p>
          <p className="font-semibold">Address</p>
        </div>

        <div className="flex-col gap-2 items-center mt-8">
          <div className="flex items-center gap-2">
            <i className="fas fa-phone-alt"/>
            <p>(+63) 917 408 5657</p>
          </div>
          <p className="font-semibold">Contact Number</p>
        </div>

        <div className="flex-col gap-2 items-center mt-8">
          <div className="flex items-center gap-2">
            <i className="fas fa-envelope" />
            <p>rnjbuilding1@gmail.com</p>
          </div>
          <p className="font-semibold">Email Address</p>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <iframe
          title="RNJ Marikina Heights Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15440.919345457432!2d121.11375384999998!3d14.642890699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b98964bd4a27%3A0x29669c96a663bacf!2sRNJ%20Building!5e0!3m2!1sen!2sph!4v1735047160252!5m2!1sen!2sph"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;