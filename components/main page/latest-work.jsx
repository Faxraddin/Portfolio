import Image from "next/image";

const LatestWork = (props) => {
  return (
    <div className="w-1/3 flex-1 shadow hover:shadow-xl ease-linear latest-work">
      <div className="p-3 border border-solid border-thin flex flex-col gap-3">
        <Image src={props.img} width={320} height={170} />
        <h2>{props.name}</h2>
      </div>
    </div>
  );
};

export default LatestWork;
