import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';
import Prose from '../components/Prose';
import Minting from '../components/Minting';
import Faq from '../components/Faq';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import projectConfig from '../config/projectConfig';
import topImage from '../public/assets/1920x600.png';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{projectConfig.nftName}</title>
      </Head>
      <Image src={topImage} alt={projectConfig.nftName} />
      <div className="bg-gray-800 py-8"  style={{backgroundColor: '#5e42a6'}} >
        <Prose>
          <h1 className="text-5xl font-bold mb-2">{projectConfig.nftName}</h1>
          <p className="text-xl">
          Meet the Beach Bums, the newest residents of the tropical metaverse and your key to shaping the future of HodlerCon. Collect your own Beach Bum NFT when you register for HodlerCon 2022 and are added to the whitelist for a no-fee mint. There is a limited 700 public supply with a mint cost for non-HodlerCon attendees of 0.1 ETH with 100% on chain for max decentralization. Each Beach Bum provides you a vote to shape the future of Luau DAO and it&apos;s upcoming HodlerCon events.
          </p>
        </Prose>
      </div>

      <div className="py-8" style={{backgroundColor: '#5052b5'}}>
        <Prose>
          <Minting />
        </Prose>
      </div>

      <div className="bg-gray-800 py-8" style={{backgroundColor: '#3e4094'}} >
        <Prose>
          <Faq />
        </Prose>
      </div>

      <div className="py-8"  >
        <Prose>
          <Roadmap />
        </Prose>
      </div>

      <div className="bg-gray-800 py-8" style={{backgroundColor: '#493382'}}>
        <Prose>
          <Team />
        </Prose>
      </div>
    </Layout>
  );
};

export default Home;
