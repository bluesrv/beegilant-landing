import React from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    Button
} from 'reactstrap';
import {Link} from 'react-router-dom';
import EllipsisText from 'react-ellipsis-text';

const NavigatorCard = (props) => {
    return (
        <Card className="card">
            <CardBody>
                <CardTitle className='navcard-title'>
                    {
                    props.title
                }</CardTitle>
            </CardBody>
            {
            props.card
        }
            <CardBody>
                <div className="navcard-text">
                    <CardText><EllipsisText text={
                                props.text
                            }
                            length={"190"}/></CardText>
                </div>
                <Button className="navcard-button">
                    <Link to={
                        props.link
                    }>Ver Más</Link>
                </Button>
            </CardBody>
        </Card>
    );
};

export default NavigatorCard;
