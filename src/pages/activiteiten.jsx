import React from 'react';
import styled from 'styled-components';



const Activiteiten = ({data}) => {
    const activiteiten = data.allActivity.edges;
    console.log(activiteiten)
    return(
        <div>
            {
                activiteiten.map( activity => 
                <p key={activity.node.id}> 
                    
                    <img src= {activity.node.poster} width = "50%"/>
                </p>
            )}
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