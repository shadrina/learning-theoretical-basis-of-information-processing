import React from 'react'

import Panel from "react-bootstrap/lib/Panel";
import ListGroup from "react-bootstrap/lib/ListGroup";
import ListGroupItem from "react-bootstrap/lib/ListGroupItem";

export default class InfoPanel extends React.Component {
    render() {
        return (
            <div>
                <Panel>
                    <Panel.Heading>Информация обо мне</Panel.Heading>
                    <ListGroup>
                        <ListGroupItem><b>Студент: </b>Анастасия Шадрина</ListGroupItem>
                        <ListGroupItem><b>Группа: </b>16206</ListGroupItem>
                        <ListGroupItem><b>Курс: </b>3</ListGroupItem>
                        <ListGroupItem>
                            <b>GitHub: </b><a href="https://github.com/shadrina">тык</a>
                        </ListGroupItem>
                        <ListGroupItem>
                            <b>Почта: </b>a.shadrina5@mail.ru
                        </ListGroupItem>
                    </ListGroup>
                </Panel>
                <Panel>
                    <Panel.Heading>Информация о проекте</Panel.Heading>
                    <ListGroup>
                        <ListGroupItem>
                            <b>Описание: </b>Ресурс содержит студенческие лабораторные работы по курсу
                            теоретических основ обработки информации
                        </ListGroupItem>
                        <ListGroupItem>
                            <b>GitHub: </b>
                            <a href="https://github.com/shadrina/learning-theoretical-basis-of-information-processing">
                                тык
                            </a>
                        </ListGroupItem>
                    </ListGroup>
                </Panel>
            </div>
        )
    }
}