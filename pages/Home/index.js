import styled from "styled-components";
import HomeHeader from "../../Components/Layout/HomeHeader";
import Logo from "../../Components/Logo";

import Package from "../../Components/Package";
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/core";
import WorksOn from "../../Components/WorksOn";
import Apple from "../../icons/apple.svg";
import Amazon from "../../icons/amazon.svg";
import Android from "../../icons/android.svg";
import AppleTv from "../../icons/apple-tv.svg";
import Chromecast from "../../icons/chromecast-device.svg";
import SmartTV from "../../icons/smart-tv.svg";
import Xbox from "../../icons/Xbox_Logo.svg";
import Footer from "../../Components/Footer";
import { useRouter } from "next/router";
import Multitheme from "../../Components/Multitheme";
import TemplateofAllChannels from "../../Components/TemplateofAllChannels";
import AboutUs from "../../Components/AboutUs";
import { useEffect, useState } from "react";
import TemplateofAllDevices from "../../Components/TemplateofAllDevices";
import ButtonFooter from "../../Components/VOD/Components/ButtonFooter";
import Image from "next/image";
import { connect } from "react-redux";
import Link from "next/link";
import _ from "lodash";
import {
  addFavoriteChannel,
  removeFavoriteChannel,
  setChannelPlaying,
  getChannels,
} from "../../app/store/actions/liveTV";

const mapStatetoProps = (state) => ({
  // channelsfromJSON: _.get(state, `liveTV.channels`, []),
});

