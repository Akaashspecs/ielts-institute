const ContactForm = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/bakery.jpg')",
        backgroundColor: "rgba(255,255,255,0.8)", // overlay color
        backgroundBlendMode: "overlay", // or multiply, soft-light, etc.
      }}
      className="  bg-repeat backdrop-blur-3xl flex flex-col justify-center items-center py-5"
    >
      <form className="bg-white bg-opacity-70 p-5 sm:p-10 rounded-2xl shadow-xl flex flex-col gap-5 w-[calc(100vw-30px)]  sm:w-[500px] mx-0 sm:mx-11">
        <div className="text-4xl font-bold text-amber-800 mb-10 w-full text-center">
          Contact Us
        </div>
        <input
          type="text"
          placeholder="Name"
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <textarea
          placeholder="Message"
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 h-32 resize-none"
        ></textarea>
        <button className="bg-amber-500 text-white p-3 rounded-lg hover:bg-amber-600 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
