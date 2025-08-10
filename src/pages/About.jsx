import Counter from "../components/Header";
import img1 from "../assets/klj (208).jpg";
import img2 from "../assets/bd333727-c83a-4813-bd0e-d13647f4ffee.jpg";
import img3 from "../assets/bd02499e-7736-4f8a-8e98-0f0143a37c94.jpg";
import img4 from "../assets/bf9d663d-7f77-45c4-9a57-b89cb9f9e8ff.jpg";
import img5 from "../assets/b308df24-0304-4f34-92c6-e4cf69ded346.jpg";
import img6 from "../assets/team-1.jpg";
import img7 from "../assets/team-4.jpg";
import img8 from "../assets/team-3.jpg";

function About(){
    return(
        <main>
            <div className="relative">
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
            </div>
        </main>
    );
}
export default About;