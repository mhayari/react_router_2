


const AddMovie = ({newFilms,handelChange,handelSubmit}) => {
    return (
        <div className="add">
            <input  placeholder="Title" type='text' name='title' value={newFilms.title} onChange={handelChange} /><br />
            <input  placeholder="description" type='text' name='description' value={newFilms.description} onChange={handelChange} /><br />
            <input  placeholder="Url" type='text' name='posterUrl' value={newFilms.posterUrl} onChange={handelChange} /><br />
            <input placeholder="rating" type='text' name='rating' value={newFilms.rating}  onChange={handelChange} /><br />
            <button onClick={()=>handelSubmit()} >Add</button>
        </div>
    )
    
}

export default AddMovie
