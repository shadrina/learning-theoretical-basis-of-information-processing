import React from 'react'
import axios from 'axios'

import { Tree, treeUtil } from 'react-d3-tree'
import CenteredTree from './CenteredTree'

import PageHeader from 'react-bootstrap/lib/PageHeader'
import Panel from 'react-bootstrap/lib/Panel'
import Label from 'react-bootstrap/lib/Label'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Button from 'react-bootstrap/lib/Button'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'

const generateElement = (key,value) => {
    if (value === null) {
        return { name: key };
    } else if (typeof value === 'string' || value instanceof String) {
        return { name: key, children: [ { name: value } ] }
    } else {
        return { name: key, children: Object.keys(value).map(key => generateElement(key, value[key])) };
    }
};

export default class Lab2 extends React.Component {

    constructor() {
        super();
        this.state = {
            xml: "",
            treeData: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleRequest = this.handleRequest.bind(this);
        this.generateTreeData = this.generateTreeData.bind(this);
    }

    handleChange(e) {
        this.setState({ xml: e.target.value });
    }

    handleRequest() {
        axios.post("/lab2/parse", { 'xml': this.state.xml })
            .then(response => {
                console.log(this.generateTreeData(response.data));
                this.setState({ treeData: this.generateTreeData(response.data) });
            })
            .catch(error => console.error(error))
    }

    generateTreeData(mockData) {
        console.log(mockData);
        return Object.keys(mockData).map(key => generateElement(key, mockData[key]));
    }

    render() {
        return (
            <div>
                <PageHeader>
                    Лабораторная работа #2{' '}
                    <Label>done</Label>
                </PageHeader>
                <Panel bsStyle="warning">
                    <Panel.Heading>
                        <Panel.Title toggle>Задание</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        Написать программу, которая визуализирует дерево, полученное поиском из XML-документа.
                    </Panel.Body>
                </Panel>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title>Решение</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Введите данные в формате xml файла</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                value={this.state.xml}
                                placeholder="Enter XML data here..."
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <Button onClick={this.handleRequest}>
                            Построить дерево
                        </Button>
                    </Panel.Body>
                    <Panel.Body>
                        {this.state.treeData === null ? [] : (<CenteredTree data={this.state.treeData} />)}
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}