import React from 'react';
import { Card } from 'semantic-ui-react';
import { getTranslation, getLanguage, metadata } from '../data/i18n';

class Mailchimp extends React.Component {
  render() {
    let language =
      typeof window !== 'undefined'
        ? getLanguage(window)
        : metadata.defaultLocale;

    return (
      <>
        <Card fluid>
          <div>
            <form
              action="https://svsticky.us5.list-manage.com/subscribe/post?u=f1bd25633d7d6479e3daca998&id=d96e096a38"
              method="post"
              target="_blank"
              className="ui form"
              name="mc-embedded-subscribe-form"
            >
              <div className="field">
                <label>{getTranslation(language, 'mailchimp.email')}</label>
                <input
                  type="email"
                  placeholder="email@svsticky.nl"
                  name="EMAIL"
                />
              </div>
              <div className="field">
                <label>{getTranslation(language, 'mailchimp.firstname')}</label>
                <input type="text" name="FIRSTNAME" placeholder="Pietje" />
              </div>
              <div className="field">
                <label>{getTranslation(language, 'mailchimp.lastname')}</label>
                <input type="text" name="LASTNAME" placeholder="Puk" />
              </div>
              <div className="grouped fields">
                <div className="field">
                  <div className="ui checkbox">
                    <input
                      type="checkbox"
                      defaultValue={1}
                      name="group[13][1]"
                    />
                    <label>{getTranslation(language, 'mailchimp.mmm')}</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui checkbox">
                    <input
                      type="checkbox"
                      defaultValue={2}
                      name="group[13][2]"
                    />
                    <label>
                      {getTranslation(language, 'mailchimp.company')}
                    </label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui checkbox">
                    <input
                      type="checkbox"
                      defaultValue={8}
                      name="group[13][8]"
                    />
                    <label>
                      {getTranslation(language, 'mailchimp.workshops')}
                    </label>
                  </div>
                </div>
              </div>
              <div className="clear">
                <div className="response" style={{ display: 'none' }} />
                <div className="response" style={{ display: 'none' }} />
              </div>{' '}
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
              <div
                style={{ position: 'absolute', left: '-5000px' }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_f1bd25633d7d6479e3daca998_d96e096a38"
                  tabIndex={-1}
                  defaultValue
                />
              </div>
              <div className="clear">
                <input
                  type="submit"
                  name="subscribe"
                  className="ui button"
                  value={getTranslation(language, 'menu.signup')}
                />
              </div>
            </form>
          </div>
        </Card>
      </>
    );
  }
}

export default Mailchimp;
