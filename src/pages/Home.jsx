import Counter from "../components/Header";
import img1 from "../assets/klj (208).jpg";
import img2 from "../assets/bd333727-c83a-4813-bd0e-d13647f4ffee.jpg";
import img3 from "../assets/bd02499e-7736-4f8a-8e98-0f0143a37c94.jpg";
import img4 from "../assets/bf9d663d-7f77-45c4-9a57-b89cb9f9e8ff.jpg";
import img5 from "../assets/b308df24-0304-4f34-92c6-e4cf69ded346.jpg";
import img6 from "../assets/team-1.jpg";
import img7 from "../assets/team-4.jpg";
import img8 from "../assets/team-3.jpg";

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
            <div className="absolute inset-0 bg-white flex items-center">
              <div className="max-w-6xl mx-auto px-4">
                <div className="max-w-3xl">
                  <h2 className="text-orange-900 text-2xl hover:text-orange-700 uppercase mb-3 animate-slideInDown">
                    About Us
                  </h2>
                  <h1 className="text-5xl text-orange-900 font-bold animate-slideInDown">
                    Get Complete Information of Us
                  </h1>
                  <p className="text-lg mb-4 pb-2">
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
          {/* Slide 3 */}
          <div className="relative">
            <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
                <div className="md:w-1/2 ml-0 md:ml-10">
                    <img  className="w-[500px] h-[400px]  max-w-xs md:max-w-mdobject-center rounded-[50px]"
                        src={img5} />
                </div>
                <div className="flex flex-col mb-32 space-y-12 ml-0 md:ml-[310px] md:w-1/2">
                    <h1 className="max-w-md text-orange-800 text-4xl font-bold text-center md:text-5xl md:text-left">
                        Sandwich of Meat
                    </h1>
                    <p className="max-w-sm text-orange-900  text-center text-DarkGrayishBlue md:text-left">
                        Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <a href="#" className="p-3 hover:bg-orange-500 px-6 pt-2 text-white bg-orange-600 rounded-full baseline">
                        Get Started
                        </a>
                        <a href="#" className="p-3 px-6 pt-2 text-white hover:bg-orange-900 rounded-full bg-gray-900 baseline">
                        View ingredients 
                        </a>
                    </div>
                </div>
            </div>
          </div>
         {/* Slide 4 */}
          <div className="relative">
            <img
              className="w-full h-[500px] object-cover"
              src=""
              alt=""
            />
            <div className="absolute inset-0 bg-white flex items-center">
              <div className="max-w-6xl mx-auto px-4">
                <div className="max-w-3xl ">
                  <h1 className="text-5xl text-orange-900 font-bold animate-slideInDown">
                    Our Team
                  </h1>
                  <div class="flex flex-col mt-24 md:flex-row md:space-x-10">
                    <div class="flex flex-col items-center p-3 space-y-6  ">
                    <img className="w-full h-[500px] object-cover w-[300px] h-[300px] object-center "
                    src={img6}
                     />
                    <p className="text-orange-900 text-2xl"> Alex Z</p>
                    </div>
                    <div class="flex flex-col items-center   p-6 space-y-6  ">
                        <img className="w-full h-[500px] object-cover w-[300px] h-[300px] object-center "
                        src={img7} />
                        <p className="text-orange-900 text-2xl">Max </p>
                    </div>
                    <div class="flex flex-col items-center   p-6 space-y-6  ">
                        <img  className="w-full h-[500px] object-cover w-[300px] h-[300px] object-center "
                        src={img8} />
                        <p className="text-orange-900 text-2xl">Elezabet</p>
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
