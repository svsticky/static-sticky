import React from 'react';
import Layout from '../../components/layout/Layout';
import { Image, Grid, Button, Container, Header } from 'semantic-ui-react';
import { getTranslation, getLanguage, metadata } from '../../data/i18n';

const columns = ['kleur', 'outline_zwart', 'outline_wit', 'kleur'];
const rows = ['hoofd', 'logo_compact', 'logo'];

const CreateCell = (row, column) => {
  const white = column.includes('wit');
  const color = white ? 'black' : null;

  return (
    <Grid.Column color={color}>
      {/* <Header textAlign="center">Kleur</Header>  */}
      <Image
        size="massive"
        centered
        src={`https://public.svsticky.nl/logos/${row}_${column}.svg`}
      />
      <br />
      <Container textAlign="center">
        <Button
          primary
          as="a"
          href={`https://public.svsticky.nl/logos/${row}_${column}.png`}
          target="_blank"
        >
          PNG
        </Button>
        <Button
          primary
          as="a"
          href={`https://public.svsticky.nl/logos/${row}_${column}.svg`}
          target="_blank"
        >
          SVG
        </Button>
      </Container>
    </Grid.Column>
  );
};

const Huisstijl = props => {
  const language =
    typeof window !== 'undefined'
      ? getLanguage(window)
      : metadata.defaultLocale;
  const title = getTranslation(language, 'branding.title');

  let all_rows = [];
  rows.forEach(row => {
    let new_columns = [];
    columns.forEach(column => {
      new_columns.push(CreateCell(row, column));
    });
    all_rows.push(new_columns);
  });

  return (
    <Layout title={title}>
      <h2>{title}</h2>
      Op deze pagina wordt toegelicht hoe de huisstijl van Sticky werkt.
      <h3>Logo's</h3>
      <Grid divided>
        <Grid.Row columns={1}>
          {/* <Grid.Column textAlign='center'>
            <h4>Hoofd</h4>
          </Grid.Column> */}
        </Grid.Row>
        <Grid.Row columns={4}>
          {all_rows[0][0]}
          {all_rows[0][1]}
          {all_rows[0][2]}
          {all_rows[0][3]}
        </Grid.Row>
        <Grid.Row columns={4}>
          {all_rows[1][0]}
          {all_rows[1][1]}
          {all_rows[1][2]}
          {all_rows[1][3]}
        </Grid.Row>
        <Grid.Row columns={4}>
          {all_rows[2][0]}
          {all_rows[2][1]}
          {all_rows[2][2]}
          {all_rows[2][3]}
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export default Huisstijl;
