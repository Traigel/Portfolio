import React from 'react';
import styles from './Title.module.css'

type TitlePropsType = {
    h2: string
    span?: string
}

export const Title = (props: TitlePropsType) => {

    return (
        <div className={styles.title}>
            {props.span && <span>{props.span}</span>}
            <h2>{props.h2}</h2>
        </div>
    )
}