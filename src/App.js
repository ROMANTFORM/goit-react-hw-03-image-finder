import { React, Component } from 'react';
import axios from 'axios';

// Styles
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// Components
import SearchBar from './components/searchbar';
import ImageGallery from './components/imageGallery';
import Button from './components/button';
import Modal from './components/modal';
import Loader from "react-loader-spinner";
import button from './components/button';
import {ReactComponent as IconClose } from './icons/cancel.svg'


const KEY = '21338809-8e79b9b5850d2aac12371ada0';
const BASE_URL = 'https://pixabay.com/api/';

class App extends Component{
  state = {
    images: [],
    modalImg: '',
    showModal: false,
    searchValue: '',
    page: 1,
    isLoading: false
  };

  getSearchValue = (value) => {
    
    this.setState({ searchValue: value, isLoading: true });

    axios.get(`${BASE_URL}?q=${value}&page=${this.state.page}&per_page=21&key=${KEY}`)
      .then(res => this.setState({ images: res.data.hits, page: 1 }))
      .catch(error => console.log(error))
      .finally(() => this.setState({isLoading: false}));
  };
  
  getLoadMore = () => {
    axios.get(`${BASE_URL}?q=${this.state.searchValue}&page=${this.state.page += 1}&per_page=21&key=${KEY}`, this.state.images)
      .then(res => this.setState(({images}) => ({images: [...images, ...res.data.hits]})))
      .catch(error => console.log(error));
  };

  toggleModal = () => {
    this.setState(({showModal}) => ({ showModal: !showModal }))
  };

  onImgClick = evt => {
    if (evt.currentTarget.localName === 'img') {
      this.setState({modalImg: evt.currentTarget.dataset.src})
      console.log(evt.currentTarget.dataset.src)
      this.toggleModal()
    }
    
  };

  render() {
    const { showModal, images, isLoading, modalImg } = this.state;

    return (
      <div className="App">

        <SearchBar getValue={this.getSearchValue} />

        <ImageGallery images={this.state.images} onClick={this.onImgClick}/>

        {isLoading && <Loader
        type="Puff"
        color="#728af1"
        height={100}
        width={100}
        timeout={3000} //3 secs
        />}
        
        {images.length !== 0 && <Button onClick={this.getLoadMore}/>}

        {showModal && <Modal onClose={this.toggleModal}>
          <img className="Modal-img" src={modalImg} ></img>
          <button className="Modal-btn" type="button" onClick={this.toggleModal}>
            <IconClose width="20" height="20"></IconClose>
          </button>
        </Modal>}

      </div>
    )
  };
};

export default App;