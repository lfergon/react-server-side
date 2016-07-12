import React from 'react';
import HelloWorld from '../components/hello-world';
import CommentBox from '../components/comments';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default class SimplePage {

	getElements() {
		return [<Navbar/>, <HelloWorld/>, <Footer/>];
	}

	getHeadStylesheets() {
		return [
			'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'
		];
	}

	getMetaTags() {
		return [
			{charset: 'utf8'},
			{'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{name: 'description', content: 'hello world test, powered by React Server'},
			{name: 'generator', content: 'React Server'}
		];
	}

}
