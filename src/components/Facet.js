import React, { useState } from 'react';
import { RefinementList } from 'react-instantsearch-dom';
import { Col, Card } from 'react-bootstrap';


const Facet = ({ attribute }) => {
    const [facetShow, setFacetShow] = useState(true);
    const handleFacetShow = () => setFacetShow(!facetShow);

    return (
        <Col md={12} id="facet">
            <Card>
                <Card.Header onClick={handleFacetShow}>
                    <strong>{attribute.charAt(0).toUpperCase() + attribute.slice(1)}</strong>
                </Card.Header>
                {facetShow &&
                <Card.Body id="facetList">
                    <RefinementList attribute={attribute} searchable={true} showMore={true}/>
                </Card.Body> 
                }
                <Card.Footer />
            </Card>
        </Col>
    );
}
export default Facet;
