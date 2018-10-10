import React from 'react'
import axios from 'axios'

import PageHeader from 'react-bootstrap/lib/PageHeader'
import Panel from 'react-bootstrap/lib/Panel'
import Label from 'react-bootstrap/lib/Label'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Button from 'react-bootstrap/lib/Button'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'

export default class Lab3 extends React.Component {
    constructor() {
        super();
        this.state = {
            number: -1,
            file: null,
            result: null
        };

        this.onChange = this.onChange.bind(this);
        this.onNumberChange = this.onNumberChange.bind(this);
        this.handleRequest = this.handleRequest.bind(this);
    }

    onChange(e) {
        this.setState({
            file: e.target.files[0]
        });
    }

    onNumberChange(e) {
        this.setState({
            number: e.target.value
        });
    }

    handleRequest() {
        if (this.state.number === -1) {
            return;
        }

        let formData = new FormData();
        formData.append("file", this.state.file);
        formData.append("number", this.state.number);

        axios.post("/lab3/find", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }})
            .then(response => this.setState({ result: response.data }))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <PageHeader>
                    Лабораторная работа #3{' '}
                    <Label>done</Label>
                </PageHeader>
                <Panel bsStyle="warning">
                    <Panel.Heading>
                        <Panel.Title toggle>Задание</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        Реализовать веб-сервис, который показывает из текстового файла
                        строку с выбранным номером.
                    </Panel.Body>
                </Panel>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title>Решение</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <FormGroup controlId="fileUpload">
                            <ControlLabel>Файл</ControlLabel>
                            <FormControl type="file" accept=".txt" onChange={this.onChange} />
                            <HelpBlock>Выберите .txt файл</HelpBlock>
                        </FormGroup>
                        <ControlLabel>Номер строки</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter number"
                            onChange={this.onNumberChange}
                        /><br />
                        <Button onClick={this.handleRequest}>
                            Вывести строку
                        </Button>
                        {
                            this.state.result === null
                                ? []
                                : (
                                    <div>
                                        <br />
                                        <ControlLabel>Строка:</ControlLabel>
                                        <Panel>
                                            <Panel.Body>
                                                {this.state.result}
                                            </Panel.Body>
                                        </Panel>
                                    </div>
                                )
                        }
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}
