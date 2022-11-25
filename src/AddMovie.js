


const AddMovie = (props) => {
    return (
        <div>
            <input  placeholder="Title" type='text' name='title' value={props.newFilms.title} onChange={props.handelChange} /><br />
            <input  placeholder="description" type='text' name='description' value={props.newFilms.description} onChange={props.handelChange} /><br />
            <input  placeholder="Url" type='text' name='posterUrl' value={props.newFilms.posterUrl} onChange={props.handelChange} /><br />
            <input placeholder="rating" type='text' name='rating' value={props.newFilms.rating}  onChange={props.handelChange} /><br />
            <button onClick={props.handelSubmit} >Add</button>
        </div>
    )
    
}

export default AddMovie
