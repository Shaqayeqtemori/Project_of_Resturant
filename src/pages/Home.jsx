import Counter from "../components/Header";
import img1 from "../assets/klj (208).jpg";
import img2 from "../assets/bd333727-c83a-4813-bd0e-d13647f4ffee.jpg";
import img3 from "../assets/bd02499e-7736-4f8a-8e98-0f0143a37c94.jpg";
import img4 from "../assets/bf9d663d-7f77-45c4-9a57-b89cb9f9e8ff.jpg";
import img5 from "../assets/b308df24-0304-4f34-92c6-e4cf69ded346.jpg";
import img6 from "../assets/team-1.jpg";
import img7 from "../assets/team-4.jpg";
import img8 from "../assets/team-3.jpg";
import img9 from "../assets/b83e351a-4014-41a3-97b3-283047c877dc.jpg";
import img10 from "../assets/b308df24-0304-4f34-92c6-e4cf69ded346.jpg";
import img11 from "../assets/b0cdd552-274d-4e53-851b-6677372bda8b.jpg";
import img12 from "../assets/event-2.jpg";
import img13 from "../assets/event-3.jpg";
import img14 from "../assets/b9734216-423d-4704-b3ef-e910463fcd5a.jpg";

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
          <div className="flex" style={{marginTop:'180px'}}>
            <div className="relative w-1/2">
              <div className="absolute inset-0  flex items-center">
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
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos deserunt laudantium explicabo
                      adipisci nam corrupti assumenda pariatur iste, placeat natus nihil sunt fuga perferendis reiciendis,
                      veniam cupiditate voluptate impedit asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Ullam unde facilis recusandae id beatae vitae veritatis, velit maiores praesentium fuga, accusamus magni non
                      voluptatum voluptatem totam incidunt eligendi quia dolorem!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-1/2">
            
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-6xl mx-auto px-4">
                  <div className="max-w-3xl">
                    <p className="text-lg mb-4 pb-2">
                      Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
                      Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit fugiat ab adipisci
                      qui possimus, a explicabo accusantium! Quo iste natus cum quam eveniet sunt, distinctio 
                      veniam rerum ex nisi. Perferendis.
                    </p>
                    <a
                      href="#"
                      className="bg-orange-600 text-white text-orange-800 py-3 px-8 rounded hover:bg-orange-500 hover:text-white transition animate-slideInRight"
                    >
                      Join Now 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 4 */}
          <div className="flex" style={{marginTop:'270px'}}>
            <div className="relative w-1/3">
              <div className="absolute inset-0  flex items-center">
                <div className="max-w-6xl mx-auto px-4">
                  <div className="max-w-3xl bg-gray-900 hover:bg-gray-700 w-[300px] text-white hover:text-orange-800 p-4">
                    <i className="fa fa-user-tie text-9xl ml-[50px]"></i>
                    <p  className="ml-[80px]">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-1/4">
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-6xl mx-auto px-4">
                  <div className="max-w-3xl bg-gray-900 hover:bg-gray-700 w-[300px] text-white hover:text-orange-800 p-4">
                    <i className="fa fa-boxes text-9xl ml-[50px]"></i>
                    <p  className="ml-[110px]">Boxes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-1/4">
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-6xl mx-auto px-4">
                  <div className="max-w-3xl bg-gray-900 hover:bg-gray-700 w-[300px] text-white hover:text-orange-800 p-4">
                    <i className="fa fa-utensils text-9xl ml-[50px]"></i>
                    <p  className="ml-[110px]">Reserve</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-1/4">
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-6xl mx-auto px-4">
                  <div className="max-w-3xl bg-gray-900 hover:bg-gray-700 w-[300px] text-white hover:text-orange-800 p-4">
                    <i className="fa fa-theater-masks text-9xl ml-[50px]"></i>
                    <p  className="ml-[90px]">Our Programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 5 */}
          <h1 className="text-center md:mr-4 text-5xl text-orange-900 mb-9" style={{marginTop:'150px'}}>Our Services</h1>
          <h1 className="text-center md:mr-4 text-3xl text-orange-500">Our Deserts</h1>
          <div className="flex flex-col mt-0 md:flex-row md:space-x-0 items-center justify-center">
          {/* sweets 1 */}
          <div className="flex flex-col items-center hover:text-orange-900 hover:underline p-6 space-y-6 rounded-full">
            <img className="w-[350px] h-[200px] object-center rounded-full" src={img2} />
            <p className="text-sm">Milk strawberry shake</p>
          </div>

          {/* sweets 2 */}
          <div className="flex flex-col items-center hover:text-orange-900 hover:underline p-6 space-y-6 rounded-full">
            <img className="w-[350px] h-[200px] object-center rounded-full" src={img3} />
            <p className="text-sm">Italian vanilla dessert</p>
          </div>

          {/* sweets 3 */}
          <div className="flex flex-col items-center hover:text-orange-900 hover:underline p-6 space-y-6 rounded-full">
            <img className="w-[350px] h-[200px] object-center rounded-full" src={img4} />
            <p className="text-sm">Vanilla milk cake</p>
          </div>
          </div>
          <h1 className="text-center md:mr-4 text-3xl text-orange-500">Our Main Food</h1>
          <div className="flex flex-col mt-0 md:flex-row md:space-x-0 items-center justify-center">
            {/* sweets 1 */}
            <div className="flex flex-col items-center hover:text-orange-900 hover:underline p-6 space-y-6 rounded-full">
              <img className="w-[350px] h-[200px] object-center rounded-full" src={img9} />
              <p className="text-sm">Italian Pizza</p>
            </div>

            {/* sweets 2 */}
            <div className="flex flex-col items-center hover:text-orange-900 hover:underline p-6 space-y-6 rounded-full">
              <img className="w-[350px] h-[200px] object-center rounded-full" src={img10} />
              <p className="text-sm">Meat Sandwich</p>
            </div>

            {/* sweets 3 */}
            <div className="flex flex-col items-center hover:text-orange-900 hover:underline p-6 space-y-6 rounded-full">
              <img className="w-[350px] h-[200px] object-center rounded-full" src={img11} />
              <p className="text-sm">Soupe</p>
            </div>
          </div>
          <h1 className="text-center md:mr-4 text-3xl text-orange-500">Our Services for your party</h1>
          <div className="flex flex-col mt-0 md:flex-row md:space-x-0 items-center justify-center">
            {/* sweets 1 */}
            <div className="flex flex-col items-center hover:text-orange-900 hover:underline p-6 space-y-6 rounded-full">
              <img className="w-[350px] h-[200px] object-center rounded-full" src={img12} />
              <p className="text-sm">For Wedding</p>
            </div>

            {/* sweets 2 */}
            <div className="flex flex-col items-center hover:text-orange-900 hover:underline p-6 space-y-6 rounded-full">
              <img className="w-[350px] h-[200px] object-center rounded-full" src={img13} />
              <p className="text-sm">For Birthday</p>
            </div>

            {/* sweets 3 */}
            <div className="flex flex-col items-center hover:text-orange-900 hover:underline p-6 space-y-6 rounded-full">
              <img className="w-[350px] h-[200px] object-center rounded-full" src={img14} />
              <p className="text-sm">For Celebration</p>
            </div>
          </div>
         {/* Slide 6 */}
          <div className="relative">
            <img
              className="w-full h-[500px] object-cover"
               src={img1}
              alt=""
            />
            <div className="absolute inset-0 bg-white flex items-center">
              <div className="max-w-6xl mx-auto px-4">
                <div className="max-w-3xl ">
                  <h1 className="text-5xl text-center md:mr-4  text-orange-900 font-bold animate-slideInDown">
                    Our Team
                  </h1>
                  <div class="flex flex-col mt-0 md:flex-row md:space-x-0">
                    <div class="flex flex-col items-center p-3 space-y-6  ">
                    <img className=" w-[300px] h-[300px] object-center "
                    src={img6}
                     />
                    <p className="text-orange-900 text-2xl"> Alex Z</p>
                    </div>
                    <div class="flex flex-col items-center   p-6 space-y-6  ">
                        <img className=" w-[300px] h-[300px] object-center "
                        src={img7} />
                        <p className="text-orange-900 text-2xl">Max </p>
                    </div>
                    <div class="flex flex-col items-center   p-6 space-y-6  ">
                        <img  className=" w-[300px] h-[300px] object-center "
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
