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
import {it} from "node:test";


export default function ProductDetail() {
    const router = useRouter();


    let item = items.find(value => value.id === router.query.id)

    if (item == undefined) {
        item = items[3]
    }

    return (<AnimatePresence>
        <motion.div className={classnames.post}>
            <Link href={"/"}>
                <div className={classnames.post__back}>X</div>
            </Link>
            <motion.img
                key={item.image}
                className={classnames.post__image}
                src={item.image}
                alt={item.id}
                layoutId={`post-image-${item.id}`}
            />
            <div className={classnames.post__data}>
                <motion.div className={classnames.post__title} layoutId={`post-title-${item.id}`}>
                    {item.title}
                </motion.div>
                <div className={classnames.post__category}>{item.category}</div>
            </div>
            <div className={classnames.post__text}>
                text
            </div>
        </motion.div>
    </AnimatePresence>)
}
