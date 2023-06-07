import React, {useEffect} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";




export const Quote = () => {

	const [quote, setQuote] = React.useState("");
	const [author, setAuthor] = React.useState("");

	//
	useEffect(() => {
		fetchQuote();
	},[])

	const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Proxy server URL
	const targetUrl = 'http://zenquotes.io/api/random'; // Target API URL

	const fetchQuote = async () =>{
		fetch(proxyUrl + targetUrl)
			.then(response => {
				if(response.ok){
					return response.json()
				}
			})
			.then(data => {
				const randomQuote = data[0]
				setQuote(randomQuote.q)
				setAuthor(randomQuote.a)
			})
			.catch(error =>{
				console.log(`Error fetching quote: ${error}`)
			})
	}

	return (
		<Container>
			<Row>
				<Col className="text-center bg-dark-subtle shadow-lg p-2 rounded-2">
					<h3>{quote}</h3>
					<h5>-{author}</h5>
					<Button onClick={fetchQuote} className="btn-primary">Generate Quote</Button>
				</Col>
				{/*<Col></Col>*/}
			</Row>

		</Container>

	)
}