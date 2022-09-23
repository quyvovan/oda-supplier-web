import Button from '@mui/material/Button';
import { NextPage } from 'next';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Title } from 'src/components/common';
import styled from 'styled-components';

const CoreTitle = styled(Title)`
  margin: 40px 0;
  font-weight: 700;
`;

const LinkButton = styled(Button)`
  margin-right: 20px;
`;

const Home: NextPage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'zh_CN' ? 'en_US' : 'zh_CN');
  };
  return (
    <div>
      <CoreTitle>Nextjs-TS</CoreTitle>
      <LinkButton>
        <Link href="/">{t('home.user')}</Link>
      </LinkButton>
      <LinkButton>
        <Link href="/">{t('home.articles')}</Link>
      </LinkButton>
      <Button onClick={changeLanguage}>{t('home.change_lang')}</Button>
    </div>
  );
};
// getServerSideProps, getStaticPaths, getStaticProps
export const getServerSideProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return {
    props: { users: data },
  };
};
export default Home;
