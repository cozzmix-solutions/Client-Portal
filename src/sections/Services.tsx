import React from "react";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";



export function Servicessection() {

  const files = [
    {
      name: "bitcoin.pdf",
      body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
    },
    {
      name: "finances.xlsx",
      body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
    },
    {
      name: "logo.svg",
      body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
    },
    {
      name: "keys.gpg",
      body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
    },
    {
      name: "seed.txt",
      body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
    },
  ];
   
  const features = [
    {
    
      name: "web3 development company",
      description: "At Cozzmix Solutions, we offer top-notch Web3 development services that help businesses thrive in the decentralized digital world. Whether it's creating custom dApps, building innovative DeFi platforms, or crafting immersive metaverse experiences, our team is dedicated to delivering tailored solutions that meet your needs. We specialize in developing secure smart contracts, robust NFT marketplaces, and seamlessly integrating Web3 technologies into your existing systems. Partner with us to unlock your potential in the evolving digital economy with confidence and professionalism.",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1",

    },
    {

      name: "Notifications",
      description: "Get notified when something happens.",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
   
    },
    {

      name: "Integrations",
      description: "Supports 100+ integrations and counting.",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
   
    },
    {
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      className: "col-span-3 lg:col-span-1",
      href: "#",
      cta: "Learn more",
    },
  ];
   

  return (
    <BentoGrid>
    {features.map((feature, idx) => (
      <BentoCard background={undefined} Icon={"symbol"} key={idx} {...feature} />
    ))}
  </BentoGrid>
  );
}

