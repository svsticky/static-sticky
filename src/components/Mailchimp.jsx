import React from 'react';
import { Card } from 'semantic-ui-react';

class Mailchimp extends React.Component {
  render() {
    return (
      <>
        <div>
          <h2>Mailchimp signup form</h2>
          <Card fluid>
            <div>
              <form
                action="https://svsticky.us5.list-manage.com/subscribe/post?u=f1bd25633d7d6479e3daca998&id=d96e096a38"
                method="post"
                target="_blank"
                class="ui form"
              >
                <div class="field">
                  <label>Email Address </label>
                  <input
                    type="email"
                    name="email-address"
                    placeholder="name@organisation.nl"
                  />
                </div>
                <div class="field">
                  <label htmlFor="mce-FIRSTNAME">First Name </label>
                  <input type="text" name="FIRSTNAME" className />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-LASTNAME">Last Name </label>
                  <input type="text" name="LASTNAME" className />
                </div>
                <div className="mc-field-group input-group">
                  <strong>Sticky Mailing </strong>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        defaultValue={1}
                        name="group[13][1]"
                      />
                      <label htmlFor="mce-group[13]-13-0">
                        MaandagMorgenMail
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        defaultValue={2}
                        name="group[13][2]"
                      />
                      <label htmlFor="mce-group[13]-13-1">
                        Bedrijfsmailing
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        defaultValue={4}
                        name="group[13][4]"
                      />
                      <label htmlFor="mce-group[13]-13-2">ALV Mailing</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        defaultValue={8}
                        name="group[13][8]"
                      />
                      <label htmlFor="mce-group[13]-13-3">
                        Lezingen en workshops
                      </label>
                    </li>
                  </ul>
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
                  />
                </div>
              </form>
            </div>
          </Card>
        </div>
      </>
    );
  }
}

export default Mailchimp;
