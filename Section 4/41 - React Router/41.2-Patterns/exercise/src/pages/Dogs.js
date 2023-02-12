import Image from "next/image";
import Link from "next/link";
import { Grid } from "@mui/material";

function Dogs() {

    const dogs = [
      {
        name: "Whiskey",
      },
      {
        name: "Duke",
      },
      {
        name: "Perry",
      },
      {
        name: "Tubby",
      },
    ];

  const images = dogs.map((dog) => { 
    return (
        <Link href={`/dogs/${dog.name.toLowerCase()}`} key={dog.name}>
          <Image
            src={`/images/${dog.name}.jpg`}
            alt={dog.name}
            width={300}
            height={300}
            priority
          />
        </Link>
    );
    })

    return (
      <Grid
        style={{ height: '100vh' }}
        container
        justifyContent="space-around"
        alignItems="center"
        spacing={4}
      >
        {images}    
      </Grid>
    );
}

export default Dogs;
