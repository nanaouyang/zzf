import React from 'react';
import styles from './searchCard.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Tag } from '@zzf/design';

interface SearchCardProps {
  dataSource: Article;
  show: boolean;
}

export default function SearchCard<SearchCardProps>({ dataSource }) {
  const router = useRouter();

  function toDetail(id: string) {
    router.push(`/article/${id}`);
  }

  return (
    <div className={styles.card}>
      <Link href={`/article/${dataSource.id}`}>
        <a className={styles.title} target={'_blank'}>
          <h3 className={styles.title} style={{ marginLeft: '10px' }}>
            <div
              dangerouslySetInnerHTML={{
                __html: dataSource.title,
              }}
            />
          </h3>
        </a>
      </Link>
      <div
        dangerouslySetInnerHTML={{
          __html: dataSource.content,
        }}
      />
      <ul>
        <li title={'标签'}>
          <Tag>
            <div
              dangerouslySetInnerHTML={{
                __html: dataSource.tagDesc,
              }}
            />
          </Tag>
        </li>
        <li title={'浏览量'}>
          <span className={styles.num}>{dataSource.viewCount}</span>
        </li>
      </ul>
    </div>
  );
}
