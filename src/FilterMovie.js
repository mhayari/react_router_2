


const FilterMovie = (props) => {
    return (
        <>
        <input placeholder='Filter Title' type='text' name='title'  onChange={props.handelFilterChange} value={props.filterMov.title}  />
            <input placeholder='Filter Rating' type='text' name='rating' onChange={props.handelFilterChange} value={props.filterMov.rating} />
            </>
    )
}

export default FilterMovie