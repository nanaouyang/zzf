import React from 'react';
import styles from './searchCard.module.scss';
import { useRouter } from 'next/router';
import { Tags } from 'components/Tags/Tags';

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
      <h3 onClick={() => toDetail(dataSource.id)}>
        <span className={styles.title} style={{ marginLeft: '10px' }}>
          <div
            dangerouslySetInnerHTML={{
              __html: dataSource.title,
            }}
          />
        </span>
      </h3>
      <div
        dangerouslySetInnerHTML={{
          __html: dataSource.content,
        }}
      />
      <ul>
        <li title={'标签'}>
          <Tags>
            <div
              dangerouslySetInnerHTML={{
                __html: dataSource.tagDesc,
              }}
            />
          </Tags>
        </li>
        <li title={'浏览量'}>
          <span className={styles.num}>{dataSource.viewCount}</span>
        </li>
      </ul>
    </div>
  );
}
