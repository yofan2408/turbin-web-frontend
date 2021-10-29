import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ImgSaklar from "../../assets/img_saklar.jpg";
import IcWhatsapp from "../../assets/ic_whatsapp.png";
import IcMessage from "../../assets/ic_message.png";
import styled from "styled-components";

const ImgComponent = styled.img`
  width: ${props => props.width ? props.width : '120%'};
  border-radius: 12px;
  margin: ${props => props.margin ? props.margin : '0'};
`;

const Donasi = () => {
  return (
    <Box
      sx={{
        margin: "0",
        height: "100vh",
        backgroundColor: "#4690FF",
        overflow: "hidden",
        display: "flex",
      }}
    >
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={6}>
          <Box
            sx={{
              width: "120%",
              height: "65vh",
              position: "relative",
              padding: "20px 45px",
              borderRadius: "0 12px 12px 0",
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              zIndex: "3",
              backgroundColor: "white",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#3b3b3b",
                fontWeight: "600",
                opacity: "0.9",
                marginBottom: "20px",
              }}
            >
              Donasi Kami
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#3b3b3b",
                fontWeight: "500",
                opacity: "0.8",
                marginBottom: "20px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam,
              sit malesuada enim quam sit sed tempor et a. Vestibulum venenatis
              nibh egestas vestibulum eget ornare blandit orci. Dictumst turpis
              nam dapibus non. Ac montes, vitae ridiculus id at sapien.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#3b3b3b",
                fontWeight: "600",
                opacity: "0.8",
                marginBottom: "20px",
              }}
            >
              Info lebih lanjut hubungi
            </Typography>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <ImgComponent src={IcWhatsapp} width="30px" margin="0 10px 0 0" alt="Icon Whatsapp"/>
                <Typography variant="body2">
                    0852xxxxxxxx
                </Typography>
                <ImgComponent src={IcMessage} width="30px" margin="0 10px 0 20px" alt="Icon Message"/>
                <Typography variant="body2">
                    client@gmail.com
                </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          container
          justifyContent="center"
          sx={{ position: "relative" }}
        >
          <Box
            sx={{
              height: "100%",
              width: "720px",
              position: "relative",
              right: "-5px",
              top: "-40px",
              "&:before": {
                content: '""',
                position: "absolute",
                background: "rgba(20, 66, 155, 0.52)",
                top: "0",
                width: "100%",
                height: "99%",
                borderRadius: "12px",
                zIndex: "1",
              },
            }}
          >
            <ImgComponent src={ImgSaklar} alt="Gambar Saklar" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Donasi;
