import Counter from "../components/Header";
import img1 from "../assets/klj (208).jpg";
import img2 from "../assets/bd333727-c83a-4813-bd0e-d13647f4ffee.jpg";
import img3 from "../assets/bd02499e-7736-4f8a-8e98-0f0143a37c94.jpg";
import img4 from "../assets/bf9d663d-7f77-45c4-9a57-b89cb9f9e8ff.jpg";

function Home() {
  return (
    <main>
      <div className="w-full mb-5">
        {/* Carousel wrapper */}
        <div className="relative w-full overflow-hidden">
          {/* Slide 1 */}
          <div className="relative">
            <img
              className="w-full h-[500px] object-cover"
               src={img1}
              alt=""
            />
            <div className="absolute inset-0 bg-[rgba(24,29,56,0.7)] flex items-center">
              <div className="max-w-6xl mx-auto px-4">
                <div className="max-w-3xl">
                  <h5 className="text-orange-500 uppercase mb-3 animate-slideInDown">
                    Best Resturant of Herat
                  </h5>
                  <h1 className="text-5xl font-bold text-white animate-slideInDown">
                    The Best Online Resturant 
                  </h1>
                  <p className="text-lg text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
                    Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.
                  </p>
                  <a
                    href="#"
                    className="bg-orange-500 text-white py-3 px-8 mr-3 rounded hover:bg-white hover:text-orange-400 transition animate-slideInLeft"
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="bg-white text-gray-800 py-3 px-8 rounded hover:bg-orange-500 hover:text-white transition animate-slideInRight"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="relative">
            <img
              className="w-full h-[500px] object-cover"
              src="img/bd333727-c83a-4813-bd0e-d13647f4ffee.jpg"
              alt=""
            />
            <img
              className="w-full h-[500px] object-cover"
              src="img/bd02499e-7736-4f8a-8e98-0f0143a37c94.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gray-400 flex items-center">
              <div className="max-w-6xl mx-auto px-4">
                <div className="max-w-3xl">
                  <h2 className="text-blue-500 uppercase mb-3 animate-slideInDown">
                    About Us
                  </h2>
                  <h1 className="text-5xl font-bold text-white animate-slideInDown">
                    Get Complete Information of Us
                  </h1>
                  <p className="text-lg text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
                    Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.
                  </p>
                  <div class="flex flex-col mt-24 md:flex-row md:space-x-10">
                    {/* <!-- sweets 1 --> */}
                    <div class="flex flex-col items-center text-darkness hover:text-orange-900 hover:underline p-3 space-y-6 rounded-full ">
                    <img className="w-[350px] h-[200px] object-center rounded-full"
                    src={img2}
                     />
                    <p class="text-sm text-DarkGrayishorange">Milk strabeerry shake</p>
                    </div>
                    {/* <!-- sweets 2 --> */}
                    <div class="flex flex-col items-center text-darkness hover:text-orange-900 hover:underline p-6 space-y-6 rounded-full ">
                        <img className="w-[350px] h-[200px] object-center rounded-full"
                        src={img3} />
                        <p class="text-sm text-DarkGrayishorange">Italian vanila dessert</p>
                    </div>
                    {/* <!-- sweets 3 --> */}
                    <div class="flex flex-col items-center text-darkness hover:text-orange-900 hover:underline p-6 space-y-6 rounded-full ">
                        <img  className="w-[350px] h-[200px] object-center rounded-full"
                        src={img4} />
                        <p class="text-sm text-DarkGrayishBlue">Vanila milk cake</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
