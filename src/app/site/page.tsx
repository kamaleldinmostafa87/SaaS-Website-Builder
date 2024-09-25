import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/lib/constants";
import { CheckIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative flex h-full w-full flex-col items-center justify-center pt-36">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <p className="text-center">Run your agency, in one place</p>
        <div className="relative bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-transparent">
          <h1 className="text-9xl font-bold md:text-[300px]">Plura</h1>
        </div>

        <div className="relative flex w-full items-center justify-center">
          <Image alt="" src="/assets/preview.png" width={1200} height={1200} />
          <div className="absolute bottom-0 left-0 right-0 top-[50%] z-10 bg-gradient-to-t dark:from-background"></div>
        </div>
      </section>

      <section className="mt-[-60px] flex flex-col items-center justify-center gap-4">
        <h4 className="text-center text-4xl">Choose what fits you right</h4>
        <p className="text-muted-foreground">
          Our straightforward pricing plans are tailored to meet your need. If
          {"you're"} not <br />
          ready to commit you can get started for free.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          {pricingCards.map((card) => (
            <Card
              key={card.title}
              className={clsx("w-[300px] flex flex-col justify-between ", {
                "border-2 border-primary": card.title === "Unlimited Saas",
              })}
            >
              <CardHeader>
                <CardTitle
                  className={clsx("", {
                    "text-muted-foreground": card.title !== "Unlimited Saas",
                  })}
                >
                  {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold"></span>
                <span className="text-muted-foreground">{card.price}/m</span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {card.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckIcon className="text-muted-foreground" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/agency?plan=${card.priceId}`}
                  className={clsx(
                    "bg-primary p-2 rounded-md w-full text-center",
                    { "!bg-muted-foreground": card.title !== "Unlimited Saas" }
                  )}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
