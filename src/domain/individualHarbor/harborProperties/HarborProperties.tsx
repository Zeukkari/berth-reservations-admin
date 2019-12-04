import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './harborProperties.module.scss';
import Card from '../../../common/card/Card';
import Text from '../../../common/text/Text';
import Grid from '../../../common/grid/Grid';
import ExternalLink from '../../../common/externalLink/ExternalLink';
import Property from '../property/Property';

interface Props {
  imageUrl: string;
  name: string;
  address: string;
  url: string;
  properties: {
    electricity: boolean;
    gate: boolean;
    maximumWidth: number;
    numberOfPlaces: number;
    water: boolean;
    wasteCollection: boolean;
    lighting: boolean;
  };
}

const HarborProperties: React.SFC<Props> = ({
  name,
  address,
  imageUrl,
  url,
  properties,
}) => {
  const { t } = useTranslation();

  return (
    <Card title={t('individualHarbor.harborProperties.title')}>
      <Grid>
        <img alt="Harbor's location" src={imageUrl} className={styles.image} />
        <div>
          <Text as="h2" size="xl">
            {name}
          </Text>
          <ExternalLink to={url}>{address}</ExternalLink>
        </div>
        <Grid colsCount={4}>
          <Property
            counter={properties.numberOfPlaces}
            label={t('individualHarbor.harborProperties.numberOfPlaces')}
            active={!!properties.numberOfPlaces}
          />
          <Property
            iconName="globe"
            label={t('individualHarbor.harborProperties.queue')}
          />
          <Property
            iconName="plug"
            label={t('individualHarbor.harborProperties.electricity')}
            active={properties.electricity}
          />
          <Property
            iconName="waterTap"
            label={t('individualHarbor.harborProperties.water')}
            active={properties.water}
          />
          <Property
            counter={properties.maximumWidth}
            label={t('individualHarbor.harborProperties.maximumWidth')}
          />
          <Property
            iconName="trash"
            label={t('individualHarbor.harborProperties.wasteCollection')}
            active={properties.wasteCollection}
          />
          <Property
            iconName="fence"
            label={t('individualHarbor.harborProperties.gate')}
            active={properties.gate}
          />
          <Property
            iconName="streetLight"
            label={t('individualHarbor.harborProperties.lighting')}
            active={properties.lighting}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default HarborProperties;