const mapDispatchtoProps = (dispatch) => {
  return {
    // getCh: () => dispatch(getChannels()),
  };
};
function Home(props) {
  const [channels, setChannels] = useState([]);

  function setLogandChanels(chann) {
    console.log(chann);
    // setChannels(chann);
  }

  useEffect(() => {
    // props.getCh();
  }, []);

  useEffect(() => {
    // setLogandChanels(props.channelsfromJSON);
  }, []);

  const [allChannelsPopup, setAllChannelsPopup] = useState(false);
  const router = useRouter();
  return (
    <HomeHeader>
      <Container>
        <BannerHome id='Banner'>
          <Intro>
            <a>The best premium live TV streaming service</a>
            <p>
              85+ top channels of entertainment, news, live sports, & more.
              Recording without storage limits and 6 accounts included. No cable
              box, contracts, or hidden fees.
            </p>
          </Intro>
          <Video>
            <video
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              src='/videos/Video1-optimized.mp4'
              type='video/mp4'
            />
          </Video>
          <Link href='/Payment'>
            <StyledButtonHome>POROSIT</StyledButtonHome>
          </Link>
        </BannerHome>
        <Kanalet id='Kanalet'>
          <Channels>
            <Logo logosrc='logo/dukagjini.png'></Logo>
            <Logo logosrc='logo/kanal10.jpg'></Logo>
            <Logo logosrc='logo/klan.png'></Logo>
            <Logo logosrc='logo/klanK.png'></Logo>
            <Logo logosrc='logo/Ktv.png'></Logo>
            <Logo logosrc='logo/rtk.jpg'></Logo>
            <Logo logosrc='logo/rtv21.png'></Logo>
            <Logo logosrc='logo/t7.png'></Logo>
            <Logo logosrc='logo/atv.jpg' differentiator='atv'></Logo>
            <Logo logosrc='logo/topchannel.png'></Logo>
            <Logo logosrc='logo/abc.png'></Logo>
            <Logo logosrc='logo/klanplus.png'></Logo>
            <Logo logosrc='logo/news24.png'></Logo>
            <Logo logosrc='logo/oranews.png'></Logo>
            <Logo logosrc='logo/alsatm.png'></Logo>
            <Logo logosrc='logo/rtsh.png'></Logo>
            <Logo logosrc='logo/dukagjini.png'></Logo>
            <Logo logosrc='logo/kanal10.jpg'></Logo>
            <Logo logosrc='logo/klan.png'></Logo>
            <Logo logosrc='logo/klanK.png'></Logo>
            <Logo logosrc='logo/Ktv.png'></Logo>
            <Logo logosrc='logo/rtk.jpg'></Logo>
            <Logo logosrc='logo/rtv21.png'></Logo>
            <Logo logosrc='logo/t7.png'></Logo>
            <Logo logosrc='logo/atv.jpg' differentiator='atv'></Logo>
            <Logo logosrc='logo/topchannel.png'></Logo>
            <Logo logosrc='logo/abc.png'></Logo>
            <Logo logosrc='logo/klanplus.png'></Logo>
            <Logo logosrc='logo/news24.png'></Logo>
            <Logo logosrc='logo/oranews.png'></Logo>
            <Logo logosrc='logo/alsatm.png'></Logo>
            <Logo logosrc='logo/rtsh.png'></Logo>
          </Channels>
          <TemplateofAllChannels trigger={allChannelsPopup} />
          <h1>Watch live TV from 85+ channels</h1>
          <h2>
            Available in the U.S. nationwide. This lineup offers a sample of
            channels we offer. Please enter your home ZIP code below to see your
            area's lineup. Subject to availability.
          </h2>
        </Kanalet>
        <AddOns id='AddOns'>
          <Multitheme />
        </AddOns>
        <Ofertat id='Ofertat'>
          <p>Ofertat tona! </p>
          <PackageContainer>
            <Package
              offer='COMFORT'
              oldPrice='6.99'
              price='4.99'
              nrikanaleve='25'
              kanaleTotal='2000'
              LiveEventscheck={true}
              kanaletepreferuara={true}
              netflix={true}
              isBlackstate='gray'
              pajisjet='5 screens'
              hd={true}
              size='small'
              VOD='100'
            ></Package>
            <Package
              offer='PERFECT'
              oldPrice='15.99'
              price='9.99'
              nrikanaleve='25'
              kanaleTotal='2000'
              LiveEventscheck={true}
              kanaletepreferuara='1'
              netflix={true}
              isBlackstate='orange'
              pajisjet='5 screens'
              hd={true}
              size='medium'
              VOD='100'
            ></Package>
            <Package
              offer='PERFECT +'
              oldPrice='18.99'
              price='12.99'
              nrikanaleve='25'
              kanaleTotal='2000'
              LiveEventscheck={true}
              kanaletepreferuara={true}
              isBlackstate='purple'
              netflix={true}
              size='big'
              pajisjet='5 screens'
              hd={true}
              VOD='100'
            ></Package>
          </PackageContainer>
        </Ofertat>{" "}
        <Pajisjet id='Pajisjet'>
          <FourthActDescription>
            <h1>Simple. Good value. Multiscreen.</h1>
            <p>
              This is how smart television works today. With TV streaming from
              Zattoo, you can watch your TV programs over the internet, both
              live or time shifted. No contract, no tangled cables, always
              available. All you need is an internet connection and an
              internet-enabled device such as a Smart TV, laptop or smartphone.
            </p>
            <ButtonDiv>
              <StylesProvider injectFirst>
                <TemplateofAllDevices />
              </StylesProvider>
            </ButtonDiv>
          </FourthActDescription>
          <FourthActImage>
            <Image
              layout='fill'
              objectFit='contain'
              src='/images/alldevices.png'
            ></Image>
          </FourthActImage>
        </Pajisjet>
        <Works id='Punon'>
          <WorksOn icon={Apple} title='Apple'></WorksOn>
          <WorksOn icon={Android} title='Android'></WorksOn>
          <WorksOn icon={Amazon} title='Amazon'></WorksOn>
          <WorksOn icon={AppleTv} title='Apple TV'></WorksOn>
          <WorksOn icon={Chromecast} title='Chromecast'></WorksOn>
          <WorksOn icon={SmartTV} title='Smart TV'></WorksOn>
          <WorksOn icon={Xbox} title='Xbox'></WorksOn>
        </Works>
        <AboutUs />
        <ButtonFooter />
        <Footer id='Footer' />
      </Container>
    </HomeHeader>
  );
}

const Container = styled.div`
  top: 0;
  text-align: center;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BannerHome = styled.div`
  height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  position: relative;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
  }
`;
const Kanalet = styled.div`
  margin: 40px;
  position: relative;
  height: fit-content;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f4f4f4;
  @media screen and (max-width: 600px) {
    height: fit-content;
  }

  a {
    margin-top: 50px;

    font-weight: bold;
    color: #0063e5;
    background-color: transparent;
    margin-bottom: 12px;
    width: 30%;
    cursor: pointer;
    letter-spacing: 1.5px;
    font-size: 25px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    @media screen and (max-width: 600px) {
      font-size: 15px;
    }
    @media screen and (min-width: 600px) and (max-width: 1900px) {
      font-size: 20px;
    }

    &:hover {
      color: #0483ee;
    }
  }
  h1 {
    color: black;
    font-size: 50px;
    @media screen and (max-width: 600px) {
      font-size: 15px;
    }
    @media screen and (min-width: 600px) and (max-width: 1900px) {
      font-size: 20px;
    }
  }

  h2 {
    margin: 0 200px 100px;
    color: black;
    font-size: 30px;
    @media screen and (max-width: 600px) {
      font-size: 10px;
      margin: 0 40px 40px 40px;
    }
    @media screen and (min-width: 600px) and (max-width: 1900px) {
      font-size: 20px;
      margin: 0 40px 40px 40px;
    }
  }
