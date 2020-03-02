import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Button
} from 'reactstrap';

const Member = (props) => {
    return (
        <Card className="member">
            <CardHeader className="member-name">{props.name}</CardHeader>
            <CardBody>
                {props.img}
            <CardTitle className="member-position">{props.position}</CardTitle>
                <Button color="twitter" href={props.link} target="_blank"><i className="member-icon fa fa-linkedin"/></Button>
            </CardBody>
        </Card>
    );
};

export default Member;