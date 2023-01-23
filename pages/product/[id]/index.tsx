import {useState} from "react";

import {useRouter} from "next/router";
import cs from "classnames";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import {GetStaticProps} from 'next';
import path from 'path';
import Link from "next/link";
import {items} from "../../../constants";
import classnames from "./ProductDetail.module.scss"


export default function ProductDetail() {
    const router = useRouter();

    console.log(router.query.id);

    return (<AnimatePresence>
        <motion.div className={classnames.post}>
            <Link href={"/"}>
                <div className={classnames.post__back}>X</div>
            </Link>
            <motion.img
                key={items[3].image}
                className={classnames.post__image}
                src={items[3].image}
                alt={items[3].id}
                layoutId={`post-image-${items[3].id}`}
            />
            <div className={classnames.post__data}>
                <motion.div className={classnames.post__title} layoutId={`post-title-${items[3].id}`}>
                    {items[3].title}
                </motion.div>
                <div className={classnames.post__category}>{items[3].category}</div>
            </div>
            <div className={classnames.post__text}>
                text
            </div>
        </motion.div>
    </AnimatePresence>)
}
