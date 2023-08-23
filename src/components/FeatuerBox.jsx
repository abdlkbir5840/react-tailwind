const FeatureBox = ({ icon, title, description }) => {
  return (
      <div className="mx-auto element-center flex-col w-[90%] h-60 space-y-6">
        <img
          src={`assets/images/${icon}`}
          alt="icon"
          className="w-24 h-28 object-contain"
        />
        <div className="text-white text-center">
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="font-normal text-sm w-[70%] mx-auto">{description}</p>
        </div>
      </div>
  );
};

export default FeatureBox;
