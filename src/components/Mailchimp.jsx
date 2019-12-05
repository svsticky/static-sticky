import React from 'react';
import { Card } from 'semantic-ui-react';

class Mailchimp extends React.Component {
  render() {
    return (
      <>
        <Card fluid>
          <div>
            <form
              action="https://svsticky.us5.list-manage.com/subscribe/post?u=f1bd25633d7d6479e3daca998&id=d96e096a38"
              method="post"
              target="_blank"
              class="ui form"
              name="mc-embedded-subscribe-form"
            >
              <div class="field">
                <label>E-mail adres</label>
                <input
                  type="email"
                  placeholder="naam@svsticky.nl"
                  name="EMAIL"
                />
              </div>
              <div class="field">
                <label>Voornaam</label>
                <input type="text" name="FIRSTNAME" placeholder="Pietje" />
              </div>
              <div class="field">
                <label>Achternaam</label>
                <input type="text" name="LASTNAME" placeholder="Puk" />
              </div>
              <div class="grouped fields">
                <div class="field">
                  <div class="ui checkbox">
                    <input
                      type="checkbox"
                      defaultValue={1}
                      name="group[13][1]"
                    />
                    <label>MaandagMorgenMail</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui checkbox">
                    <input
                      type="checkbox"
                      defaultValue={2}
                      name="group[13][2]"
                    />
                    <label>Bedrijfsmailing</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui checkbox">
                    <input
                      type="checkbox"
                      defaultValue={8}
                      name="group[13][8]"
                    />
                    <label>Lezingen en workshops</label>
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
                  defaultValue="Subscribe"
                  name="subscribe"
                  className="button"
                  class="ui button"
                  value="Inschrijven"
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
