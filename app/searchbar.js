function Searchbar() {
    return (
        <div className="row justify-content-center search_row">
            <div className="col search_box">
                <input
                    className="input_box"
                    placeholder="search..."
                    type="text" />
                <button className="add_btn">
                    <img className="imag" src="Add.png" />
                </button>
            </div>

        </div>
    );
}
export default Searchbar;
