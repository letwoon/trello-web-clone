function CTASection() {
  return (
    <div className="px-10 lg:px-20 py-12 bg-gradient-to-r from-[#5944AA] to-[#E950B4] md:flex flex-col items-center">
      <h2 className="text-2xl text-white mb-6">
        Get started with Trello today
      </h2>
      <form className="mb-4 flex justify-center md:justify-between flex-wrap md:w-[558px]">
        <input
          className="hidden md:flex h-12 p-3 rounded-md flex-1 mr-3 focus:outline-none focus:ring focus:ring-white/70 border transition-all duration-200"
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
        />
        <button
          className="bg-blue-600 max-md:w-full rounded-md p-3 text-white hover:brightness-90 cursor-pointer"
          type="submit"
        >
          Sign up - it's free!
        </button>
      </form>
    </div>
  );
}
export default CTASection