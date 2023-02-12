import Image from "next/image";
import Link from "next/link";


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
       return <Link href={`/Dogs/${dog.name}`} key={dog.name}>
          <Image
            src={`/images/${dog.name}.jpg`}
            alt={dog.name}
            width={250}
            height={250}
            priority
          />
        </Link>;
    })

    return (
      <div style={{ height: '100vh' }}>
        {images}    
      </div>
    );
}

export default Dogs;
