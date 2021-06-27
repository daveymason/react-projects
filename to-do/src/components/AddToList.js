import React from 'react';

class AddToList extends React.Component{
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addToList(this.state.title);
        this.setState({title: ''})
    }

    onAdd = (e) => this.setState({
        title: e.target.value
    })

    render() {
        return(
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                height: '30px',
                padding: '10px',
                textAlign: 'center'
            }}>
                <form onSubmit={this.onSubmit}>
                    <input 
                    type="text" 
                    name="title" 
                    placeholder="Add to list..."
                    value={this.state.title}
                    onChange={this.onAdd}
                    />

                    <br />

                    <input 
                    type="submit" 
                    value="Let's Do It" 
                    /> 
                </form>
            </div>
        )
    }
}

export default AddToList;