import React from 'react';
import Layout from '../../components/layout/Layout';
import { Image, Grid, Button, Container } from 'semantic-ui-react';
import { getTranslation, getLanguage, metadata } from '../../data/i18n';

const columns = ['kleur', 'outline_zwart', 'outline_wit', 'kleur'];
const rows = ['hoofd', 'logo_compact', 'logo'];

const CreateCell = (row, column) => {
  const white = column.includes('wit');
  const color = white ? 'black' : null;

  return (
    <Grid.Column color={color}>
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

const tableStyle = {
  'background-color': '#800816',
  color: '#ffffff',
};

const tdStyle = {
  padding: '10px',
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
      <h1>{title}</h1>
      <h2>Logo's</h2>
      <p>
        Het Sticky logo heeft drie verschillende vormen; Het hoofd, de compactie
        versie en het volledige logo. Het hoofd wordt voornamelijk gebruikt op
        Sticky merchandise of handtekeningen van mails. De compacte versie is
        ook terug te vinden op bepaalde merchandise items. Verder wordt dit logo
        voornamelijk gebruikt bij het maken van posters voor activiteiten van de
        vereniging. Als laatste wordt het volledige logo voonramelijk voor breed
        en externe doeleinden gebruikt. Hierbij kan je denken aan promotie
        richting bedrijven en universiteit(en) toe.
      </p>
      <br />
      <Grid divided>
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
      <h2>Kleuren</h2>
      <p>
        Elk bestuur bij Sticky heeft zijn eigen bestuurskleur.
        <i>Dit jaar is het bordeaux rood met de hexcode #800816.</i>
        Sticky heeft oranje als verenigingskleur, maar deze wordt niet altijd
        gebruikt. Voor het gebruik van kleur bij promotie van Sticky wordt
        aangeraden om niet telkens met 1 kleur te werken, maar meerderen die
        goed op elkaar aansluiten. Hiervoor zijn websites als{' '}
        <a href="https://coolors.co">Coolors</a> en{' '}
        <a href="https://color.adobe.com">Adobe Color Wheel</a>.
        <h3>Kleuroverzicht</h3>
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td style={tdStyle}>CYMK</td>
              <td style={tdStyle}>0%, 94%, 83%, 50%</td>
            </tr>
            <tr>
              <td style={tdStyle}>RGB</td>
              <td style={tdStyle}>128, 8, 22</td>
            </tr>
            <tr>
              <td style={tdStyle}>HEX</td>
              <td style={tdStyle}>#800816</td>
            </tr>
          </tbody>
        </table>
      </p>
      <h2>Lettertypes</h2>
      <p>
        In posters wordt er aangeraden om maximaal 1 of 2 fonts te gebruiken. Zo
        wordt de poster niet te vol. De lettertype families 'serif' en
        'sans-serif' worden voornamelijk gebruikt, maar er is altijd vrijheid om
        een andere familie te gebruiken.
      </p>
      <h2>Posters</h2>
      <p>
        De posters bij Sticky hebben een aantal vaste requirements staan. Deze
        zijn er om de kwaliteit en zichtbaarheid van de posters te verbeteren.
        Deze luiden;
        <ul>
          <li>
            Formaat: <b>A3</b>
          </li>
          <li>
            Resolutie: <b>300dpi</b>
          </li>
          <li>
            Oriëntatie: <b>Portret</b>
          </li>
          <li>
            Bestandsformaat: <b>PDF</b>
          </li>
          <li>
            Taal: <b>Engels</b>
          </li>
        </ul>
        <h3>Activiteitenposters</h3>
        <p>
          De titel van de activiteit, datum, locatie, commissie logo en het
          Sticky logo moeten ook altijd te vinden zijn op de posters. Voor de
          datum zijn er geen harde lijnen, maar wordt er geadviseerd de
          DD-MM(m), DD-MM-YY of DD-MM-YYYY notatie te gebruiken. Het enige wat
          wordt afgeraden is de Amerikaanse MM-DD notatie, gezien dit verwarring
          kan brengen met in welke maand de activiteit plaats vind.
        </p>
        <h3>Externposters</h3>
        <p>
          De posters voor extern of onderwijs gerelateerde activiteiten hebben
          soms wat extra vereisten. Zo moet in plaats van het commissie logo het
          logo van een bedrijf komen te staan. Verder wordt het gebruik van het
          volledige logo hier ook aangeraden. De stijl van de poster wordt vaker
          serieuzer en proffessioneler opgesteld om de aard van de activiteit te
          laten zien.
        </p>
      </p>
    </Layout>
  );
};

export default Huisstijl;
