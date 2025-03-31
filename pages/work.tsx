import { useEffect, useState } from "react";
import Contact from "../components/contact";
import Layout from "../components/layout";
import { cls } from "../libs/utils";
import { motion } from "framer-motion";
import WorkDetail from "../components/ProjectDetail";

export default function Work() {
  const [toggleBox, setToggleBox] = useState<
    "Next" | "React" | "Node" | "Js" | null
  >(null);
  return (
    <div>
      <Layout />
    </div>
  );
}