`;
const Channels = styled.div`
  margin-top: 60px;
  display: grid;
  grid-row-gap: 50px;
  grid-column-gap: 30px;
  grid-template-columns: repeat(8, 1fr);
  @media screen and (max-width: 600px) {
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 900px) and (max-width: 1400px) {
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-template-columns: repeat(6, 1fr);
  }

  @media screen and (min-width: 600px) and (max-width: 900px) {
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Ofertat = styled.div`
  height: 850px;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  background: #f4f4f4;
  position: relative;

  @media screen and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 2890px;
  }
  p {
    position: relative;
    top: 0;
    color: black;
    font-weight: bold;

    font-size: 60px;
  }
`;
const PackageContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  overflow: hidden;
  background: transparent;
  position: relative;
  @media screen and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const AddOns = styled.div`
  height: 900px;
  width: 80%;
  display: flex;
  margin: 40px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: black;
  position: relative;
`;
const ButtonDiv = styled.div`
  width: 300px;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 1400px) {
    width: 300px;
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 20px;
  }
`;
const Pajisjet = styled.div`
  height: 670px;
  width: 80%;
  display: flex;
  margin: 40px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #f4f4f4;
  position: relative;

  @media screen and (max-width: 1400px) {
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`;

const FourthActDescription = styled.div`
  height: 100%;
  width: 35%;
  margin-left: 45px;
  margin-right: 60px;
  letter-spacing: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  background: transparent;
  position: relative;
  text-align: left;
  p {
    color: black;
    font-size: 20px;
  }
  h1 {
    font-size: 50px;
    color: black;
    @media screen and (max-width: 800px) {
      font-size: 35px;
    }
    @media screen and (max-width: 400px) {
      font-size: 30px;
    }
  }
  @media screen and (min-width: 800px) and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 15%;
    width: 40%;
    margin-top: 20px;
    padding: 5px;
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    height: 15%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 5px;
    text-align: center;
  }
`;

const FourthActImage = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
  position: relative;

  Image {
    max-width: 100%;
    max-height: 100%;
    @media screen and (max-width: 800px) {
      height: auto;
      width: auto;
    }
  }
  @media screen and (max-width: 1400px) {
    margin-top: 20px;
    height: 100%;
    width: 85%;
  }
`;

const Intro = styled.div`
  width: 50%;
  position: relative;
  background: transparent;
  z-index: 1;
  user-select: none;
  a {
    font-weight: bold;
    background: transparent;
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 55px;
    line-height: 1.5;
    letter-spacing: 1.5px;

    @media screen and (max-width: 1250px), screen and (max-height: 600px) {
      font-size: 30px;
      line-height: 1.5;
      width: 100%;
      background: transparent;
      letter-spacing: 0.5px;
    }
  }
  p {
    width: 60%;
    background: transparent;
    margin: auto;
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 1.5px;
    @media screen and (max-width: 1000px), screen and (max-height: 600px) {
      font-size: 10px;
      line-height: 1.5;

      width: 100%;
      background: transparent;
      letter-spacing: 0.5px;
    }
  }
`;

const Video = styled.div`
  position: absolute;
  top: 0;
  height: auto;
  width: 100%;
  background: black;
  z-index: 0;
  video {
    left: 0;
    top: 0;

    width: 100%;
    height: auto;

    opacity: 0.6;
    @media screen and (max-width: 1200px) {
      height: 100%;
      width: auto;
    }
  }
  /* @media screen and (max-width: 1200px) {
    height: 100%;
    width: auto;
    border: 5px solid green;
  } */
`;

const StyledButtonHome = styled(Button)`
  && {
    margin: 30px;
    margin-top: 20px;
    background-color: white;
    width: 300px;
    height: 50px;
    color: black;
    cursor: pointer;
    &:hover {
      background-color: #dcdcdc;
    }
    @media screen and (max-width: 1400px) {
      margin: 10px;
      margin-top: 40px;
    }
  }
`;

const Works = styled.div`
  margin: 20px;
  width: 80%;
  background: transparent;
  display: grid;
  grid-gap: 5px;
  gap: 5px;
  grid-template-columns: repeat(7, minmax(70px, 1fr));
  @media screen and (max-width: 1400px) {
    grid-gap: 0px;
    gap: 0px;
    grid-template-columns: repeat(4, minmax(40px, 1fr));
  }
  @media screen and (max-width: 1000px) {
    grid-gap: 0px;
    gap: 0px;
    grid-template-columns: repeat(3, minmax(40px, 1fr));
  }
`;

export default connect(mapStatetoProps, mapDispatchtoProps)(Home);
// export default Home;
