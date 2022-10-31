import { connect } from "react-redux";
const SearchedData = ({ searcheddata, headers }) => {
  return (
    <>
      <h4>Searched Data</h4>
      <table>
        {
          <tr>
            {headers.map((h) => (
              <td>{h}</td>
            ))}
          </tr>
        }
        {searcheddata.map((d) => (
          <tr>
            <td>{d.code}</td>
            <td>{d.name}</td>
            <td>{d.batch}</td>
            <td>{d.stock}</td>
            <td>{d.deal}</td>
            <td>{d.free}</td>
            <td>{d.mrp}</td>
            <td>{d.rate}</td>
            <td>{d.exp}</td>
            <td>{d.company}</td>
            <td>{d.supplier}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
const mapStateToProps = (state) => ({
  searcheddata: state.searcheddata,
  headers: state.headers
});
const mapDispatchToProps = (dispatch) => {
  return {
    getData: (storeData) => dispatch({ type: "GET_DATA", payload: storeData }),
    getSearchData: (search) =>
      dispatch({ type: "SEARCH_DATA", payload: search })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchedData);
