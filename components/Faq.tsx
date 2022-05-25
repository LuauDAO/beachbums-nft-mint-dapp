export default function Faq() {
  return (
    <>
      <h2 className="text-4xl mb-4">FAQ</h2>
      <div className="space-y-4">
        <div>
        <h3 className="text-2xl mb-2">How much is the minting price?</h3>
          <p>
            The public mint price is 0.1 ETH + gas per BeachBum.<br></br>
            Hodlercon attendees can mint their BeachBum for free + gas.
          </p>
        <h3 className="text-2xl mb-2">Why make an NFT?</h3>
          <p>
          BeachBums provide a way to allow governance by active members of the Luau DAO. This mint also helps raise funds for the operation of the initial conference and for future events.
          </p>
        <h3 className="text-2xl mb-2">What is the total supply?</h3>
          <p>
          The total supply of BeachBums is 700 NFTs. 500 NFTs will be available for the public mint and 200 NFTs are reserved for HodlerCon registrants with any leftover transferring to the Luau DAO for use in future events.
          </p>
        <h3 className="text-2xl mb-2">Is there a resale fee?</h3>
          <p>
          Each resale comes with a 5% fee that goes to the Luau DAO treasury for use in future events.
          </p>
        <h3 className="text-2xl mb-2">Any special shout outs?</h3>
          <p>
          Beach Bums were spearheaded by <a href="https://twitter.com/wizardofhex" target="_new">Woh</a> with consultation from <a href="https://twitter.com/0xLFO" target="_new">LookingForOwls</a> of <a href="https://twitter.com/shuffledao" target="_new">ShuffleDAO</a> with radical artwork from the mind of <a href="https://twitter.com/Logic_Beach" target="_new">Logic_Beach</a>. 
          </p>
        <h3 className="text-2xl mb-2">Don&apos;t these NFTs look familiar?</h3>
          <p>
          Yes! They&apos;re based on the <a href="https://nouns.wtf/" target="_new">Nouns protocol</a> using the CC0 licensing. This means that all of the metadata is stored on chain and all BeachBum traits have an equal rarity with randomness provided by Ethereum block hashes. 
          </p>
        </div>
      </div>
    </>
  );
}
