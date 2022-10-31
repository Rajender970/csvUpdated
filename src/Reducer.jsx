import React from "react";

const initialState = {
  data: [],
  search: [],
  searcheddata: [],
  headers: [],
  searchStatus: ""
};
function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATA":
      return { ...state, data: payload, search: [] };

    case "GET_HEADERS":
      return { ...state, headers: payload };

    case "SEARCH_DATA":
      let data = payload;
      let stock = data
        .map((d) => parseInt(d.stock))
        .reduce((x, y) => {
          return x + y;
        });
      let rate = data.map((r) => parseFloat(r.rate));

      let mrp = data.map((r) => parseFloat(r.mrp));

      let name, free, deal, exp;
      data.map((m) => {
        name = m.name;
        free = m.free;
        deal = m.deal;
        exp = m.exp;
      });
      let searchData = [
        {
          name: name,
          batch: data.map((b) => b.batch),
          stock: stock,
          free: free,
          deal: deal,
          mrp: Math.max(...mrp),
          rate: Math.max(...rate),
          exp: exp
        }
      ];
      return { ...state, search: searchData, searcheddata: payload };

    default:
      return state;
  }
}

export default reducer;
