import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../../components/layout/Layout';
import { Image, Grid, Container, Dropdown } from 'semantic-ui-react';
import { getTranslation, getLanguage, metadata } from '../../data/i18n';

const columns = ['kleur', 'zwart', 'wit'];
const rows = ['hoofd', 'logo_compact', 'logo'];

const CreateCell = (row, column, language) => {
  const white = column.includes('wit');
  const color = white ? 'black' : null;

  return (
    <Grid.Column color={color} style={{ padding: '20px' }}>
      <Image
        size="massive"
        centered
        src={`https://public.svsticky.nl/logos/${row}_outline_${column}.svg`}
      />
      <br />
      <Container textAlign="center">
        <Dropdown text="Download" floating labeled button className="icon">
          <Dropdown.Menu>
            <Dropdown.Item
              as="a"
              href={`https://public.svsticky.nl/logos/${row}_outline_${column}.svg`}
              text="SVG"
            />
            <Dropdown.Item
              as="a"
              href={`https://public.svsticky.nl/logos/${row}_outline_${column}.png`}
              text="PNG"
            />
            {row != 'hoofd' && (
              <>
                <Dropdown.Divider />
                <Dropdown.Item
                  as="a"
                  href={`https://public.svsticky.nl/logos/${row}_gevuld_${column}.svg`}
                  text={`${getTranslation(
                    language,
                    'branding.logo.filled'
                  )} SVG`}
                />
                <Dropdown.Item
                  as="a"
                  href={`https://public.svsticky.nl/logos/${row}_gevuld_${column}.png`}
                  text={`${getTranslation(
                    language,
                    'branding.logo.filled'
                  )} PNG`}
                />
              </>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Grid.Column>
  );
};

const tableStyle = board_color => {
  return {
    'background-color': board_color,
    color: '#ffffff',
  };
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
      new_columns.push(CreateCell(row, column, language));
    });
    all_rows.push(new_columns);
  });

  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <h2>{getTranslation(language, 'branding.logo.title')}</h2>
      <p>{getTranslation(language, 'branding.logo.text')}</p>
      <br />
      <Grid divided>
        {all_rows.map(row => {
          return (
            <Grid.Row columns={3} style={{ padding: 0 }}>
              {row[0]}
              {row[1]}
              {row[2]}
            </Grid.Row>
          );
        })}
      </Grid>
      <h2>{getTranslation(language, 'branding.colors.title')}</h2>
      <p>
        {getTranslation(language, 'branding.colors.text', [
          props.data.contentfulBoard.color,
        ])}{' '}
        <a href="https://coolors.co">Coolors</a> &{' '}
        <a href="https://color.adobe.com">Adobe Color Wheel</a>.
        <h3>{getTranslation(language, 'branding.colors.chart')}</h3>
        <table style={tableStyle(props.data.contentfulBoard.color)}>
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
              <td style={tdStyle}>{props.data.contentfulBoard.color}</td>
            </tr>
          </tbody>
        </table>
      </p>
      <h2>{getTranslation(language, 'branding.fonts.title')}</h2>
      <p>{getTranslation(language, 'branding.fonts.text')}</p>
      <h2>{getTranslation(language, 'branding.posters.title')}</h2>
      <p>
        {getTranslation(language, 'branding.posters.text')}
        <ul>
          <li>
            {getTranslation(language, 'branding.posters.requirements.format')}:{' '}
            <b>A3</b>
          </li>
          <li>
            {getTranslation(
              language,
              'branding.posters.requirements.resolution'
            )}
            : <b>300dpi</b>
          </li>
          <li>
            {getTranslation(
              language,
              'branding.posters.requirements.orientation'
            )}
            :{' '}
            <b>
              {getTranslation(
                language,
                'branding.posters.requirements.portrait'
              )}
            </b>
          </li>
          <li>
            {getTranslation(
              language,
              'branding.posters.requirements.file_format'
            )}
            : <b>PDF</b>
          </li>
          <li>
            {getTranslation(language, 'branding.posters.requirements.language')}
            :{' '}
            <b>
              {getTranslation(
                language,
                'branding.posters.requirements.english'
              )}
            </b>
          </li>
        </ul>
        <h3>{getTranslation(language, 'branding.posters.activities_title')}</h3>
        <p>{getTranslation(language, 'branding.posters.activities')}</p>
        <h3>{getTranslation(language, 'branding.posters.external_title')}</h3>
        <p>{getTranslation(language, 'branding.posters.external')}</p>
      </p>
    </Layout>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        contentfulBoard(current: { eq: true }) {
          color
        }
      }
    `}
    render={data => <Huisstijl data={data} {...props} />}
  />
);
