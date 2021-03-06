/* eslint-disable no-unused-vars */
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgSragi from "../../assets/img_sragi_energi.jpeg";
import ImgProblem from "../../assets/img_diskusi.jpeg";
import ImgTurbin1 from "../../assets/img_turbin1.jpeg";
import ImgIot from "../../assets/img_iot.jpeg";



import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import styled from "styled-components";
import useMediaQuery from '@mui/material/useMediaQuery';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

const ImgComponent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  background-position: center;
`;

const carouselContent = [
  {
    id: 1,
    img: ImgSragi,
    desc: "Sragi Energi",
  },
  {
    id: 2,
    img: ImgProblem,
    desc: "Terbatasnya Distribusi Listrik Suatu Daerah Menjadi Fokus Utama Kami",
  },
  {
    id: 3,
    img: ImgTurbin1,
    desc: "Solusi Kebutuhan Listrik Dengan Energi Ramah Lingkungan",
  },
  {
    id: 4,
    img: ImgIot,
    desc: "Terintegrasi Dengan Teknologi Internet of Things",
  },
];

const Beranda = () => {
  const smartphoneMin = useMediaQuery('(min-width:320px)');
    const smartphoneMax = useMediaQuery('(min-width:480px)');
    const tabletMin = useMediaQuery('(min-width:600px)');
    const tabletMax = useMediaQuery('(min-width:801px)');
    const desktopMin = useMediaQuery('(min-width:1025px)');
    const desktopMax = useMediaQuery('(min-width:1281px)');
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        margin: "0",
      }}
      id="beranda"
    >
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={true}
        scrollbar={true}
      >
        {carouselContent.map((content) => (
          <SwiperSlide key={content.id}>
            <Box
              sx={{
                backgroundColor: "white",
                height: "100vh",
                width: "100%",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  background: "rgba(20, 66, 155, 0.60)",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                },
              }}
            >
              <Typography
                variant={smartphoneMax ? "h4" : "h5"}
                sx={{
                  position: "absolute",
                  color: "white",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: "0.6",
                  textAlign: "center",
                }}
              >
                {content.desc}
              </Typography>
              <ImgComponent src={content.img} alt="img conten" />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Beranda;
