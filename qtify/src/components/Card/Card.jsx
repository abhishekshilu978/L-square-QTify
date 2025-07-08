import React from "react";
// import { Card } from "@mui/material";
// import { data} from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "@emotion/styled";
import { Chip, Tooltip } from "@mui/material";


function Card({ data,type }){
    const getCard=(type) => {
        switch(type) {
            case "album": {
                const { image,followers,title,slug,songs} = data;
                return (
                    <Tooltip title={`${styles.length} songs`} placement="top" arrow>
                        <Link to={`/album/${slug}`}>
                        <div className={styles.wrapper}>
                            <div className={styles.card}>
                                <img src={image} alt="album" loading="lazy" />
                                <div className={styles.banner}>
                                    <Chip
                                    label={`${followers} Followers`}
                                    size="small"
                                    className={styles.chip}
                                    />
                                </div>
                            </div>
                            <div className={styles.titleWrapper}>
                                <p>{title}</p>
                            </div>
                        </div>
                        </Link>
                    </Tooltip>
                )
            };
            case "song": {
                const { title,likes,image } = data;
                return (
                    <div className={styles.wrapper}>
                        <div className={styles.songs}>
                            <img src={image} alt="song" loading="lazy" />
                            <div className={styles.banner}>
                                <div className={styles.pill}>
                                    <p>{title}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.titleWrapper}>
                            <p>{title}</p>
                        </div>
                    </div>
                )
            }
            default:
                return<></>;
        }
    };
    return getCard(type);
}
export default Card;
