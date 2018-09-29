import React from 'react'
import axios from 'axios'

import PageHeader from 'react-bootstrap/lib/PageHeader'
import Grid from 'react-bootstrap/lib/Grid'
import Panel from 'react-bootstrap/lib/Panel'
import Label from 'react-bootstrap/lib/Label'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Button from 'react-bootstrap/lib/Button'
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import HelpBlock from "react-bootstrap/lib/HelpBlock";


export default class Lab1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            result: null
        };

        this.handleRequest = this.handleRequest.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            file: e.target.files[0]
        });
    }

    handleRequest() {
        let formData = new FormData();
        formData.append("file", this.state.file);
        axios.post("/lab1/process", formData)
            .then(response =>
                this.setState({
                    result: response.data
                })
            )
    }

    render() {
        return (
            <div>
                <PageHeader>
                    Лабораторная работа #1{' '}
                    <Label>done</Label>
                </PageHeader>
                <Panel bsStyle="warning">
                    <Panel.Heading>
                        <Panel.Title toggle>Задание</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        Написать программу, которая сравнивает данные в строках таблицы в CSV-файле
                        с учётом контекста.
                    </Panel.Body>
                </Panel>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title>Решение</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <FormGroup controlId="fileUpload">
                            <ControlLabel>Загрузить</ControlLabel>
                            <FormControl type="file" accept=".csv" onChange={this.onChange} />
                            <HelpBlock>Выберите .csv файл</HelpBlock>
                        </FormGroup>
                        <Button onClick={this.handleRequest}>
                            Сравнить
                        </Button>
                        {this.state.result}
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}