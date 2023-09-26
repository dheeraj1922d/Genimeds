import { Suspense } from "react";

const Card = ({ name, alt, img, imgAlt }) => {
  return (
    <div>
      <div className="flex h-[1064px] items-center gap-[20px] px-[75px] py-[25px] relative">
        <div className="flex-col w-[496px] items-center px-[20px] py-[10px] bg-white shadow-[0px_2px_25px_#0000001f] flex gap-[20px] relative self-stretch">
          <Suspense fallback={<h1>Loading...</h1>}>
            <img
              className="relative w-[250px] h-[250px] object-cover"
              alt="Download"
              src={img}
            />
          </Suspense>
          <p className="relative self-stretch [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal]">
            {name}
          </p>
          <div className="items-start px-0 py-[2px] w-full flex-[0_0_auto] flex gap-[20px] relative self-stretch">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[normal]">
              MRP
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-red-500 text-[32px] tracking-[0] leading-[normal]">
              79.00 INR
            </div>
          </div>
          <p className="relative self-stretch [font-family:'Inter-Bold',Helvetica] font-normal text-transparent text-[20px] tracking-[0] leading-[30px]">
            <span className="font-bold text-black">
              PRODUCT DETAILS
              <br />
            </span>
            <span className="[font-family:'Inter-Light',Helvetica] font-light text-zinc-500">
              <br />
              On chest and throat, temporarily relieves cough due to minor
              throat and bronchial irritation associated with the common cold
              <br />
              On muscles and joints, temporarily relieves minor aches and pains
              of muscles and joints
            </span>
          </p>
          <p className="relative self-stretch [font-family:'Inter-Bold',Helvetica] font-normal text-transparent text-[20px] tracking-[0] leading-[30px]">
            <span className="font-bold text-black">
              ACTIVE INGREDIENTS
              <br />
            </span>
            <span className="[font-family:'Inter-Light',Helvetica] font-light text-zinc-500">
              <br />
              Regular: Camphor (synthetic) 4.8% (Cough suppressant and topical
              analgesic) Eucalyptus oil 1.2% (Cough suppressant) Menthol 2.6%
              (Cough suppressant and topical analgesic)
              <br />
              Lemon: Camphor (synthetic) 4.7% (Cough suppressant and topical
              analgesic) Eucalyptus oil 1.2% (Cough suppressant) Menthol 2.6%
              (Cough suppressant and topical analgesic).
            </span>
          </p>
        </div>
        <div className="flex-col items-center px-[40px] py-[10px] flex-1 grow bg-white shadow-[0px_4px_25px_#00000021] flex gap-[20px] relative self-stretch">
          <img
            className="relative w-[375px] h-[250px] object-cover"
            alt="Menthol terpineol"
            src={imgAlt}
          />
          <p className="relative self-stretch [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal]">
            {alt}
          </p>
          <div className="items-start px-0 py-[2px] w-full flex-[0_0_auto] flex gap-[20px] relative self-stretch">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[normal]">
              MRP
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-lime-500 text-[32px] tracking-[0] leading-[normal]">
              19.00 INR
            </div>
          </div>
          <p className="relative self-stretch [font-family:'Inter-Bold',Helvetica] font-normal text-transparent text-[20px] tracking-[0] leading-[30px]">
            <span className="font-bold text-black">
              ACTIVE INGREDIENTS
              <br />
            </span>
            <span className="[font-family:'Inter-Light',Helvetica] font-light text-zinc-500">
              <br />
              Regular: Camphor (synthetic) 4.8% (Cough suppressant and topical
              analgesic) Eucalyptus oil 1.2% (Cough suppressant) Menthol 2.6%
              (Cough suppressant and topical analgesic)
              <br />
              Lemon: Camphor (synthetic) 4.7% (Cough suppressant and topical
              analgesic) Eucalyptus oil 1.2% (Cough suppressant) Menthol 2.6%
              (Cough suppressant and topical analgesic).
            </span>
          </p>
          <p className="relative self-stretch [font-family:'Inter-Bold',Helvetica] font-normal text-transparent text-[20px] tracking-[0] leading-[30px]">
            <span className="font-bold text-black">
              ACTIVE INGREDIENTS
              <br />
            </span>
            <span className="[font-family:'Inter-Light',Helvetica] font-light text-zinc-500">
              <br />
              Regular: Camphor (synthetic) 4.8% (Cough suppressant and topical
              analgesic) Eucalyptus oil 1.2% (Cough suppressant) Menthol 2.6%
              (Cough suppressant and topical analgesic)
              <br />
              Lemon: Camphor (synthetic) 4.7% (Cough suppressant and topical
              analgesic) Eucalyptus oil 1.2% (Cough suppressant) Menthol 2.6%
              (Cough suppressant and topical analgesic).
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
