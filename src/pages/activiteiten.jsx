import React from 'react';
// import styled from 'styled-components';

const Activiteiten = ({ data }) => {
  const activiteiten = data.allActivity.edges;
  return (
    <div>
      { activiteiten.map(activity => (
          activity.node.id != -1 ? 
            <p key={activity.node.id}>
                <img src={activity.node.poster} width="50%" alt={`${activity.node.name}-poster`} />
            </p>
          :
          <p>
            Er zijn geen activiteiten om weer te geven
          </p>
      ))}
    </div>
    );
};

export const ActivitiesQuery = graphql`
    query ActivitiesQuery {
        allActivity {
            edges{
                node {
                    id 
                    name
                    location
                    start_date
                    end_date
                    poster
                    fullness
                }
            }
        }
    }
`;

export default Activiteiten;
