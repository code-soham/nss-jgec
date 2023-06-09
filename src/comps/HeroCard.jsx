export default function HeroCard(props) {
  console.log(props);
  return (
    <div className="group flex flex-col justify-between bg-cover bg-[url(https://i.imgur.com/iRyzAt0.png)] h-72 w-54 md:h-80 md:w-60 m-5 mt-10 relative rounded-lg shadow-sm shadow-[#37316f]">
      <img
        src={
          props.hero.image
            ? props.hero.image
            : "https://i.imgur.com/VfzpNHY.png"
        }
        alt="headshot"
        className="h-auto w-5/6 m-auto mt-6 rounded-lg border-2 border-white"
      />
      <div className="mb-4">
        <div className="text-center text-white font-semibold">
          {props.hero.name}
        </div>
        <div className="text-center text-white font-semibold">
          {props.hero.role}
        </div>
      </div>
    </div>
    // <div className="group h-52 w-52 md:h-60 md:w-60 m-5 mt-10 relative rounded-lg shadow-sm shadow-[#37316f]">
    //   <div className="bg-[#37316f] h-full w-full rounded-lg absolute">
    //     <a href={"mailTo:" + props.hero.email} target="_blank" rel="noreferrer">
    //       <img
    //         src="./mailIcon.svg"
    //         alt="mail"
    //         className="h-6 w-6 right-2 top-1/3 absolute"
    //       />
    //     </a>
    //     <div className="absolute text-sm text-green-200 bottom-1 text-center w-full text-ellipsis">
    //       {props.hero.name}
    //     </div>
    //   </div>
    //   <div className="bg-blue-200 h-full w-full flex rounded-lg absolute group-hover:-translate-x-9 group-hover:-translate-y-9 transition-all duration-300">
    //     <img
    //       src={
    //         props.hero.image
    //           ? props.hero.image
    //           : "https://i.imgur.com/VfzpNHY.png"
    //       }
    //       alt="headshot"
    //       className="h-5/6 w-5/6 m-auto rounded-lg"
    //     />
    //   </div>
    //   <div className="-bottom-4 absolute text-center underline underline-offset-2 h-4 w-full text-[#37316f]">
    //     {props.hero.role}
    //   </div>
    // </div>
  );
}
