import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.scss';
import Modal from './modal';
import Card from './Card';
import Loader from './loader'

class Gallery extends React.PureComponent {

    static propTypes = {

        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                status: PropTypes.string.isRequired,
                species: PropTypes.string.isRequired,
                gender: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                origin: PropTypes.shape({ name: PropTypes.string.isRequired, }),
                location: PropTypes.shape({ name: PropTypes.string.isRequired, }),
            }),
        ),
        pages: PropTypes.shape({
            currentPage: PropTypes.number.isRequired,
            totalPages: PropTypes.number.isRequired,
        }),
    };

    state = {
        modalActive: false,
        selectedItem: null,
        items: this.props.items,
    }

    setModalActive = (modalActive, selectedItem = null) => {
        if (modalActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }

        this.setState({ modalActive, selectedItem });
    }

    selectCard = (currentItem) => {
        this.setModalActive(true, currentItem);
    }

    render() {
        return (
            <>
                <div className='ItemGallery'>
                    {
                        this.props.items.map(item =>
                            <Card key={item.id} item={item} cbSelectCard={this.selectCard} />
                        )
                    }
                </div>
                {
                    this.state.selectedItem && <Modal active={this.state.modalActive} setActive={this.setModalActive} item={this.state.selectedItem} />
                }
                <Loader showComponent={this.props.pages.currentPage < this.props.pages.totalPages}></Loader>
            </>
        );
    }
}

export default Gallery;
