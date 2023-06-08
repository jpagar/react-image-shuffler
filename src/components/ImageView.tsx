import React, {useState, useEffect} from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";


interface Props {
    imageUrl: string
}

export const ImageView = ({imageUrl}: Props) => {
    const [image, setImage] = useState<string | undefined>("")


    useEffect(() => {
        setImage(imageUrl)
    }, [image, imageUrl])

    return (
        <Row className="py-3 bg-dark-subtle rounded-1">
            <Image src={image} className="" fluid></Image>
        </Row>
    )
}