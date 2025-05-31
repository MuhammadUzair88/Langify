const Card = ({
  name,
  avatar,
  nativeLang,
  nativeFlag,
  learningLang,
  learningFlag,
}) => {
  return (
    <div className="w-fit bg-black text-white py-3 px-5 rounded-2xl flex flex-col justify-center gap-3">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <h1 className="text-lg font-semibold">{name}</h1>
      </div>

      <div className="flex gap-2 text-sm flex-wrap">
        <div className="flex items-center gap-1 bg-emerald-600 text-white px-3 py-1 rounded-full">
          <img src={nativeFlag} alt="Native Flag" className="w-4 h-3" />
          <span className="capitalize">Native: {nativeLang}</span>
        </div>

        <div className="flex items-center gap-1 border border-white px-3 py-1 rounded-full text-white">
          <img src={learningFlag} alt="Learning Flag" className="w-4 h-3" />
          <span className="capitalize">Learning: {learningLang}</span>
        </div>
      </div>

      <button className="btn btn-outline btn-primary text-white w-full">
        Message
      </button>
    </div>
  );
};

export default Card;
