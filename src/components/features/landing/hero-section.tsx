import {AnimatedGradientText} from "@/components/ui/animated-gradient-text";
import {cn} from "@/lib/utils";
import {ArrowUpRight, ChevronRight} from "lucide-react";
import {Button} from "@/components/ui/button";

interface HeroProps {
  heading?: string;
  subheading?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

export default function HeroSection({
                                      heading = "Block de composants UI",
                                      subheading = " créés avec shadcn/ui & Tailwind",
                                      description = "Des composants finement élaborés construits avec React, Tailwind et Shadcn UI.",
                                      buttons = {
                                        primary: {
                                          text: "Get Started",
                                          url: "#",
                                        },
                                        secondary: {
                                          text: "Accédez à la documentation",
                                          url: "#",
                                        },
                                      },
                                      image = {
                                        src: "https://shadcnblocks.com/images/block/placeholder-dark-7-tall.svg",
                                        alt: "Placeholder",
                                      },
                                    }: HeroProps) {
  return (
    <section className="overflow-hidden bg-white dark:bg-transparent">
      <div
        aria-hidden
        className="z-2 absolute inset-0 isolate hidden opacity-50 contain-strict lg:block"
      >
        <div className="w-140 h-200 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]"/>
        <div className="h-200 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]"/>
        <div className="h-200 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"/>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
            Bibliothèque de composants UI moderne et élégante
          </h1>
          <p className="mx-auto my-8 max-w-2xl text-xl">
            Accélérez votre développement front-end avec notre collection
            complète de composants réutilisables, flexibles et personnalisables.
          </p>

          <div
            className="group w-fit relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] bg-white dark:bg-black/40 ">
            <span
              className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />
            🎨 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500"/>
            <AnimatedGradientText className="text-sm font-medium">
              Découvrez Sevana UI
            </AnimatedGradientText>
            <ChevronRight
              className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </div>
        </div>
        <section className="bg-background py-20 lg:py-32">
          <div className="container flex flex-col items-center gap-10 lg:my-0 lg:flex-row">
            <div className="flex flex-col gap-7 lg:w-2/3">
              <h2 className="text-5xl font-semibold text-foreground md:text-5xl lg:text-8xl">
                <span>{heading}</span>
                <span className="text-muted-foreground">{subheading}</span>
              </h2>
              <p className="text-base text-muted-foreground md:text-lg lg:text-xl">
                {description}
              </p>
              <div className="flex flex-wrap items-start gap-5 lg:gap-7">
                <Button asChild className="max-md:mx-auto">
                  <a href={buttons.primary?.url}>
                    <div className="flex items-center gap-2">
                      <ArrowUpRight className="size-4" />
                    </div>
                    <span className="pr-6 pl-4 text-sm whitespace-nowrap lg:pr-8 lg:pl-6 lg:text-base">
                  {buttons.primary?.text}
                </span>
                  </a>
                </Button>
                <Button asChild variant="link" className="underline max-md:mx-auto">
                  <a href={buttons.secondary?.url}>{buttons.secondary?.text}</a>
                </Button>
              </div>
            </div>
            <div className="relative z-10">
              <div className="absolute top-2.5 !left-1/2 !h-[92%] !w-[69%] -translate-x-[52%] overflow-hidden rounded-[35px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="size-full object-cover object-[50%_0%]"
                />
              </div>
              <img
                className="relative z-10"
                src="https://shadcnblocks.com/images/block/mockups/phone-2.png"
                width={450}
                height={889}
                alt="iphone"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
