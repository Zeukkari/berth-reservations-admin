import React from 'react';

import Card from '../../common/card/Card';
import Text from '../../common/text/Text';
import Paragraph from '../../common/paragraph/Paragraph';
import LabelValuePair from '../../common/labelValuePair/LabelValuePair';
import Box from '../../common/box/Box';

interface Props2 {
  name?: string;
  imageFile?: string;
  streetAddress?: string;
  zipCode?: React.ReactNode;
  municipality?: string;
  wwwUrl?: string;
  servicemapId?: string;
}

interface Props {
  data: Props2;
}

const HarborDetails = ({ data }: Props) => {
  const address = `${data.streetAddress} ${data.zipCode} ${data.municipality}`;
  const servicemapUrl = `http://palvelukartta.hel.fi/unit/${data.servicemapId}`;

  const Harbor1 = () => (
    <Card>
      <Paragraph>
        <figure>
          <img src={data.imageFile} width="50%" alt={data.name}></img>
          <figcaption>{data.name}</figcaption>
        </figure>
      </Paragraph>
      <Paragraph title="Osoite">
        <Text color="brand" size="xs">
          {address}
        </Text>
      </Paragraph>
      <Paragraph>
        <Text color="brand" size="s">
          <a href={data.wwwUrl}>Toimipisteen nettisivut</a>
        </Text>
      </Paragraph>
      <Paragraph>
        <Text color="brand" size="s">
          Satamakartta (PDF)
        </Text>
      </Paragraph>
      <Paragraph>
        <Text color="brand" size="s">
          <a href={servicemapUrl}>Palvelukartta</a>
        </Text>
      </Paragraph>
    </Card>
  );

  const Harbor2 = () => (
    <Card>
      <Paragraph>
        <LabelValuePair label="Max leveys" value="2.5m - 4m" />
        <LabelValuePair
          label="Kiinnitys"
          value="Aisa-, Kävelyaisa- ja Peräpoijupaikkoja"
        />
        <LabelValuePair
          label="Päällikkö"
          value="Mikko Mallikas +358 00 000 000"
        />
        <LabelValuePair label="Huoltotiimi" value="Itäinen veneilytiimi" />
      </Paragraph>
    </Card>
  );

  const Harbor3 = () => (
    <Card>
      <Paragraph title="Viimeaikainen toiminta">
        <Text color="brand" size="xs">
          Ei mitään
        </Text>
      </Paragraph>
    </Card>
  );

  return (
    <Box>
      <Harbor1 />
      <Harbor2 />
      <Harbor3 />
    </Box>
  );
};

export default HarborDetails;
