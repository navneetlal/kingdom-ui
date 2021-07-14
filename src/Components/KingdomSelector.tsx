import React, { useState } from 'react';
// import { useMinimalSelectStyles } from '@mui-treasury/styles/select/minimal';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import deepPurple from '@material-ui/core/colors/deepPurple';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon';

// Original design here: https://github.com/siriwatknp/mui-treasury/issues/540

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select: {
        display: 'flex',
        minWidth: 240,
        background: 'white',
        borderStyle:'none',
        borderRadius: 8,
        paddingLeft: 24,
        paddingTop: 14,
        paddingBottom: 15,
        boxShadow: 'none',
        "&:focus":{
          borderRadius: 8,
          background: 'white',
        },
        '&[aria-expanded="true"]':{
          background: grey[50]
        },
        "& > div":{
          display:'inline-flex' // this shows the icon in the SelectInput but not the dropdown
        }
      },
      icon:{
        color: blue[500],
        right: 12,
        position: 'absolute',
        userSelect: 'none',
        pointerEvents: 'none'
      },
      paper: {
        borderRadius: 4,
        marginTop: 8
      },
      list: {
        paddingTop:0,
        paddingBottom:0,
        paddingRight:8,
        paddingLeft:8,
        background:'white',
        "& li":{
          paddingTop:12,
          paddingBottom:12,
          paddingRight:8,
          paddingLeft:8,
        },
        "& li:hover":{
          background: blue[50]
        },
        "& li.Mui-selected":{
          color:'black',
          background: 'white'
        },
        "& li.Mui-selected:hover":{
          background: blue[50]
        }
      },
      listIcon: {
        minWidth: 32,
        display: 'none' // hide the ListItemIcon in the dropdown
      }
  }),
);

const MinimalSelect = () => {
  const [val,setVal] = useState(1);

  const handleChange = (event: any) => {
    setVal(event.target.value);
  };

  const outlineSelectClasses = useStyles();

  const iconComponent = (props: any) => {
    return (
      <ExpandMoreIcon className={props.className + " " + outlineSelectClasses.icon}/>
    )};

  // moves the menu below the select input
  const menuProps = {
    classes: {
        paper: outlineSelectClasses.paper,
        list: outlineSelectClasses.list
      },
      anchorOrigin: {
        vertical: "bottom",
          horizontal: "left"
      },
      transformOrigin: {
        vertical: "top",
          horizontal: "left"
      },
      getContentAnchorEl: null
  } as const;

  return (
    <FormControl>
      <Select
        disableUnderline
        classes={{ root: outlineSelectClasses.select }}
        MenuProps={menuProps}
        IconComponent={iconComponent}
        value={val}
        onChange={handleChange}
      >
        <MenuItem value={0}>
          <span style={{marginTop:3}}>
            Sort by Date Created
          </span>
        </MenuItem>
        <MenuItem value={1}>
          <span style={{marginTop:3}}>
            Sort by Name
          </span>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default MinimalSelect;