import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Col
} from 'reactstrap'

function QuoteCard({ joke }) {
    return (
        <>
            <Col>
                <Card>
                    <CardImg top width="100%" src="https://mediadc.brightspotcdn.com/dims4/default/4f87e48/2147483647/strip/true/crop/808x808+0+0/resize/808x808!/quality/90/?url=https%3A%2F%2Fmediadc.brightspotcdn.com%2F72%2Fd9%2F46a05bb16dc6255d60ff6a685472%2F998bdb362952772bbecfc953f6a03a35.jpg" alt="Photo of Chuck Norris" />
                    <CardBody>
                        <CardTitle>Chuck Norris says...</CardTitle>
                        <CardText>{ joke }</CardText>
                    </CardBody>
                </Card>
            </Col>
        </>
    )
}

export default QuoteCard