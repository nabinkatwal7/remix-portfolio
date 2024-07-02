import type { MetaFunction } from "@remix-run/node";
import HomeWrapper from "~/components/HomeWrapper";

export const meta: MetaFunction = () => {
  return [
    { title: "nabin" },
    { name: "get to know me", content: "hello! konichhiwa! hallo!" },
  ];
};

export default function Index() {
  return (
    <HomeWrapper />
  );
}
