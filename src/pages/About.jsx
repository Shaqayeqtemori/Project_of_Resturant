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
        </main>
    );
}
export default About;