import React, { Component } from 'react';

class Images extends Component {
    render() {
        return (
            <div className="searchedImages">

                <img className="searchedImage" key={this.props.images.key} src={`https://farm${this.props.images.farm}.staticflickr.com/${this.props.images.server}/${this.props.images.id}_${this.props.images.secret}.jpg`} />

                {/* https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg  
                
                https://farm{%this.props.images.farm%}.staticflickr.com/{%this.props.images.server%}/{%this.props.images.id%}_{%this.props.images.secret%}.jpg*/}

                {/* return <img key={image} src={require(`./icons/${image}.png`)} className="img-responsive" /> */}


                {/* {
                    this.props.images.id
                } */}
            </div>
        );
    }
}

export default Images;