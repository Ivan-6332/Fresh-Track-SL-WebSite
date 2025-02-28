import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";  // Import Link for navigation
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const teamMembers = [
    { id: "ivan-de-zoysa", name: "Ivan De Zoysa", role: "Team Leader", image: "/Fresh-Track-SL-WebSite/team/Ivan.jpg" },
    { id: "parama-herath", name: "Parama Herath", role: "Team Member", image: "/Fresh-Track-SL-WebSite/team/Parama.jpg" },
    { id: "dinithi-viranda", name: "Dinithi Viranda", role: "Team Member", image: "/Fresh-Track-SL-WebSite/team/Dinithi.jpg" },
    { id: "gayantha-hathnagoda", name: "Gayantha Hathnagoda", role: "Team Member", image: "/Fresh-Track-SL-WebSite/team/Gayantha.jpg" },
    { id: "nethmee-mudannayaka", name: "Nethmee Mudannayaka", role: "Team Member", image: "/Fresh-Track-SL-WebSite/team/Nethmee.jpg" },
    { id: "dilshan-hirimuthugoda", name: "Dilshan Hirimuthugoda", role: "Team Member", image: "/Fresh-Track-SL-WebSite/team/Dilshan.jpg" },
];

const Team = () => {
    return (
        <section className="py-20 bg-black min-h-screen flex flex-col items-center justify-center relative">
            {/* Team Title */}
            <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-700 mb-12 absolute top-8 animate-smooth-gradient">
                Our Expert Team
            </h1>

            {/* Swiper Carousel */}
            <div className="w-full max-w-4xl">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}  // Show 3 slides at a time
                    spaceBetween={20}  // Add spacing between slides
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    navigation={true}  // Enable default Swiper navigation
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Navigation, Pagination]}
                    className="mySwiper"
                >
                    {teamMembers.map((member) => (
                        <SwiperSlide key={member.id} className="w-64">
                            <Link to={`/team/${member.id}`}>  {/* Wrap each card with a Link */}
                                <div className="relative w-48 h-72 md:w-72 md:h-96 overflow-hidden rounded-lg border-4 border-gray-700">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-center"
                                    />
                                    {/* Card Content */}
                                    <div className="absolute bottom-0 left-0 w-full text-center p-4 bg-black bg-opacity-50">
                                        <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
                                        <p className="text-green-400 font-medium">{member.role}</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Team;
