const Shimmer = () => {
  return (
    <div className="flex flex-wrap w-[80%] mx-auto">
      <div className="flex-1 min-w-[200px] h-[300px] m-2 p-2 rounded-xl shadow-md shadow-[rgba(173,168,168,0.437)_0px_2px_8px_0px]">
        <div className="w-full h-[100px] rounded-xl bg-[linear-gradient(to_right,_#f6f6f6_8%,_#f0f0f0_18%,_#f6f6f6_33%)]"></div>
        <div className="w-full h-[24px] my-[12px] rounded-[20px] bg-[linear-gradient(to_right,_#f6f6f6_8%,_#f0f0f0_18%,_#f6f6f6_33%)]"></div>
      </div>
    </div>
  );
};
export default Shimmer;
