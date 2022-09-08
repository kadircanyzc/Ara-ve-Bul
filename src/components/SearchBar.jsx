import React from "react";
import { FaSearchLocation } from "@react-icons/all-files/fa/FaSearchLocation";
import { IconContext } from "react-icons";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SearchBar(props) {
  return (
    <div className="searchBar">
      <div onSubmit={props.submit}>
        <div className="search-bar">
          <div className="search-bar__files">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: {
                  xs: 100,
                  sm: 120,
                  md: 150,
                  lg:200,
                  xl:200
                }},
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Ne arıyorsunuz?"
                variant="outlined"
                value={props.value}
                onChange={(e) => props.setSearchValue(e.target.value)}
              />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1,  width: {
                  xs: 100,
                  sm: 120,
                  md: 150,
                  lg:200,
                  xl:200
                } },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Nerede?"
                variant="outlined"
                value={props.value}
                onChange={(e) => props.setSearchValue2(e.target.value)}
              />
            </Box>

            <button className="search_bar_button">
              <IconContext.Provider value={""}>
                <div>
                  <FaSearchLocation type="submit" />
                </div>
              </IconContext.Provider>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className='searchBar'>
// <form  onSubmit={props.submit}>
//           <div className="search-bar">
//               <div className="search-bar__files">
//                   <input
//                       className="search-bar__input--business"
//                       placeholder="Ne Arıyorsunuz?"
//                       value={props.value}
//                       onChange={(e) => props.setSearchValue(e.target.value)}
//                   />
//                   <input
//                       className="search-bar__location"
//                       placeholder="Nerede?"
//                       value={props.value}
//                       onChange={(e) => props.setSearchValue2(e.target.value)}
//                   />

//                   <button className="search_bar_button">

//                       <IconContext.Provider value={""}>
//                           <div>
//                               <FaSearchLocation type='submit' />
//                           </div>
//                       </IconContext.Provider>

//                   </button>

//               </div>

//           </div>
//           </form>
//       </div>
