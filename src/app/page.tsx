"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[{ name: 'SnackCoin', id: 'hero' }, { name: 'About', id: 'about' }, { name: 'How to Buy', id: 'how-to-buy' }, { name: 'Tokenomics', id: 'tokenomics' }, { name: 'Footer', id: 'footer' }]}
          logoSrc="/images/logo.svg"
          logoWidth={200}
          logoHeight={50}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to SnackCoin Bites"
          description="Dive into the snack-themed crypto world!"
          primaryButtonText="Buy Now"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="What is SnackCoin?"
          descriptions={["SnackCoin is your gateway to delicious crypto transactions!", "Join the snack revolution and earn rewards.", "SnackCoin is fun, engaging, and tasty!"]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="SnackCoin Tokenomics"
          description="Understanding the economics of SnackCoin is crucial for users."
          kpiItems={[{ value: '2M', description: 'Total Supply' }, { value: '1M', description: 'Market Cap' }, { value: '500K', description: 'Circulating Supply' }]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={40}
          columns={[
            { title: 'Products', items: [ { label: 'SnackCoin', onClick: () => {} }, { label: 'SnackBites', onClick: () => {} } ] },
            { title: 'Company', items: [ { label: 'About', onClick: () => {} }, { label: 'Contact', onClick: () => {} } ] },
            { title: 'Resources', items: [ { label: 'Blog', onClick: () => {} }, { label: 'Support', onClick: () => {} } ] }
          ]}
          copyrightText="© 2023 SnackCoin. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}
