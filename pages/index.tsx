import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Container from '../components/Container';
import Inventory from '../components/Inventory';
import Layout from '../components/Layout';
import Prose from '../components/Prose';
import Minting from '../components/Minting';
import Faq from '../components/Faq';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import projectConfig from '../config/projectConfig';
import topImage from '../public/assets/1920x600_cropped.png';
import Redeem from '../components/Redeem';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{projectConfig.nftName}</title>
      </Head>
      <Container>
        <Image src={topImage} alt={projectConfig.nftName}/>
      </Container>
      <div className="bg-gray-800 py-8" style={{backgroundColor: '#5e42a6'}} >
        <Prose>
          <h1 className="text-5xl font-bold mb-2">{projectConfig.nftName}</h1>
          <p className="text-xl">
          Meet the BeachBums, the newest residents of the tropical metaverse and your key to shaping the future of HodlerCon. Collect your own BeachBum NFT when you register for HodlerCon 2022 and are added to the whitelist for a no-fee mint. There is a limited supply of 700 BeachBums with a mint cost for non-HodlerCon attendees of 0.1 ETH. 100% of art assets are stored on-chain for max decentralization. Each BeachBum provides you a vote to shape the future of Luau DAO and its upcoming HodlerCon events.
          </p>
        </Prose>
      </div>

      <div className="bg-gray-800 py-8" style={{backgroundColor: '#3e4094'}} >
        <Prose>
          <Redeem />
        </Prose>
      </div>


      <div className="py-8" style={{backgroundColor: '#5052b5'}}>
        <Prose>
          <Minting />
        </Prose>
      </div>

      <div className="py-8" style={{backgroundColor: '#5e42a6'}}>
        <Prose>
          <Inventory />
        </Prose>
      </div>

      <div className="bg-gray-800 py-8" style={{backgroundColor: '#3e4094'}} >
      <Prose>
        <Faq />
      </Prose>
      </div>

      <div className="py-8" style={{backgroundColor: '#5052b5'}}>
        <Prose>
          <Roadmap />
        </Prose>
      </div>

    </Layout>
  );
};

export default Home;
