function GetStarted() {
  return (
    <section className="">
      <div className="container mx-auto pt-52">
        <div className="mx-auto relative">
          <div className="bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[-150px] rounded-sm element-center flex-col  w-[850px] max-w-[90%] min-h-[270px] text-white text-center p-8 space-y-6">
            <h3 className="font-bold text-xl md:text-3xl">
              Get early access today
            </h3>
            <p className="w-[630px] max-w-full mx-auto">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
            <form className="w-full flex flex-row justify-between items-center flex-wrap md:px-[60px] gap-[30px]">
              <input
                type="email"
                placeholder="exmple@gmail.com"
                className="w-full md:flex-1 sm:flex-1 h-12 rounded-full outline-none border-none text-black font-bold pl-8"
              />

              <button className="w-full md:w-[200px] sm:w-[200px] h-12 bg-blue-400 hover:bg-blue-500 transition-all duration-300 rounded-full">
                Get Started For Free
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
