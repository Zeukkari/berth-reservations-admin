import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Layout from '../../common/layout/Layout';
import Sidebar from '../../common/sidebar/Sidebar';
import Expandable from '../../common/expandable/Expandable';
import InternalLink from '../../common/internalLink/InternalLink';
import Text from '../../common/text/Text';
import Header from '../../common/header/Header';
import Button from '../../common/button/Button';
import Icon from '../../common/icon/Icon';

const Page: React.SFC = ({ children }) => {
  const history = useHistory();
  const { t } = useTranslation();

  const PageHeader = () => (
    <Header>
      <Link to="/">
        <Icon name="helsinkiLogo" size="large" rectangle={true} color="white" />
      </Link>
    </Header>
  );

  return (
    <Layout
      header={<PageHeader />}
      sidebar={
        <Sidebar>
          {[
            <InternalLink to="harbors">
              <Button
                variant="text"
                color="brand"
                icon={<Icon name="registeredBoat" color="secondary" />}
              >
                <Text bold>{t('common.sidebar.harbors')}</Text>
              </Button>
            </InternalLink>,
            <InternalLink to="customers">
              <Button
                variant="text"
                icon={<Icon name="individual" color="secondary" />}
              >
                <Text bold>{t('common.sidebar.customers')}</Text>
              </Button>
            </InternalLink>,

            <Expandable
              key="debug"
              label={
                <InternalLink to="debug">
                  <Button
                    variant="text"
                    icon={<Icon name="dollyEmpty" color="secondary" />}
                  >
                    <Text bold>DEBUG</Text>
                  </Button>
                </InternalLink>
              }
            ></Expandable>,
          ]}
        </Sidebar>
      }
    >
      {children}
    </Layout>
  );
};

export default Page;
