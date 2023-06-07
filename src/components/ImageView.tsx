import React, {useState, useEffect} from "react";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import {Ratio} from "react-bootstrap";

interface Props {
    imageUrl: string
}

export const ImageView = ({imageUrl}: Props) => {
    const [image, setImage] = useState<string | undefined>("")


    useEffect(() => {
        setImage(imageUrl)
    }, [image, imageUrl])

    return (
        <Container>
            <Row className="py-3 bg-dark-subtle rounded-1">
                <Ratio aspectRatio="16x9">
                    <Image src={image} className=""></Image>
                </Ratio>
            </Row>
        </Container>
    )
}