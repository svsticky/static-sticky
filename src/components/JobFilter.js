import React from 'react';
import { Button, Checkbox, Dropdown, Input, Menu } from 'semantic-ui-react';


const JobFilter = (props) => {
    return (
        <div>
            Filteren op:
            <Menu vertical size="small" fluid>
                <Menu.Item onClick={() => props.toggleStudiesFilter("informatica")} >
                    <Checkbox checked={props.studies_filter.includes("informatica")} label='Informatica'/>
                </Menu.Item>
                <Menu.Item onClick={() => props.toggleStudiesFilter("informatiekunde")}>
                    <Checkbox checked={props.studies_filter.includes("informatiekunde")} label='Informatiekunde'/>
                </Menu.Item>
                <Menu.Item onClick={() => props.toggleStudiesFilter("gametechnologie")}>
                    <Checkbox checked={props.studies_filter.includes("gametechnologie")} label='Gametechnologie'/>
                </Menu.Item>
                <Menu.Item onClick={() => props.toggleStudiesFilter("artificial-intelligence")}>
                    <Checkbox checked={props.studies_filter.includes("artificial-intelligence")} label='Artificial Intelligence'/>
                </Menu.Item>
                <Menu.Item onClick={() => props.toggleStudiesFilter("business-informatics")}>
                    <Checkbox checked={props.studies_filter.includes("business-informatics")} label='Business Informatics'/>
                </Menu.Item>
                <Menu.Item onClick={() => props.toggleStudiesFilter("computing-science")}>
                    <Checkbox checked={props.studies_filter.includes("computing-science")} label='Computing Science'/>
                </Menu.Item>
                <Menu.Item onClick={() => props.toggleStudiesFilter("game-and-media-technology")}>
                    <Checkbox checked={props.studies_filter.includes("game-and-media-technology")} label='Game and Media Technology'/>
                </Menu.Item>            
            </Menu>
            <p>Toegepaste studie-filter: <br/> {props.studies_filter}</p>
            <br/>
            <br/>
        </div>
    )
}

export default JobFilter

// onClick={() => props.toggleStudiesFilter("Game and Media Technology")}