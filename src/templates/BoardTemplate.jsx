import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Image, Button } from 'semantic-ui-react'

const BoardView = ({ data }) => {
  const board = data.contentfulBoard

  return(
    <Layout>
      <BoardTemplateWrapper color={board.color}>
        <div className="border">
          <div>
            <h3 className="text">{board.name}. {board.motto}</h3>
          </div>
          <div>
            <p className="text">{board.years}</p>
          </div>
          <div className="photo-members">
            <div>
            <Image size="medium" src={board.photo.file.url} />
            </div>
            <div>
            <p>Bestuursleden:</p>
            {board.members.map(member =>
              <p key={member} className="member">{member}</p>
             )}
            </div>
          </div>
          <div className="button-group">
            { showButton(board) }
          </div>
        </div>
      </BoardTemplateWrapper>
    </Layout>
  )
}

const showButton = board => {

  const prev = <Button labelPosition="left" icon="left chevron" content="vorig bestuur"
                       href={'/besturen/' + (board.number-1)} className="button"/>

  const next = <Button labelPosition="right" icon="right chevron" content="volgend bestuur"
                       href={'/besturen/' + (board.number+1)} className="button"/>

  if(board.number === 1){
   return(next)
  }
  if(board.number === 13){ //TODO: based on current boardnumber
  return(prev)
  }
  return(
    <>
    {prev}
    {next}
    </>
  )
}

const BoardTemplateWrapper = styled.div`
  padding: 1em;
  .border {
    border: 3px
    ${props => (props.color ? `solid ${props.color}` : 'dashed #efefef')};
    border-radius: 5px;
    padding: 5px;
  }
  .image {
    margin-right: 1em;
  }
  .text {
    padding: 5px;
  }
  .photo-members {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .member {
    font-weight: bold;
  }
  .button-group {
    margin-top: 1em;
  }
  .button {
    background-color: #000078;
    color: #fff;
  }
`

export const boardQuery = graphql`
  query boardQuery($id: String!) {
    contentfulBoard(id: { eq: $id }) {
          id
          name
          years
          number
          motto
          members
          color
          photo {
            file {
              url
            }
          }
        }
      }
`

export default BoardView
