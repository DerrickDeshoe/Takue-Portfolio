"use client"

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {fadeIn} from './variants'

const navbar = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      animate='show'
      exit="hidden"
      className="flex space-x-4 py-2 text-[14px] font-bold "
    >
      <Link href="/">About Me</Link>
      <Link href="/">What i can do</Link>
      <Link href="/">My Work</Link>
      <Link href="/">Contact</Link>
    </motion.div>
  );
};

export default navbar;
