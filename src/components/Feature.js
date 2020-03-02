import React from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle
} from 'reactstrap';
import EllipsisText from 'react-ellipsis-text';

const Feature = (props) => {
    return (
        <Card className="feature">
            {
            props.card
            }
            <CardBody className="feature-body">
                <CardTitle className='navcard-title text-center'>
                    {
                    props.title
                }</CardTitle>
                <div className="navcard-text">
                    <CardText><EllipsisText text={
                                props.text
                            }
                            length={"190"}/></CardText>
                </div>
            </CardBody>
        </Card>
    );
};

export default Feature;
