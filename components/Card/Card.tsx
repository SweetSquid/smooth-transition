import type {FC} from 'react';

import cs from "classnames";
import classnames from "./Slider.module.scss";
import {motion} from 'framer-motion';

interface CardProps {
    id: string;
    image: string;
    title: string;
}

export const Card: FC<CardProps> = ({id, image, title}) => {

    return (<motion.div className="card" layoutId={`post-${id}`}>
        <motion.img
            className="card__image"
            src={image}
            key={image}
            alt={id}
            layoutId={`post-image-${id}`}
        />
        <motion.div className="card__title" layoutId={`post-title-${id}`}>
            {title}
        </motion.div>
    </motion.div>);
}