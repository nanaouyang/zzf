import React, { useEffect } from "react";
import styles from '@/styles/article.module.scss'
import Head from "next/head";
import 'markdown-navbar/dist/navbar.css';
import { listArchives } from "@/services/article";
import moment from 'moment'
export default function About({ serverProps }) {
    return <div className={styles.detail}>
        <Head>
            <title>zzf~归档</title>
        </Head>
        <div>
            <ul>
                {serverProps.map(item => <li><span style={{ color: '#8a8a8a' }}>{moment(item.createTime).format('YYYY-MM-DD')}</span>-<span style={{ color: '#4183c4' }}>{item.title}</span></li>)}
            </ul>
        </div>
    </div>
}

export const getServerSideProps = async () => {
    const { data } = await listArchives({});
    return {
        props: {
            serverProps: data
        },
    };
};