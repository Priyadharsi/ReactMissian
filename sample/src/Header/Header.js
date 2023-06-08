import React from 'react'
import { useState } from 'react';
import logo from '../image/logo.png';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import './Header.css'
import Products from '../Products/Products';
import { Link } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


const Header = () => {
  const details=useState(localStorage.getItem(productdetails));
  const [data,setData]=useState(details);

    const lowtohigh=()=>{const newdata=[...data].sort((a,b)=>a.Price-b.Price);setData(newdata)}
    const hightolow=()=>{const newdata1=[...data].sort((a,b)=>a.Price-b.Price);setData(newdata1.reverse())}
    // const Filter=()=>{const newdata2=furnituretype.filter((el,i)=>el. === true);setFurnituretype(newdata2)}
  //   const newobj3=()=>{const newdata3=[...name].sort((a,b)=>{
  //        if (a.name < b.name){
  //          return -1;
  //        }
  //        if (a.name > b.name){
  //          return 1;
  //        }
  //        return 0;
         
  //      })
  //      setName(newdata3);
  //    };
  //    const newobj4=()=>{const newdata4=[...name].sort((a,b)=>{
  //      if (a.name > b.name){
  //        return -1;
  //      }
  //      if (a.name < b.name){
  //        return 1;
  //      }
  //      return 0;
       
  //    })
  //    setName(newdata4);
  //  };
  const handleChange = (event) => {
    setData(event.target.value);
  };
  return (
    <div className='Header-section'>
      <div className='container'>
        <div className='heading'>
          <div className='header-logo'>
            <img src={logo}></img>
          </div>
          <div className='navbar d-none d-lg-block'>
            <span><a href='Home'>Home</a></span>
            <span><a href='Blog'>Blog</a></span>
            <span><a href='Shop'>Shop</a></span>
            <span><a href='Page'>Page</a></span>
          </div>
          <div className='startbtn'>
             <a href='#'><SearchIcon /></a>
             {data.map(
            (n,i)=><div  key={i}>{n.data} {n.price}</div>)}

             <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">SortBy</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={data}
                    label="data"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem onclick =  {lowtohigh} value={lowtohigh}>Low to High</MenuItem>
                    <MenuItem onclick =  {hightolow} value={hightolow}>High to Low</MenuItem>
                    {/* <MenuItem value={Filter}>Filter</MenuItem> */}
                  </Select>
              </FormControl>
             
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header