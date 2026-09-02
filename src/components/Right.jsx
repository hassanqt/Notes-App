const Right = ({ task }) => {
  return (
    <div className="basis-[50%] lg:border-l-2 border-white p-8 flex flex-col gap-10">
      <h2 className="text-2xl font-semibold text-white">
        Recent Notes:
      </h2>

      <div className="flex flex-col justify-start gap-6 flex-wrap">
        {task.map((item, index) => (
          <div
            key={index}
            className="w-full min-h-20 bg-black/60 border-2 border-white text-white flex flex-col justify-center px-8 py-4 cursor-pointer rounded-xl"
          >
            <h3 className="font-semibold text-lg">{item.heading}</h3>
            <p className="text-sm opacity-70">{item.dets}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Right;