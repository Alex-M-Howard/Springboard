import React, {useState} from 'react';

// Import Components
import Link from 'next/link';
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Color from '@/pages/colors/[color]'

function Colors() {
  const initialColors = [
    { name: "red", value: "rgb(237, 19, 41)" },
    { name: "green", value: "rgb(73, 245, 102)" },
    { name: "blue", value: "rgb(5, 5, 242)" }
  ];

  const [colors, setColors] = useState(initialColors);
  const addColors = color => setColors([...colors, color]);
  
  const colorList = colors.map(color => {
    return (
      <List>
        <ListItem sx={{ m: -2 }}>
          <Link href={{pathname: `/colors/${color.name}`, query: {name: color.name, value: color.value}}}>
            {color.name}
          </Link>
        </ListItem>
      </List>
    );
  });

  return (
    <Grid
      container
      justifyContent="center"
      direction='column'
      alignItems='center'
    >
      <Grid
        container
        justifyContent="space-around"
        alignContent="center"
        direction="column"
        style={{
          height: "150px",
          backgroundColor: '#000',
          color: '#FFF'
        }}
      >
        <h4>Welcome to the color factory.</h4>
        <Link
          href="/colors/new"
          style={{
            fontSize: '1.5rem',
            color: 'white',
            fontWeight: 'bolder',
            textDecoration: 'underline', 
            textAlign: 'center', 
            position: 'relative', 
            bottom: '35px'
          }}
        >
          Add a color
        </Link>
      </Grid>

      <p>Please select a color:</p>
      {colorList}

    </Grid>
  );
}

export default Colors;
